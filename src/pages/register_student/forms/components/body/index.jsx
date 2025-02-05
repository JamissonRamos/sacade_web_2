import * as S from './styled'
import { Form } from 'react-bootstrap'
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane }  from 'mdb-react-ui-kit';
import { useState } from 'react';
import { FieldRegisterStudent } from '../fields';
import { Validations } from '../../../../validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MaskInput } from './script';


const BodyForm = ({checkForm}) => {
    const [basicActive, setBasicActive] = useState('tab1');

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.RegisterStudentSchema)
    });

    const handleBasicClick = (value) => {
        //Tabs nav
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };

    const handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let maskedValue = MaskInput(fieldName, fieldValue)
        setValue(fieldName, maskedValue)
    }

    return (

        <S.Container>
            {
                // Ficou de trazer as variaveis no componete pai do form
                // errorStudents && <Alert variant={'danger'}> {errorStudents } </Alert>
            }
            <Form>
                <MDBTabs className='custom-tabs' >
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            Início
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            Atual
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            Finalizar 
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <S.WrapFields>
                    <MDBTabsContent>
                        <MDBTabsPane open={basicActive === 'tab1'}> 
                            <FieldRegisterStudent.RegisterStat 
                                register={register} 
                                setValue={setValue}
                                getValues={getValues}
                                errors={errors}
                                handleChange={handleChange}
                            />  
                        </MDBTabsPane>
                        <MDBTabsPane open={basicActive === 'tab2'}> 
                            <FieldRegisterStudent.RegisterCurrent 
                                register={register} 
                                setValue={setValue}
                                getValues={getValues}
                                errors={errors}
                                handleChange={handleChange}
                            />  
                        </MDBTabsPane>
                        <MDBTabsPane open={basicActive === 'tab3'}> 
                            <FieldRegisterStudent.EndRegister 
                                checkForm={checkForm}
                            />  
                        </MDBTabsPane>
                    </MDBTabsContent>
                </S.WrapFields>
            </Form>
        </S.Container>
    )
}

export default BodyForm