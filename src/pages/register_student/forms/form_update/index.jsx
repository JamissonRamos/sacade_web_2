import * as S from './styled';
import BodyForm from '../components/body';
import { useRegisterStudents } from '../../../../hooks/registerStudent';
import { useState } from 'react';


const FormUpdate = ({dataRegister, checkForm, fullname}) => {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [registeredDelete, setRegisteredDelete] = useState(null);

    //Deixa como obj, sem array
    const newDataRegister = dataRegister;  

    const {updateData, loading: loadingUpdate } = useRegisterStudents.usePostDocumentsUpdate()
    const {deleteDate, loading: loadingDelete } = useRegisterStudents.usePostDocumentsDelete()

    const handleShowModalDelete = () => { 
        setShowModalDelete((prevState) => !prevState);
        setRegisteredDelete({
            fullName: fullname
        })
    };

    const handleDeleteData =  async () => {
        /* 
            * Função para excluir historico de aluno
        */
        const result =  await deleteDate(newDataRegister.uid)
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

    const handleOnSubmit = async (data) => {

        const result = await updateData(data)
        //const result = {success: true, message: 'teste'}
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
                handleShowModalDelete={handleShowModalDelete}
                checkForm={checkForm}
                loadingUpdate={loadingUpdate}
                loadingDelete={loadingDelete}
                dataRecovered={newDataRegister}

                showModalDelete={showModalDelete}
                registeredDelete={registeredDelete}
                handleDeleteData={handleDeleteData}
            />
        </S.Container>
    )
}

export default FormUpdate