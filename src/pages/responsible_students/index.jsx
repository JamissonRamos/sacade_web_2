//Styled
import * as S from './styled'
import { TextC } from '../../components/Typography'
import { WrapPages } from '../../components/Wrappe/pages'


const ResponsibleStudents = () => {

    return (
        <WrapPages>
            <S.HeaderPage>
                <TextC.Title level={2}> Responsáveis Alunos</TextC.Title>
                <TextC.Body level={1}> Deve selecionar um aluno já cadastrado </TextC.Body>
            </S.HeaderPage>
        </WrapPages>
    ) 
}

export default ResponsibleStudents