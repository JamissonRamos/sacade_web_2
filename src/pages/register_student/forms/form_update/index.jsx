import BodyForm from '../components/body';
import * as S from './styled';

const FormUpdate = ({idStudent, dataRegister, checkForm}) => {
    console.log('dataRegister', dataRegister);
    console.log('checkForm', checkForm);

    console.log('update idStudent ', idStudent);

    const handleOnSubmit = (data) => {
        console.log('update ');
        console.log('update data ', data);


        
    }

    
    return (
        
        <S.Container>
            <BodyForm handleOnSubmit={handleOnSubmit} checkForm={checkForm}/>
        </S.Container>
    )
}

export default FormUpdate