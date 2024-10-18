
import * as S from './styled'
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Theme } from "../../../../../../theme";

const DataAddress = () => {
    // const [cep, setCep] = useState(''); // Gerencia o estado do CEP
    // const [residenceNumber, setResidenceNumber] = useState(false); // Gerencia o estado do CEP
    // const [msgBox, setMsgBox] = useState({variant: '', msg: ''}); // Gerencia o estado do CEP

    // const {fetchCep, isLoading: loadingCep } = useSearchCep();

    // const resetSelectedFields = () => {
    //   // Obtém os valores atuais do formulário
    //   const currentValues = getValues();
    //   // Define os campos que devem ser resetados
    //   reset({
    //     ...currentValues, // Mantém os valores atuais dos campos
    //     cep: '', // Reseta o campo 'cep'
    //     residenceNumber: '', // Reseta o campo 'residenceNumber'
    //     federativeUnit: '',
    //     city: '', 
    //     neighborhood: '',
    //     logadouro: '',
    //     // Adicione outros campos que deseja resetar
    //   });
    // };
    // const capitalizedValue = (e) => {
                                                        // const handleBlur = (e) => {
                                                        //     let fieldName = e.target.name;
                                                        //     let fieldValue = e.target.value;
                                                        //     let capitalized = CapitalizedValue(fieldValue)
                                                        //     setValue(fieldName, capitalized)
                                                        // };
    //     const inputValue = e.target.value;
    //     // Capitaliza a primeira letra de cada palavra
    //     const capitalizedWords = inputValue.split(' ').map(word => {
    //         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    //     });
    //     const newValue = capitalizedWords.join(' ');
    //     // setValue(e.target.name, newValue); // Atualiza o valor no React Hook Form
    // };
  
    // const handleChange = (e) => {
    //     if (e.target.name === 'cep'){
    //         setMsgBox(null)
    //         const maskedValue = mask(e.target.value, ['99999-999']);
    //         setValue('cep', maskedValue)
    //         setCep(e.target.value); // Atualiza o estado com o valor do input
    //     }else if(e.target.name === 'residenceNumber'){
            
    //         if (value)
    //         setResidenceNumber(false)
    //         else {
    //         setResidenceNumber(true)
    //         }   
    //     }
    // };
  
    // const handleOnClickCep = async (cep) => {
    //     setMsgBox(null)
    //     if (!cep){
    //         setMsgBox({variant: 'danger', msg: 'CEP não fornecido.'});
    //         resetSelectedFields()
    //         return
    //     }
        
    //     // try {  
    //       // setIsLoading(true)
    //       const response = await fetchCep(cep); // Chama a função do script e aguarda a resposta
    //     if (response.success) {
    //         // Atualiza os valores dos campos com os dados recebidos  
    //         setValue('logadouro', response.data.logadouro);
    //         setValue('neighborhood', response.data.neighborhood);
    //         setValue('city', response.data.city);
    //         setValue('federativeUnit', response.data.federativeUnit);
    //         setResidenceNumber(true)
    //         setMsgBox({variant: 'warning', msg:'Endereço encontrado com sucesso!'});
    //     } else {
    //         setMsgBox({variant: 'danger', msg: response.message});
    //         resetSelectedFields()
    //     }
    //     // } catch (error) {
    //     setMsgBox({variant: 'danger', msg: "Erro ao busca cep: " +  error.message});
    //     console.error('Erro ao busca cep:' + error);
    //     // }finally {
    //     //   setIsLoading(false); // Garante que o estado seja atualizado no final
    //     // }
    // }
    
    return (
        <>
            {/* {
            msgBox &&  
                <Alert variant={msgBox.variant}>
                {msgBox.msg}
                </Alert>
            } */}
        <S.Container>
            <Row className="mb-2 px-1">
                <Col sm={6} md={7} lg={8}>
                    <Form.Group className="p-1" controlId="GroupCep ">
                        <Form.Label className="m-0">Cep</Form.Label>
                        <InputGroup>
                            <Form.Control 
                                type="text"  
                                name='cep' 
                                placeholder="Digite seu cep" 
                                // {...register("cep")}
                                // onChange={handleChange} // Captura a mudança no input
                            />
                            <Button 
                                variant='success'
                                // onClick={() => handleOnClickCep(cep)}
                                // disabled={loadingCep ? true : false}
                            >
                                {/* {
                                loadingCep ? 
                                    <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    /> : null
                                } */}
                                <Theme.Icons.MdSearch />
                            </Button>
                        </InputGroup>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-1">
                <Col className="mb-2" sm={6} md={7} lg={8}>
                    <Form.Group className="p-1" controlId="formGridLogadouro">
                        <Form.Label >Logadouro</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="logadouro"
                            placeholder="Digite seu logadouro"
                            // {...register("logadouro")} 
                            // onChange={(e) => capitalizedValue(e)}
                        />
                    </Form.Group>
                </Col>
                <Col sm={6} md={5} lg={4}>
                    <Form.Group  className="mb-4" controlId="formGridResidenceNumber ">
                        <Form.Label>Número Residencia</Form.Label>
                        <Form.Control 
                            type="text"  
                            name='residenceNumber' 
                            placeholder="Número Residencia" 
                            // {...register("residenceNumber")}
                            // isInvalid={!!residenceNumber} //
                            // onChange={handleChange} // Captura a mudança no input
                        />
                        <Form.Control.Feedback type="invalid" >
                            Número Residência é obrigatório quando o CEP está preenchido 
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-1">
                <Col className="mb-2" sm={5} md={5} lg={5}>
                    <Form.Group className="mb-4" controlId="formGridCity">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control 
                            type="text"  
                            name='city' 
                            placeholder="Nome da cidade" 
                            // {...register("city")}
                            // onChange={(e) => capitalizedValue(e)}
                        />
                    </Form.Group>
                </Col>

                <Col className="mb-2" sm={5} md={5} lg={5}>
                    <Form.Group className="mb-4" controlId="formGridNeighborhood">
                        <Form.Label >Bairro</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="neighborhood"
                            placeholder="Nome do bairro" 
                            // {...register("neighborhood")}
                            // onChange={(e) => capitalizedValue(e)}
                        />
                    </Form.Group>
                </Col>

                <Col className="mb-2" sm={2} md={2} lg={2}>
                    <Form.Group className="mb-4" controlId="formGridFederativeUnit">
                        <Form.Label>UF</Form.Label>
                        <Form.Control 
                            type="text"  
                            name='federativeUnit' 
                            placeholder="UF" 
                            // {...register("federativeUnit")}
                            // onChange={(e) => capitalizedValue(e)}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </S.Container>
    </>
)
}

export default DataAddress;

/* 
    - verifica linha por linha os nomes de contolID passar Group + nome do campo;


*/