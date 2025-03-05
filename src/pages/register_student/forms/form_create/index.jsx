import * as S from './styled';
import BodyForm from "../components/body"
import { useRegisterStudents } from '../../../../hooks/registerStudent';

const FormCreate = ({idStudent, checkForm}) => {

    const {createRegisterStudent, loading: loadingCreate } = useRegisterStudents.usePostDocumentsCreate();

    const handleOnSubmit = async (data) => {

        //Passando o id do aluno
        data.idStudent = idStudent;
        data.currentHistory = false;

        const result =  await createRegisterStudent(data)
        //const result = {success: true, message: 'teste'}
        const {success, message} = result;

        if(success){
            return { success: true }
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
                loadingCreate={loadingCreate}/>
        </S.Container>
    )
}

export default FormCreate