import * as S from './styled'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
}   from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap'
import { Theme } from '../../../../../theme'
import { FieldStudents } from '../fields'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../../validations'
import { FormattedDate, MaskInput } from './script';
import { unMask } from 'remask';
import { useStudents } from '../../../../../hooks/students'
import { AlertCustom } from '../../../../../components/alert_custom';
import { useNavigate } from 'react-router-dom';


const BodyForm = () => {
    const [basicActive, setBasicActive] = useState('tab1');
    const [msgBox, setMsgBox] = useState(null)
    const [showAlert, setShowAlert] = useState(false);
    
    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.StudentsSchema)
    });
    
    const navigate = useNavigate();
    const {createStudent, isLoadingCreate: loadingStudents, errorCreate: errorStudents } = useStudents.usePostDocumentsCreate();

    //Contas os erro e mostra se tiver algum em qualquer form 
    const errorCount = Object.keys(errors).length;
    
    // Função para fechar o alerta e preparar para nova mensagem
    const handleCloseAlert = () => {
        setShowAlert(false);
        setMsgBox(""); // Limpa a mensagem
    };

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
        handleCloseAlert();
        data.cellPhone = unMask(data.cellPhone);
        data.cep = unMask(data.cep);
        data.cpf = unMask(data.cpf);
        data.rg = unMask(data.rg);
        data.birthDate = FormattedDate(data.birthDate);
        
        const result = await createStudent(data);
        const { success, message} = result;

        if(success){
            reset()
            navigate('/notifications/create');
        }else{
            reset()
            navigate('/notifications/error');
            console.log({message: `Deu algum erro: ${message}`})
        }
    } 

    return (
        <S.Container>
            {
                errorStudents && <Alert variant={'danger'}> {errorStudents } </Alert>
            }
            {
                showAlert &&                                            
                <AlertCustom variant={msgBox.variant} handleCloseAlert={handleCloseAlert}> {msgBox.message} </AlertCustom>
            }
            <Form  id={'formStudents'} onSubmit={handleSubmit(onSubmit)}>
                <MDBTabs className='custom-tabs' >
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            Dados Pessoais 
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
                        <MDBTabsPane open={basicActive === 'tab3'}>
                            <FieldStudents.DataAddress 
                                register={register} 
                                setValue={setValue}
                                getValues={getValues}

                                errors={errors}
                                handleChange={handleChange}
                            />
                        </MDBTabsPane>

                        <MDBTabsPane open={basicActive === 'tab4'}>
                            <FieldStudents.StudentMedicalDescription 
                                register={register} 
                                setValue={setValue}
                                getValues={getValues}

                                errors={errors}
                            
                            />
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
                        variant="outline-danger"
                        size='sm'
                        onClick={() => navigate('/students')}
                    >
                        <Theme.Icons.MdClose />
                        <span>Cancelar</span>
                    </Button> 
                    <Button
                        variant="success"
                        size='sm'
                        type='submit'
                        form='formStudents'
                        disabled={loadingStudents ? true : false}
                    >
                        { loadingStudents ?
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span > Salvando... </span>
                            </> :
                            <>
                                <Theme.Icons.MdSaveAlt />
                                <span>Salvar</span>
                            </>
                        } 
                    </Button>                      
                </S.WrapButtons>
            </Form>
        </S.Container>
    )
}

export default BodyForm