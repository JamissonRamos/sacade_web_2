import React, { useEffect, useState } from 'react'
import { useUsers } from '../../../hooks/users';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../validations/index';
import { WrapPages } from '../../../components/Wrappe/pages';
import { useLocation } from 'react-router-dom';
import { LoadingOverlay } from '../../../components/spinner/global/styled';
import { Alert, Button, Col, Container, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { mask } from 'remask';
import { Theme } from '../../../theme';
import { searchCep } from '../../../services/cep';




const FormUpdate = () => {
    const location = useLocation();  // Captura o UID da URL
    const { uid } = location.state || {};  // Captura o UID do estado de navegação
    const [registered, setRegistered] = useState({})
    const [cep, setCep] = useState(''); // Gerencia o estado do CEP
    const [msgBox, setMsgBox] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingUpdate, setIsisLoadingUpdate] = useState(false); //fazer teste deois apagar quando gerar a função de update
    
    const { documents, isLoading: loadingFetchDocument, error: fetchError  } = useUsers.useGetDocuments()

    const fetchDocuments = async () => {
        const result = await documents();        
            if(result.success){
                setRegistered({
                    success: result.success,
                    data: result.data
                }) // Exibe o resultado no console
            }
    };
    
    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
    }, []);

    const { register, handleSubmit, setValue, reset, getValues, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.UserUpdateSchema)
    }); 

    const capitalizedValue = (e) => {
        const inputValue = e.target.value;
        // Capitaliza a primeira letra de cada palavra
        const capitalizedWords = inputValue.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        const newValue = capitalizedWords.join(' ');
        //return newValue
        setValue(e.target.name, newValue); // Atualiza o valor no React Hook Form
    };

    // const { createUser, isLoadingCreate, errorCreate } = useUsers.useCreate();

    // const formattedDate = (birthDate) => {
    //     const newDate = new Date(birthDate);
    //     const day = String(newDate.getDate()).padStart(2, '0');
    //     const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    //     const year = newDate.getFullYear();
        
    //     return `${day}/${month}/${year}`;
    
    // }

    const handleOnClickCep = async (cep) => {
        setMsgBox(null)
        if (!cep){
            setMsgBox({variant: 'danger', message: 'CEP não fornecido.'});
            //resetSelectedFields()
            return
        }
        
        try {  
            setIsLoading(true)
                const response = await searchCep(cep); // Chama a função do script e aguarda a resposta
                console.log(response);
                
                if (response.success) {
                // Atualiza os valores dos campos com os dados recebidos  
                setValue('logadouro', response.data.logadouro);
                setValue('neighborhood', response.data.neighborhood);
                setValue('city', response.data.city);
                setValue('federativeUnit', response.data.federativeUnit);
                // setResidenceNumber(true)
            } else {
                setMsgBox({variant: 'danger', message: response.message});
            // resetSelectedFields()
            }
        } catch (error) {
            setMsgBox({variant: 'danger', message: "Erro ao busca cep: " +  error.message});
            console.error('Erro ao busca cep:' + error);
        }finally {
          setIsLoading(false); // Garante que o estado seja atualizado no final
        }
    }

    const handleChange = (e) => {
        let maskedValue = e.target.value
        let field = e.target.name;

        if (field === 'phoneUsers')
        {
            maskedValue = mask(maskedValue, ['(99) 9 9999-9999']);
        }else if(field === "cep"){
            maskedValue = mask(maskedValue, ['99999-999']);
            setCep(maskedValue)
            
        }
        setValue(field, maskedValue)
        field = '';
        maskedValue = '';
    }
    
    const onSubmitForm = async (data) => { 

        setIsisLoadingUpdate(true)
        console.log(data);
        setIsisLoadingUpdate(false)
        
        // changeStep(currentStep + 1)
        // if(currentStep + 1 === formFields.length){
        //     data.phoneUsers = unMask(data.phoneUsers);
        //     data.birthDate = formattedDate(data.birthDate);
        //     data.cep = unMask(data.cep);
        //     data.status = "Visitante";
        //     delete data.confirmPassword
            
        //     let result;
        //     result = await createUser(data);

        //     if (result.success){
        //         navigate(`/`)
        //     }
        // }
    } 

    return (
        
        <WrapPages>
            {
                fetchError && <Alert variant={'danger'}> {fetchError} </Alert>
            }
            {
                msgBox && <Alert variant={msgBox.variant}> {msgBox.message} </Alert>
            }
            <S.HeaderPage>
                <TextC.Title level={2}> Lista de Usuários</TextC.Title>
                <TextC.Body level={1}>  Todos os usuários cadastrados no sistema </TextC.Body>
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
                            <Form.Group className="mb-2" controlId="formGridFirstName">
                                <Form.Label> Nome </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="firstName"
                                    placeholder="Digite seu primeiro nome" 
                                    {...register("firstName")}
                                    isInvalid={!!errors.firstName}
                                    setValue={setValue}
                                    onBlur={(e) => capitalizedValue(e)}
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
                                    onBlur={(e) => capitalizedValue(e)}
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
                                        onChange={handleChange}
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
                                    <InputGroup >
                                        <Form.Control 
                                            type="text"  
                                            name='cep' 
                                            placeholder="Digite seu cep" 
                                            {...register("cep")}
                                            onChange={(e) => handleChange(e)} // Captura a mudança no input
                                        />
                                        <Button 
                                            className="d-flex align-items-center gap-2"
                                            variant='success'
                                            onClick={() => handleOnClickCep(cep)}
                                            disabled={isLoading ? true : false}
                                        >
                                            {
                                                isLoading &&
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
                                    </InputGroup>
                                    
                                    <Form.Control.Feedback type="valid" >
                                        {/* {msgBox.message && msgBox.message} */}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col lg={8}>
                                <Form.Group className="mb-2" controlId="formGridLogadouro">
                                    <Form.Label >Logadouro</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="logadouro"
                                        placeholder="Digite seu logadouro"
                                        {...register("logadouro")} 
                                        onChange={(e) => capitalizedValue(e)}
                                    />
                                </Form.Group>             
                            </Col>
                        </Row>
                        <Row className="mb-2 p-1">
                            <Col lg={4}>
                                <Form.Group className="mb-2" controlId="formGridResidenceNumber">
                                    <Form.Label>Número Residencia</Form.Label>
                                    <Form.Control 
                                        type="text"  
                                        name='residenceNumber' 
                                        placeholder="Número Residencia" 
                                        {...register("residenceNumber")}
                                        // isInvalid={!!residenceNumber} 
                                    />
                                    <Form.Control.Feedback type="invalid" >
                                        {/* Número Residência é obrigatório quando o CEP está preenchido  */}
                                    </Form.Control.Feedback>
                                    
                                    <Form.Control.Feedback type="invalid" >
                                        {/* {errors.gender && errors.gender.message} */}
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
                                        onChange={(e) => capitalizedValue(e)}
                                    />
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
                                        onChange={(e) => capitalizedValue(e)}
                                    />
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
                                        onChange={(e) => capitalizedValue(e)}
                                    />
                                    </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-3 ">
                            <S.WrapButtonDelete>
                                <Button
                                    variant="outline-danger"
                                    size='sm'
                                    type='submit'
                                    // disabled={isLoadingCreate ? true : false}
                                >
                                    <Theme.Icons.MdDelete />
                                    <span>Excluir Cadastro</span>
                                </Button> 
                            </S.WrapButtonDelete>
                            <S.WrapButtonUpdateCancel>
                                <Button
                                    variant="success"
                                    size='sm'
                                    type='submit'
                                    disabled={isLoadingUpdate ? true : false}
                                >
                                    <Theme.Icons.MdUpdate />
                                    <span>Atualizar</span>
                                </Button> 
                                <Button
                                    variant="outline-danger"
                                    size='sm'
                                    // disabled={isLoadingCreate ? true : false}
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