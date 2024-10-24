//CSS
    import * as S from './styled';
//Hooks
    import React, { useEffect, useState } from 'react'
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
    import * as Script from './script'


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

    const handleChange = (key, value) => {
        let maskedValue = Script.applyMask(key, value);
        setValue(key, maskedValue)
    }

    const handleOnBlur = (event) => {
        let field = event.target.name;
        let inputValue = Script.capitalizedValue(event)
        setValue(field, inputValue);
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
                <TextC.Body level={1}> Realizar a atualização dos dados dos usuário.</TextC.Body>
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
                        <Row className="mb-2 p-1 ">
                            <Form.Group className="mb-2 " controlId="formGridFirstName">
                                <Form.Label> Nome </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="firstName"
                                    placeholder="Digite seu primeiro nome" 
                                    {...register("firstName")}
                                    isInvalid={!!errors.firstName}
                                    setValue={setValue}
                                    onBlur={(e) => handleOnBlur(e)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstName && errors.firstName.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2 p-1">
                            <Form.Group as={Col} className="mb-2" controlId="formGridLastName">
                                <Form.Label>Sobrenome</Form.Label>
                                <Form.Control 
                                    type="text"  
                                    name='lastName' 
                                    placeholder="Digite seu segundo nome" 
                                    {...register("lastName")}
                                    isInvalid={!!errors.lastName} 
                                    setValue={setValue}
                                    onBlur={(e) =>  handleOnBlur(e)}
                                />
                            <Form.Control.Feedback type="invalid" >
                                {errors.lastName && errors.lastName.message}
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2 p-1">
                            <Col lg={4}  >
                                <Form.Group  className="mb-2" controlId="formGridPhoneUsers">
                                    <Form.Label>Celular</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name='phoneUsers' 
                                        placeholder="Digite seu celular" 
                                        {...register("phoneUsers")}
                                        onChange={(e) => handleChange(e.target.name, e.target.value)} // Captura a mudança no input
                                        isInvalid={!!errors.phoneUsers} 
                                    />
                                    <Form.Control.Feedback type="invalid" >
                                        {errors.phoneUsers && errors.phoneUsers.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-2" controlId="formGridBirthDate">
                                    <Form.Label>Data Nascimento</Form.Label>
                                    <Form.Control 
                                        type="date" 
                                        name='birthDate' 
                                        {...register("birthDate")}
                                        isInvalid={!!errors.birthDate} 
                                        />
                                    <Form.Control.Feedback type="invalid" >
                                        {errors.birthDate && errors.birthDate.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-2" controlId="formGridGender">
                                    <Form.Label>Gênero</Form.Label>
                                    <Form.Select
                                        name='gender' 
                                        {...register("gender")}
                                        isInvalid={!!errors.gender}
                                    >
                                        <option value="">Selecione um Gênero</option>
                                        <option value="1">Homem</option>
                                        <option value="2">Mulher</option>
                                        <option value="3">Outros</option>
                                    </Form.Select>
                                    
                                    <Form.Control.Feedback type="invalid" >
                                        {errors.gender && errors.gender.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2 p-1">
                            <Col lg={4}>
                                <Form.Group className="mb-2" controlId="formGridCep">
                                    <Form.Label>Cep</Form.Label>
                                    <InputGroup>
                                        <Form.Control 
                                            type="text"  
                                            name='cep' 
                                            placeholder="Digite seu cep" 
                                            {...register("cep")}
                                            isInvalid={!!errors.cep}
                                            onChange={(e) => handleChange(e.target.name, e.target.value)} // Captura a mudança no input
                                        />
                                        <Button 
                                            className="d-flex align-items-center gap-2"
                                            variant='success'
                                            onClick={handleOnClickCep}
                                            disabled={loadingCep ? true : false}
                                        >
                                            {
                                                loadingCep &&
                                                <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                            }
                                            <Theme.Icons.MdSearch />    
                                        </Button>
                                        <Form.Control.Feedback type="invalid" >
                                            {errors.cep && errors.cep.message}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                    
                                </Form.Group>
                            </Col>
                            <Col lg={8}>
                                <Form.Group className="mb-2 p-1" controlId="formGridLogadouro">
                                    <Form.Label >Logadouro</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="logadouro"
                                        placeholder="Digite seu logadouro"
                                        {...register("logadouro")} 
                                        isInvalid={!!errors.logadouro} 
                                        onChange={(e) =>  handleOnBlur(e)}
                                    />
                                    <Form.Control.Feedback type="invalid" >
                                        {errors.logadouro && errors.logadouro.message}
                                    </Form.Control.Feedback>
                                </Form.Group>             
                            </Col>
                        </Row>
                        <Row className="mb-2 ">
                            <Col lg={4}>
                                <Form.Group className="mb-2 p-1" controlId="formGridResidenceNumber">
                                    <Form.Label>Número Residencia</Form.Label>
                                    <Form.Control 
                                        type="text"  
                                        name='residenceNumber' 
                                        placeholder="Número Residencia" 
                                        {...register("residenceNumber")}
                                        isInvalid={!!errors.residenceNumber} 
                                    />
                                    <Form.Control.Feedback type="invalid" >
                                        {errors.residenceNumber && errors.residenceNumber.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col lg={8}>
                                <Form.Group className="mb-2" controlId="formGridNeighborhood">
                                    <Form.Label >Bairro</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="neighborhood"
                                        placeholder="Digite o nome do see bairro" 
                                        {...register("neighborhood")}
                                        isInvalid={!!errors.neighborhood} 
                                        onChange={(e) =>  handleOnBlur(e)}
                                    />

                                    <Form.Control.Feedback type="invalid" >
                                        {errors.neighborhood && errors.neighborhood.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2 p-1">
                            <Col lg={4}>
                                <Form.Group className="mb-2" controlId="formGridFederativeUnit">
                                    <Form.Label>UF</Form.Label>
                                    <Form.Control 
                                        type="text"  
                                        name='federativeUnit' 
                                        placeholder="Nome estado UF" 
                                        {...register("federativeUnit")}
                                        isInvalid={!!errors.federativeUnit} 
                                        onChange={(e) => handleOnBlur(e)}
                                    />
                                    <Form.Control.Feedback type="invalid" >
                                        {errors.federativeUnit && errors.federativeUnit.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col lg={8}>
                                <Form.Group className="mb-2" controlId="formGridCity">
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control 
                                        type="text"  
                                        name='city' 
                                        placeholder="Digite nome da cidade" 
                                        {...register("city")}
                                        isInvalid={!!errors.federativeUnit}
                                        onChange={(e) => handleOnBlur(e)}
                                    />
                                    <Form.Control.Feedback type="invalid" >
                                        {errors.city && errors.city.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-2 ">
                            <S.WrapButtonUpdateCancel>
                                <Button
                                    variant="success"
                                    type='submit'
                                    disabled={isLoadingPostUpdate ? true : false}
                                >
                                    { isLoadingPostUpdate ?
                                        <>
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only"> Atualizando... </span>
                                        </> :
                                        <>
                                            <Theme.Icons.MdUpdate />
                                            <span>Atualizar</span>
                                        </>
                                    }
                                </Button> 
                                <Button
                                    variant="outline-danger"
                                    onClick={() => navigate('/users')}
                                >
                                    <Theme.Icons.MdClose />
                                    <span>Cancelar</span>
                                </Button>                        
                            </S.WrapButtonUpdateCancel>
                        </Row>                
                    </Form>

                </Container>
            </S.BodyPage>

        </WrapPages>
    )
}

export default FormUpdate