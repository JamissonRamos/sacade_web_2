//CSS
    import * as S from './styled';
//Hooks
    import { useEffect } from 'react'
    import { useUsers } from '../../../hooks/users';
    import { useForm } from 'react-hook-form';
    import { yupResolver } from '@hookform/resolvers/yup';
    import { Validations } from '../../validations/index';
    import { useLocation, useNavigate } from 'react-router-dom';
    import { unMask } from 'remask';
//Service
    import { useSearchCep } from '../../../services/cep';
//Components
    import { Container, Form, Spinner } from 'react-bootstrap';
    import { WrapPages } from '../../../components/Wrappe/pages';
    import { LoadingOverlay } from '../../../components/spinner/global/styled';
    import { TextC } from '../../../components/Typography';
    import FieldDataPersonal from './fields/field_data_personal';
    import FieldDataAddress from './fields/field_data_address';
    import FieldsButton from './fields/fields_button';
//Script
    import {FetchDocumentID, FormattedDate} from './script';

const FormUpdate = () => {
    const navigate = useNavigate();
    const location = useLocation();  // Captura o UID da URL
    const { uid } = location.state || {};  // Captura o UID do estado de navegação

    const { documentsID, isLoading: loadingFetchDocument } = useUsers.useGetDocumentsID();

    const {fetchCep, isLoading: loadingCep } = useSearchCep();

    const { UpdateUser, loading: loadingUpdate } = useUsers.usePostDocumentsID();
    
    const { register, handleSubmit, setValue, reset, getValues, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.UserUpdateSchema)
    }); 

    useEffect(() => {
        handleFetchDocument()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFetchDocument = async () => {
        const result = await documentsID(uid);  
        const {success, data, message} = result;
        if(success){
            await FetchDocumentID(data, setValue); // por enquanto passei as funções de handleChange e convertDate mais a ideia é retirar 
        }else{
            reset()
            navigate('/notifications/error');
            console.log({message: `Deu algum erro na ficha do aluno: ${message}`})
        }
    };

    const handleOnClickCep = async (value) => {

        if (!value) return{success: false, message: "Cep não foi fornecido."}
        if (value.length <= 8) return{success: false, message: "Cep não foi digitado corretamente."}

        const response = await fetchCep(value); // Chama a função do script e aguarda a resposta

        const { success, data, message} = response;
        
        if (success) {
            // Atualiza os valores dos campos com os dados recebidos  
            setValue('logadouro', data.logadouro);
            setValue('neighborhood', data.neighborhood);
            setValue('city', data.city);
            setValue('federativeUnit', data.federativeUnit);
            return{success: true};
        } else { 
            return{success: false, message: message};
        }
    }

    const onSubmitForm = async (data) => { 
        data.uid = uid;
        data.birthDate = FormattedDate(data.birthDate);
        data.cep = unMask(data.cep);
        data.phoneUsers = unMask(data.phoneUsers);

        const result = await UpdateUser(data);
        const { success, message} = result;

        if(success){
            const path = `/users`;
            //Coloca dinamico a page de notificação, atualiação ou create
            navigate(`/notifications/update `, {
                state: {
                    url: path,
                    valueButton: {value: 'Lista de Usuários', icon: 'MdSupervisedUserCircle'},
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
        
        <WrapPages>
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
                                getValues={getValues}
                                handleOnClickCep={handleOnClickCep}
                                loading={loadingCep}

                            />

                            <FieldsButton 
                                navigate={navigate}
                                loading={loadingUpdate}
                            />
                        </S.WrapFields>
                    </Form>
                    
                </Container>
            </S.BodyPage>

        </WrapPages>
    )
}

export default FormUpdate