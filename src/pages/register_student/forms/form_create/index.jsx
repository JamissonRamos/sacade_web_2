import * as S from './styled';
import BodyForm from "../components/body"

const FormCreate = ({checkForm}) => {
/* 
    - Receber todo código relacionado ao banco de dados;
    - Passar aki tudo relacionado ao banco de dados;
*/
    const handleOnSubmit = (data) => {
        console.log('create ');
        console.log('create data ', data);


        
    }
    return (
        
        <S.Container>
            <BodyForm handleOnSubmit={handleOnSubmit} checkForm={checkForm}/>
        </S.Container>
    )
}

export default FormCreate