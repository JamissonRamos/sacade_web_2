import * as S from './styled';
import BodyForm from '../components/body';
import { useRegisterStudents } from '../../../../hooks/registerStudent';

const FormUpdate = ({dataRegister, checkForm}) => {

    //Deixa como obj, sem array
    const newDataRegister = dataRegister;

    const {updateData, loading: loadingUpdate } = useRegisterStudents.usePostDocumentsUpdate()
    const {deleteDate, loading: loadingDelete } = useRegisterStudents.usePostDocumentsDelete()

    const handleOnSubmit = async (data) => {
        const result =  await updateData(data)
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

    const handleDeleteData =  async (uid) => {
        const result =  await deleteDate(uid)
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
                handleDeleteData={handleDeleteData}
                checkForm={checkForm}
                loading={loadingUpdate || loadingDelete}
                dataRecovered={newDataRegister}
            />
        </S.Container>
    )
}

export default FormUpdate