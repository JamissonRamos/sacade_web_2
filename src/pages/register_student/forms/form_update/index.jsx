import * as S from './styled';
import BodyForm from '../components/body';
import { useRegisterStudents } from '../../../../hooks/registerStudent';
import { useState } from 'react';
import DeleteData from '../../../../components/alert_delete';
import { useNavigate } from 'react-router-dom';

const FormUpdate = ({dataRegister, checkForm, fullname}) => {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [registeredDelete, setRegisteredDelete] = useState(null);

    const navigate = useNavigate();
    
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
        const result =  await deleteDate(newDataRegister.uid)
        const {success, message} = result;

        if(success){
            const path = `/registerStudent`;
            navigate(`/notifications/delete`, {
                state: {
                    url: path,
                    valueButton: {value: 'Ficha do Aluno', icon: 'PiAddressBookFill'},
                    buttonNewRegister: false,
                },
            });
        }else{
            //reset()
            navigate('/notifications/error');
            console.log({message: `Deu algum erro na ficha do aluno: ${message}`})
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
                loading={loadingUpdate || loadingDelete}
                dataRecovered={newDataRegister}
            />
            {
                showModalDelete &&
                    <DeleteData
                        registeredDelete = {registeredDelete}
                        handleShowDelete = {handleShowModalDelete}
                        handleDeleteData = {handleDeleteData}
                    />
            }

        </S.Container>
    )
}

export default FormUpdate