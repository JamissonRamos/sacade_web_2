import * as S from './styled'
import { useNavigate } from 'react-router-dom';

import ListTeste from '../../../components/lists_custom/students/list_teste';

const CardList = ({data}) => {
    const navigate = useNavigate();
    
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
                data && 
                    <ListTeste 
                        data={data} 
                        navigateOnClick={handleShowFormUpdate}
                    />
            }
        </S.Container>
    )
}

export default CardList