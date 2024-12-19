import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useLocation, useNavigate } from 'react-router-dom';

const NotificationsStudentCreate = () => {
    const navigate = useNavigate();
    const location = useLocation();  // Captura o UID da URL
    const { uid, adult } = location.state || {};  // Captura o UID do estado de navegação

    const handleRemoveDataStudent = () => { 
        // Exclui os dados do localStorage
        localStorage.removeItem('student');
    };
    
    return (

        <S.Container>
            <S.Content>
                <S.Header>
                    <Theme.Icons.MdCheckCircleOutline />
                    <TextC.Title level={2}> Sucesso </TextC.Title>
                </S.Header>
                <S.Body>

                    <TextC.Title level={1}> Aluno cadastrado com sucesso!  </TextC.Title>
                    
                    {
                        //False menor de idade, True Maior de idade
                        adult 
                        ? <TextC.Body level={2}> 
                                É possível adicionar responsáveis para este aluno. Assim, em caso de emergência, poderemos entrar em contato com essas pessoas.  
                            </TextC.Body>

                        : <TextC.Body level={2}> 
                                O sistema identificou que o aluno cadastrado é menor de idade. Por isso, solicitamos o cadastro de responsável(is) pelo aluno, para que, em caso de emergência, possamos entrar em contato.  
                            </TextC.Body>
                    }
                    <S.WrapButtonResponsible>
                        <S.ButtonResponsible
                            onClick={() =>  navigate('/responsibleStudents/responsibleList/', { state: { uid: uid} })} ///responsibleStudents/form_update/:uid?
                        >
                            { 
                                adult 
                                ? <span>Sim, quero cadastrar responsável(is)</span>
                                : <span>Vamos cadastrar responsável(is)</span>
                            }
                            <Theme.Icons.MdPerson />
                        </S.ButtonResponsible>

                    </S.WrapButtonResponsible>

                    <S.WrapImg>
                        <img src={Theme.ImgC.Success} alt="sucesso" />
                    </S.WrapImg>
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