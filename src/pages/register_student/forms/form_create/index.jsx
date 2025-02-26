import * as S from './styled';
import BodyForm from "../components/body"
import { useRegisterStudents } from '../../../../hooks/registerStudent';

const FormCreate = ({idStudent, checkForm}) => {

    const {createRegisterStudent, loading: loadingCreate } = useRegisterStudents.usePostDocumentsCreate();

    const handleOnSubmit = async (data) => {
        
        //Passando o id do aluno
        data.idStudent = idStudent

        //1 recuperar todas as fichas do aluno em questão;
        //2 recuperar a maior faixa ja cadastrado, comparar com a faixa deja cadastrar
            //2.1 faixa ja cadastrada maior que a nova faixa, retorna false
            //2.2 faixa ja cadastrada menor que a nova faixa, 
                //2.2.1 mudar o historico atual por false e retorna true 
        //3 passa para componete se é true ou false, passar para o data;






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