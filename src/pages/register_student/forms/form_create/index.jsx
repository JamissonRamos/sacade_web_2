import * as S from './styled';
import BodyForm from "../components/body"
import { useRegisterStudents } from '../../../../hooks/registerStudent';
import { UpdateHistoryStudent } from '../scripts';

const FormCreate = ({idStudent, checkForm}) => {

    const {createRegisterStudent, loading: loadingCreate } = useRegisterStudents.usePostDocumentsCreate();
    const {updateData, loading: loadingUpdate } = useRegisterStudents.usePostDocumentsUpdate();
    
    // Recupera os alvarás do Local Storage
    const currentHistory = JSON.parse(localStorage.getItem('currentHistory')) || [];
    const {uid, range} = currentHistory[0];


    const updateCurrentHistory = async () => {
        //Criar o obt a ser muda do o campo como false e uid para fazer o filtro e fazer alteração
        const data = {
            currentHistory: false,
            uid: uid
        }

        const result = await updateData(data);
        const {success, message} = result;
        if (success){
            return {success: true};
        }else{
            console.log('Erro na atualização de campo: ', message);
            return {success: false};
        }

    }
    
    const handleOnSubmit = async (data) => {
        const newRange = data.range;
        const historyActual = await UpdateHistoryStudent(newRange, range);

        //Passando o id do aluno
        data.idStudent = idStudent;
        data.currentHistory = historyActual;

        const result =  await createRegisterStudent(data)
        //const result = {success: true, message: 'teste'}
        const {success, message} = result;

        if(success){

            //Atualizando campo currentHistory caso a faixa nova seja maio que a faixa atual
            if(historyActual){
                //altera o campo que esta como atual para false
                const resultUpdateRange = await updateCurrentHistory();
                const { success } = resultUpdateRange;
                !success && console.log('Erro na atualização do campo hatórico atual');
            }
            //Limpar o array no local storage
            localStorage.removeItem('currentHistory');

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
                loading={loadingCreate || loadingUpdate}/>
        </S.Container>
    )
}

export default FormCreate