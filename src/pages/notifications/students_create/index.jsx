import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useLocation, useNavigate } from 'react-router-dom';
import List from './component/list';
import { useResponsibleStudents } from '../../../hooks/responsibleStudents';
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Title from './component/title';

const NotificationsStudentCreate = () => {
    const [registered, setRegistered] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();  // Captura o UID da URL
    const { uid, adult } = location.state || {};  // Captura o UID do estado de navegação

    const { getDocuments, loading: loadingResponsible } = useResponsibleStudents.useGetDocuments()

    const handleRemoveDataStudent = () => { 
        // Exclui os dados do localStorage
        localStorage.removeItem('student');
    };

    const handleGetUidResponsible = async () => { 
        // 1. Recuperar o array
        let responsibleStudent = await JSON.parse(localStorage.getItem("uidsResponsibleStudent"));
        console.log('responsibleStudent', responsibleStudent);
        
        return responsibleStudent
    }

    const handleGetdResponsible = async () => { 

        const uidResponsible = await handleGetUidResponsible();

        const result  = await getDocuments();
        const {success, data, message} = result;

        if (success){
            const filteredData = data.filter(item => uidResponsible.includes(item.uid));
            setRegistered(filteredData)
        }else{
            console.log(message);
            navigate('/notifications/error');
        }
    };
    
    useEffect(() => {
        handleGetdResponsible();  // Chama a função ao renderizar o componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (

        <S.Container>
            <S.Content>
                <S.Header>
                    <Theme.Icons.MdCheckCircleOutline />
                    <TextC.Title level={2}> Sucesso </TextC.Title>
                </S.Header>
                <S.Body>

                    <Title />
                    
                    {
                        //False menor de idade, True Maior de idade
                        adult 
                        ? <TextC.Body level={1}> 
                                É possível adicionar responsáveis para este aluno. Assim, em caso de emergência, poderemos entrar em contato com essas pessoas.  
                            </TextC.Body>

                        : <TextC.Body level={1}> 
                                O sistema identificou que o aluno cadastrado é menor de idade. Por isso, solicitamos o cadastro de responsável(is) pelo aluno, para que, em caso de emergência, possamos entrar em contato.  
                            </TextC.Body>
                    }

                    {
                        loadingResponsible 
                        ? <>
                            <Spinner
                                variant="warning"
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            <span > Carregando dados... </span>
                        </> 
                        : null
                    }
                        {/* 
                            - 1 fazer uma condição para veirficar se tem lista de responsavel 
                            -  2 caso contrario não mostra buton e nem lista e nem msg 
                            
                        
                        */}
                        <>
                            <TextC.Body level={1}> 
                                Foram realizados cadastros anteriores de responsáveis. Para adicionar esses responsáveis ao cadastro do aluno, basta selecioná-los e clicar em "Adicionar Responsável".                            </TextC.Body>
                            <List data={registered} />
                        
                        </>
                    <S.WrapButtonResponsible>
                        {/* Pegar pegar o uid dos responsaveis que foi selecionado e e add no cadastro do aluno recem cadastrado */}
                        <S.ButtonResponsible
                            onClick={() =>  navigate('/responsibleStudents/responsibleList/', { state: { uid: uid} })} ///responsibleStudents/form_update/:uid?
                        >
                            <span>Adicionar Responsável</span>
                            <Theme.Icons.MdPerson />
                        </S.ButtonResponsible>
                        <S.ButtonResponsible
                            onClick={() =>  navigate('/responsibleStudents/responsibleList/', { state: { uid: uid} })} ///responsibleStudents/form_update/:uid?
                        >
                            { 
                                adult 
                                ? <span>Sim, quero cadastrar Responsáveis</span>
                                : <span>Vamos cadastrar Responsáveis</span>
                            }
                            <Theme.Icons.MdPerson />
                        </S.ButtonResponsible>

                    </S.WrapButtonResponsible>

                    {/*                     
                        <S.WrapImg>
                            <img src={Theme.ImgC.Success} alt="sucesso" />
                        </S.WrapImg>
                     */}

                </S.Body>
                {
                    adult
                    ? <S.Footer>
                        <>
                            <S.ButtonOutline
                                onClick={() => {
                                    handleRemoveDataStudent
                                    navigate('/')}
                                }
                            >
                                <Theme.Icons.MdLogout />
                                <span>Sair</span>
                            </S.ButtonOutline>
                            
                            <S.ButtonContainer
                                onClick={() => {
                                    handleRemoveDataStudent
                                    navigate(-1)}
                                }
                            >
                                <span>Novo Cadastro</span>
                                <Theme.Icons.MdAddCircle />
                            </S.ButtonContainer>
                        </>
                    </S.Footer>
                    : null
                }
            </S.Content>
        </S.Container>
    )
}

export default NotificationsStudentCreate