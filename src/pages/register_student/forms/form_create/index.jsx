import * as S from './styled';
import BodyForm from "../components/body"
import { useRegisterStudents } from '../../../../hooks/registerStudent';

const FormCreate = ({idStudent, checkForm}) => {

    const {createRegisterStudent, loading: loadingCreate } = useRegisterStudents.usePostDocumentsCreate();

    const handleOnSubmit = async (data) => {
        console.log('data form create:', data);
        
        //Passando o id do aluno
        data.idStudent = idStudent
        const result =  await createRegisterStudent(data)
        const {success, message} = result;

        if(success){
            return {
                success: true
            }
        }else{
            return {
                success: false,
                message: message
            }
        }
    }
    return (
        
        <S.Container>
            <BodyForm
                handleOnSubmit={handleOnSubmit} 
                checkForm={checkForm} 
                loading={loadingCreate}/>
        </S.Container>
    )
}

export default FormCreate