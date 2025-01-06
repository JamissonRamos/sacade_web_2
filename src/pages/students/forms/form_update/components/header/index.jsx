import * as S from './styled';
import { TextC } from '../../../../../../components/Typography';
import { Button } from 'react-bootstrap';
import { Theme } from '../../../../../../theme';
import { useNavigate } from 'react-router-dom';

const HeaderForm = ({uid, data}) => {
    // const {firstName, lastName } = data || '';
    const navigate = useNavigate();

    const handleDataStudentLocalStorage = () => {
        //Obtendo o obj do alunos que foi selecionado
        data.uid = uid;
        const studentData =  [data]

        //Criando a coleção no local storage
        localStorage.setItem('student', JSON.stringify(studentData));
    }

    const handleOnClick = () => {

        handleDataStudentLocalStorage()
        navigate('/responsibleStudents/responsibleList/', { state: { uid: uid} })

    }
    return (
        <S.Container>
            <TextC.Title level={2}> Atualizar Cadastro</TextC.Title>
            <TextC.Body level={1}> Realizar a atualização dos dados dos alunos </TextC.Body>
            <S.WrapButton>
                <Button
                    variant="success"
                    onClick={() =>  handleOnClick() }
                >
                    <Theme.Icons.MdList />
                    <span>Lisa de Responsável</span>
                </Button>
            </S.WrapButton>
        </S.Container>
    )
}

export default HeaderForm