import * as S from './styled'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
}   from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap'
import { Theme } from '../../../../../../theme'
import { FieldStudents } from '../fields'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../../../validations'
import { FormattedDate, MaskInput, ConvertDate } from './script';
import { unMask } from 'remask';
import { useStudents } from '../../../../../../hooks/students'
import { useResponsibleStudents } from '../../../../../../hooks/responsibleStudents'
import { AlertCustom } from '../../../../../../components/alert_custom';
import { useNavigate } from 'react-router-dom';


const BodyForm = ({data}) => {
    const [basicActive, setBasicActive] = useState('tab1');
    const [msgBox, setMsgBox] = useState(null)
    const [showAlert, setShowAlert] = useState(false);
    const registrados = data || [];

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.StudentsSchema)
    });
    
    const navigate = useNavigate();

    
    /* 
        - Verificar o compotamento quando o campo da base dados for vazio, como ele manipular para salva os dados;
        - 
    */

    useEffect(() => {
        if (registrados) {
            Object.keys(registrados).forEach(key => {
                if (key === 'cpf') {
                    applyMascara('cpf', registrados[key]);
                }else if (key === 'rg') {
                    applyMascara('rg', registrados[key])
                }else if (key === 'cellPhone') {
                    applyMascara('cellPhone', registrados[key])
                }else if (key === 'birthDate') {
                    const newDate = ConvertDate( registrados[key])                   
                    setValue(key, newDate);
                }else{
                    setValue(key, registrados[key]);
                }
            });
        }

    }, [])


    const applyMascara = (fieldName, fieldValue ) => {
        let maskedValue = MaskInput(fieldName, fieldValue)
        setValue(fieldName, maskedValue)
    }

    /* 
        - Mudar para função de fzer update dos arquivos;
    */
    const {createResponsibleStudent, isLoadingCreate: loadingResponsibleStudents, errorCreate: errorResponsibleStudents } = useResponsibleStudents.usePostDocumentsCreate();
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
        /* 
            - Para aplicar as regras de mascara quando abrir o form foi necessário muda a forma de chamar a função;
            - criando outra função para manipular a função que faz as mascara;
        */
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        applyMascara(fieldName, fieldValue);
    }

    const onSubmit = async (data) => { 
        handleCloseAlert();
        data.cellPhone = unMask(data.cellPhone);
        data.cep = unMask(data.cep);
        data.cpf = unMask(data.cpf);
        data.rg = unMask(data.rg);
        data.birthDate = FormattedDate(data.birthDate);
        
        const result = await createStudent(data);
        const { success, uid} = result;

        if(success){
            const responsibleStudents = JSON.parse(localStorage.getItem('studentResponsible')) || [];
            if (responsibleStudents.length > 0){
                for (const responsible of responsibleStudents) {
                    responsible.idStudent = uid;
                    const result = await createResponsibleStudent(responsible);
                    const {success} = result;
                    if (success) {
                        setMsgBox({variant: 'success', message: 'Cadastro Adicionado com sucesso!'})
                        setShowAlert(true)
                        reset()
                        // Exclui os dados do localStorage
                        localStorage.removeItem('studentResponsible');
                        setTimeout(() => {
                            navigate('/students');
                        }, 4000);
                    }
                }
            }
        }else{
            // Exclui os dados do localStorage
            localStorage.removeItem('studentResponsible');
        }
    } 

    return (
        <S.Container>
            {
                errorStudents || errorResponsibleStudents && <Alert variant={'danger'}> {errorStudents || errorResponsibleStudents} </Alert>
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
                            <FieldStudents.DataAddress 
                                register={register} 
                                setValue={setValue}
                                getValues={getValues}

                                errors={errors}
                                handleChange={handleChange}
                            />
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
                        { loadingStudents || loadingResponsibleStudents ?
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span > Atualizando... </span>
                            </> :
                            <>
                                <Theme.Icons.MdUpdate />    
                                <span>Atualizar</span>
                            </>
                        } 
                    </Button>                      
                </S.WrapButtons>
            </Form>
        </S.Container>
    )
}

export default BodyForm