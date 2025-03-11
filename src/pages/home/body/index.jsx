import * as S           from "./styled";
import { useAuth }      from '../../../contexts/authContext/AuthContex'
import RegisterStudent  from "../components/register_stuedent";
import Students         from "../components/students";

const Body = () => {
    const { currentUser } = useAuth(); //Recuperando user logado;
    const { status } = currentUser  //Recuperando status de user logado;

    //nomeando status 
    const statusMap = {
        Administrador: 1,
        Assistente: 2,
        Visitante: 3,
    };

    //atribuindo permicoes as secoes
    const sectionsAuth = {
        Students: [ 1, 2, 3],
        RegisterStudent: [1, 2],
    };

    //Comparando status com permicoes
    const handleHasAccess = (sections, status) => {
        let result
        const statusIndex = statusMap[status];
        result = sectionsAuth[sections]?.includes(statusIndex) || false; // Verifica se o status tem permissão    
        return result
    };

    return (
        <S.Container>

            <S.SectionStudents>
                {
                    handleHasAccess('Students', status )
                    ? <Students />
                    : null
                }
            </S.SectionStudents>

            <S.SectionRegisterStudents>
                {
                    handleHasAccess('RegisterStudent', status )
                    ? <RegisterStudent />
                    : null
                }
            </S.SectionRegisterStudents>

            {/* Outra seção de demostrativos */}
        </S.Container>
    ) 
}

export default Body