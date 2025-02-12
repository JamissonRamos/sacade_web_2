import * as S from './styled';
import BodyForm from '../components/body';
import { usePostDocumentsUpdate } from '../../../../hooks/registerStudent/usePostDocumentsUpdate';

const FormUpdate = ({dataRegister, checkForm}) => {

    //Deixa como obj, sem array
    const newDataRegister = dataRegister[0];

    const {updateData, loading } = usePostDocumentsUpdate()

    const handleOnSubmit = async (data) => {
        console.log('update ');
        console.log('update data ', data);

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

    
    return (
        
        <S.Container>
            <BodyForm 
                handleOnSubmit={handleOnSubmit} 
                checkForm={checkForm}
                loading={loading}
                dataRecovered={newDataRegister}
            />
        </S.Container>
    )
}

export default FormUpdate