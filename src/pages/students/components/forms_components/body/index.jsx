import * as S from './styled'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
}   from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { Theme } from '../../../../../theme'
import { FieldStudents } from '../fields'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../../validations'
import { MaskInput } from './script';


const BodyForm = () => {
    const [basicActive, setBasicActive] = useState('tab1');

    const { register, handleSubmit, setValue, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.StudentsSchema)
    });
    //Contas os erro e mostra se tiver algum em qualquer form 
    const errorCount = Object.keys(errors).length;

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

    const onSubmit = async (data) => { 
        console.log(data);
    } 

    return (
        <S.Container>
            <Form  id={'formStudents'} onSubmit={handleSubmit(onSubmit)}>
                <MDBTabs className='custom-tabs' >
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            Dados Pessoais 
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            Responsável
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            Endereço
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                            OBS Medica
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <S.WrapFields>
                    <MDBTabsContent>
                        <MDBTabsPane open={basicActive === 'tab1'}> 
                            <FieldStudents.DataStudents 
                                register={register} 
                                setValue={setValue}
                                errors={errors}
                                handleChange={handleChange}
                            />  
                        </MDBTabsPane>

                        <MDBTabsPane open={basicActive === 'tab2'}> 
                            <FieldStudents.DataResponsible  
                            />
                        </MDBTabsPane>


                        <MDBTabsPane open={basicActive === 'tab3'}>
                            <FieldStudents.DataAddress />
                        </MDBTabsPane>

                        <MDBTabsPane open={basicActive === 'tab4'}>
                            <FieldStudents.StudentMedicalDescription />
                        </MDBTabsPane>
                    </MDBTabsContent>
                </S.WrapFields>
                {
                    errorCount > 0 ? 
                    <S.ErrorCount>
                        {'Foi detectados alguns erros no cadastro: ' + errorCount}
                    </S.ErrorCount> : null
                }

                <S.WrapButtons>
                    <Button
                        variant="success"
                        size='sm'
                        type='submit'
                        form='formStudents'
                        // disabled={isLoadingPostUpdate ? true : false}
                    >
                        {/* { isLoadingPostUpdate ?
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span className="sr-only"> Atualizando... </span>
                            </> : */}
                            <>
                                <Theme.Icons.MdSaveAlt />
                                <span>Salvar</span>
                            </>
                        {/* } */}
                    </Button> 
                    <Button
                        variant="outline-danger"
                        size='sm'
                        // onClick={() => navigate('/users')}
                    >
                        <Theme.Icons.MdClose />
                        <span>Cancelar</span>
                    </Button>                        
                </S.WrapButtons>
            </Form>
        </S.Container>
    )
}

export default BodyForm