import * as S from './styled'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
}   from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap'
import { FieldStudents } from '../fields'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../../../validations'
import { FormattedDate, MaskInput, ConvertDate } from './script';
import { unMask } from 'remask';
import { useStudents } from '../../../../../../hooks/students'
import { AlertCustom } from '../../../../../../components/alert_custom';
import { useNavigate } from 'react-router-dom';


const BodyForm = ({uid, data}) => {
    const [basicActive, setBasicActive] = useState('tab1');
    const [msgBox, setMsgBox] = useState(null)
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate();

    const registered = data || [];
    const uidStudent = uid || "";

    const applyMascara = (fieldName, fieldValue ) => {
        let maskedValue = MaskInput(fieldName, fieldValue)
        setValue(fieldName, maskedValue)
    }

    const {UpdateStudents, isLoadingUpdate: loadingStudents, } = useStudents.usePostDocumentsUpdate();

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.StudentsSchema)
    });
    
    //Contas os erro e mostra se tiver algum em qualquer form 
    const errorCount = Object.keys(errors).length;


    useEffect(() => {
        if (registered) {
            Object.keys(registered).forEach(key => {
                if (key === 'cpf') {
                    applyMascara('cpf', registered[key]);
                }else if (key === 'rg') {
                    applyMascara('rg', registered[key])
                }else if (key === 'cellPhone') {
                    applyMascara('cellPhone', registered[key])
                }else if (key === 'birthDate') {
                    const newDate = ConvertDate( registered[key])                   
                    setValue(key, newDate);
                }else{
                    setValue(key, registered[key]);
                }
            });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])    

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
        data.uid = uidStudent;
        
        const result = await UpdateStudents(data);
        const { success, message } = result;

        if (success) {
            reset()
            const path = `/students `
            navigate('/notifications/update', {
                state: {
                    url: path,
                    valueButton: {value: 'Lista Alunos', icon: 'MdPerson'},
                },
            });

        }else{
            reset()
            navigate('/notifications/error');
            console.log({message: `Deu algum erro: ${message}`})
        }

    } 

    return (
        <S.Container>
            {
                showAlert &&                                            
                <AlertCustom variant={msgBox.variant} handleCloseAlert={handleCloseAlert}> {msgBox.message} </AlertCustom>
            }
            <Form  onSubmit={handleSubmit(onSubmit)}>
                <MDBTabs className='custom-tabs' >
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            Dados Pessoais 
                        </MDBTabsLink>
                    </MDBTabsItem>

                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            Endereço
                        </MDBTabsLink>
                    </MDBTabsItem>

                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            OBS Medica
                        </MDBTabsLink>
                    </MDBTabsItem>

                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                            Finalizar
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
                            <FieldStudents.DataAddress 
                                register={register} 
                                setValue={setValue}
                                getValues={getValues}
                                errors={errors}
                                handleChange={handleChange}
                            />
                        </MDBTabsPane>

                        <MDBTabsPane open={basicActive === 'tab3'}>
                            <FieldStudents.StudentMedicalDescription 
                                register={register} 
                                setValue={setValue}
                                errors={errors}
                            />
                        </MDBTabsPane>

                        <MDBTabsPane open={basicActive === 'tab4'}>
                            <FieldStudents.EndRegister
                                loadingStudents={loadingStudents}
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
            </Form>
        </S.Container>
    )
}

export default BodyForm

