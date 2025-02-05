import * as S from './styled';
import BodyForm from "../components/body"

const FormCreate = ({checkForm}) => {
/* 
    - Receber todo código relacionado ao banco de dados;
    - Passar aki tudo relacionado ao banco de dados;
*/
    return (
        
        <S.Container>
            <BodyForm checkForm={checkForm}/>
        </S.Container>
    )
}

export default FormCreate