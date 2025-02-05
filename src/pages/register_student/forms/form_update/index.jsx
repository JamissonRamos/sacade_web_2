import BodyForm from '../components/body';
import * as S from './styled';

const FormUpdate = ({dataRegister, checkForm}) => {
    console.log('dataRegister', dataRegister);
    console.log('checkForm', checkForm);





    
    return (
        
        <S.Container>
            <BodyForm  checkForm={checkForm}/>
        </S.Container>
    )
}

export default FormUpdate