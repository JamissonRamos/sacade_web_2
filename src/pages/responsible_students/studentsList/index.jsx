import React from 'react'
import * as S from './styled'
import { Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// import ChangeRegistrationModal from '../modal'

const StudentsList = ({data}) => {
    
    const navigate = useNavigate();
    
    const handleBadge = (status) => 
    {
        let bg
        switch (status) {
        case 'inativo':
            bg = "warning"
            break;
        case 'bloqueado ':
            bg = "danger"
            break;
        case 'ativo':
            bg = "success"
            break;
    
        default:
            bg = "primary"
            break;
        }
    
        return bg 
    }

    const handleDataStudentLocalStorage = (uid) => {
        //Obtendo o obj do alunos que foi selecionado
        const studentData = data.filter(obj => obj.uid === uid);
        //Criando a coleção no local storage
        localStorage.setItem('student', JSON.stringify(studentData));
    }

    const handleShowFormUpdate = (uid) => { 
        // Exclui os dados do localStorage
        localStorage.removeItem('student');
        //Criar coleção de aluno no local storage
        handleDataStudentLocalStorage(uid)
        navigate('/responsibleStudents/responsibleList/', { state: { uid: uid } });
    };

    return (
        <S.Container>
            
            {
                data && data.map(({uid, firstName, lastName, status}) => (

                    <S.WrapButton 
                        key={uid}
                        onClick={() => handleShowFormUpdate(uid)}>
                            <S.Card>
                                <S.CircleFirstLetterNome>
                                    {firstName && firstName.charAt(0)}
                                </S.CircleFirstLetterNome>

                                <S.Name>
                                    {firstName + ' ' + lastName}
                                </S.Name>
                                <S.Status>
                                    <Badge bg={handleBadge(status)} text="light">
                                        {status}
                                    </Badge>
                                </S.Status>
                            </S.Card>

                    </S.WrapButton>


                ))
            }
        </S.Container>
    )
}

export default StudentsList