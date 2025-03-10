import RegisterStudent from "../components/register_stuedent";
import Students from "../components/students";
import * as S from "./styled";

const Body = () => {
    return (
        <S.Container>

            
            <S.SectionStudents>
                <Students />
            </S.SectionStudents>

            <S.SectionRegisterStudents>
                <RegisterStudent />
            </S.SectionRegisterStudents>

            {/* Outra seção de demostrativos */}
        </S.Container>
    ) 
}

export default Body