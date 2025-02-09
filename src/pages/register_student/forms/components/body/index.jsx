import * as S from './styled'
import { Form } from 'react-bootstrap'
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane }  from 'mdb-react-ui-kit';
import { useState } from 'react';
import { FieldRegisterStudent } from '../fields';
import { Validations } from '../../../../validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormattedDate, MaskInput } from './script';
import { useNavigate } from 'react-router-dom';


const BodyForm = ({handleOnSubmit, checkForm, loading}) => {

    const [basicActive, setBasicActive] = useState('tab1');
    
    const navigate = useNavigate();

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.RegisterStudentSchema),
        // defaultValues: {
        //     degreesRange: 0, // Valor inicial para degreesRange
        //     degreesCurrent: 0, // Valor inicial para degreesRange
        // },
    });

    const handleBasicClick = (value) => {
        //Tabs nav
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };

    const handleChange =  (e) => {

        let fieldName = e.target.name || false;
        let fieldValue = e.target.value || false;

        console.log('fieldName body:', fieldName );
        console.log('fieldValue body:', fieldValue );

        if (!fieldName || !fieldValue) return; // Verifique se os valores estão definidos
        
        let maskedValue = MaskInput(fieldName, fieldValue);
        console.log('maskedValue:', maskedValue); // Verifique o valor mascarado
        
       // setValue(fieldName, maskedValue);

    }


    const handleSubmitBody = async (data) => {
        data.startDate = FormattedDate(data.startDate)
        data.lastGraduationDate = FormattedDate(data.lastGraduationDate)

        const result =  await handleOnSubmit(data)
        const {success, message} = result;
    
        if(success){
            const path = `/registerStudent`
            navigate('/notifications/create', {
                state: {
                    url: path,
                    valueButton: {value: 'Ficha do Aluno', icon: 'PiAddressBookFill'},
                    buttonNewRegister: false,
                },
            });

            
        }else{
            reset()
            navigate('/notifications/error');
            console.log({message: `Deu algum erro na ficha do aluno: ${message}`})
        }

    }

    return (

        <S.Container>
            {
                // Ficou de trazer as variaveis no componete pai do form
                // errorStudents && <Alert variant={'danger'}> {errorStudents } </Alert>
            }
            <Form onSubmit={handleSubmit(handleSubmitBody)}>
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
                                loading={loading}
                            />  
                        </MDBTabsPane>
                    </MDBTabsContent>
                </S.WrapFields>
            </Form>
        </S.Container>
    )
}

export default BodyForm