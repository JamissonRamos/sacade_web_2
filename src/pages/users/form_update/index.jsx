//CSS
    import * as S from './styled';
//Hooks
    import { useEffect, useState } from 'react'
    import { useUsers } from '../../../hooks/users';
    import { useForm } from 'react-hook-form';
    import { yupResolver } from '@hookform/resolvers/yup';
    import { Validations } from '../../validations/index';
    import { useLocation, useNavigate } from 'react-router-dom';
    import { unMask } from 'remask';
    import { Theme } from '../../../theme';
//Service
    import { useSearchCep } from '../../../services/cep';
//Components
    import { Alert, Button, Col, Container, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
    import { WrapPages } from '../../../components/Wrappe/pages';
    import { LoadingOverlay } from '../../../components/spinner/global/styled';
    import { TextC } from '../../../components/Typography';
//Script
    import * as Script from './script';


import FieldDataPersonal from './fields/field_data_personal';
import FieldDataAddress from './fields/field_data_address';
import FieldsButton from './fields/fields_button';


const FormUpdate = () => {
    const [msgBox, setMsgBox] = useState(null);
    
    const location = useLocation();  // Captura o UID da URL
    const { uid } = location.state || {};  // Captura o UID do estado de navegação
    const navigate = useNavigate();

    const { documentsID, isLoading: loadingFetchDocument, error: fetchError  } = useUsers.useGetDocumentsID();
    
    const { register, handleSubmit, setValue, reset, getValues, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.UserUpdateSchema)
    }); 

    const {fetchCep, isLoading: loadingCep } = useSearchCep();
    const { UpdateUser, errorUpdate, isLoadingUpdate: isLoadingPostUpdate } = useUsers.usePostDocumentsID();

    useEffect(() => {
        handleFetchDocument()
    }, []);

    const handleFetchDocument = async () => {
        const result = await documentsID(uid);  
        const {success, data, message} = result;
        if(success){
            await Script.fetchDocumentID(data, setValue); // por enquanto passei as funções de handleChange e convertDate mais a ideia é retirar 
        }else{
            setMsgBox({variant: 'danger', message: message});
        }
    };
    const handleOnClickCep = async () => {
        setMsgBox(null)
        const cepValue = getValues('cep');

        if (!cepValue){
            setMsgBox({variant: 'danger', message: 'CEP não fornecido.'});
            return;
        }
        const response = await fetchCep(cepValue); // Chama a função do script e aguarda a resposta
        const { success, data, message} = response;
        
        if (success) {
            // Atualiza os valores dos campos com os dados recebidos  
            setValue('logadouro', data.logadouro);
            setValue('neighborhood', data.neighborhood);
            setValue('city', data.city);
            setValue('federativeUnit', data.federativeUnit);
        } else {
            setMsgBox({variant: 'danger', message: message});
        }
}
    const onSubmitForm = async (data) => { 
        data.uid = uid;
        data.birthDate = Script.formattedDate(data.birthDate);
        data.cep = unMask(data.cep);
        data.phoneUsers = unMask(data.phoneUsers);

        const resultPost = await UpdateUser(data);

        if (resultPost.success){
                setMsgBox({variant: 'success', message: 'Dados Atualizado com sucesso!'});
                setTimeout(() => {
                    reset()
                    navigate(`/users`)
                }, 1000);
        }
    } 


    return (
        
        <WrapPages>
            {
                fetchError && <Alert variant={'danger'}> {fetchError} </Alert>
            }
            {
                errorUpdate && <Alert variant={'danger'}> {errorUpdate} </Alert>
            }
            {
                msgBox && <Alert variant={msgBox.variant}> {msgBox.message} </Alert>
            }
            <S.HeaderPage>
                <TextC.Title level={2}>Atualizar Cadastro de Usuário</TextC.Title>
                <TextC.Body level={2}> Realizar a atualização dos dados dos usuário.</TextC.Body>
            </S.HeaderPage>
            {
                loadingFetchDocument &&
                    <LoadingOverlay>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Carregando os dados...</span>
                    </LoadingOverlay> 
            }

            <S.BodyPage>
                <Container >
                    <Form onSubmit={handleSubmit(onSubmitForm)}>
                        <S.WrapFields>
                            <FieldDataPersonal 
                                register={register}
                                errors={errors}
                                setValue={setValue}
                            />

                            <FieldDataAddress 
                                register={register}
                                errors={errors}
                                setValue={setValue}
                                handleOnClickCep={handleOnClickCep}
                                loading={loadingCep}

                            />

                            <FieldsButton 
                                navigate={navigate}
                                loading={isLoadingPostUpdate}
                            />
                        </S.WrapFields>
                    </Form>
                    
                </Container>
            </S.BodyPage>

        </WrapPages>
    )
}

export default FormUpdate