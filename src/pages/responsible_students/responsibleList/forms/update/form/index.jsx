/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Spinner } from 'react-bootstrap'
import * as S from './styled'
import FieldData from '../fields/field_data'
import FieldAddress from '../fields/field_address'
import { Theme } from '../../../../../../theme'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../../../validations'
import { FormattedDate, ConvertDate, ApplyMask } from './script'
import { unMask } from 'remask';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DeleteData from '../../../../../../components/alert_delete';

import { useResponsibleStudents } from '../../../../../../hooks/responsibleStudents'

const FormUpdate = ({registered}) => {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [registeredDelete, setRegisteredDelete] = useState(null);

    const dataStudentLocalStorage = JSON.parse(localStorage.getItem('student')) || [];
    const {uid: idStudentLocalStorage} = dataStudentLocalStorage[0] || ""; 

    const navigate = useNavigate();

    const { updateResponsibleStudent, loading: loadingUpdate } = useResponsibleStudents.usePostDocumentsUpdate();
    const { deleteResponsibleStudent, loading: loadingDelete } = useResponsibleStudents.usePostDocumentsDelete();

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ResponsibleStudents)
    });
    
    //Passar os dados para os campos
    useEffect(() => {
        
        if (registered) {
            Object.keys(registered).forEach(key => {
                if (key === 'birthDate') {
                    const newDate = ConvertDate( registered[key])                   
                    setValue(key, newDate);
                }else if (key === 'phone') { 
                    const newPhone = ApplyMask(key, registered[key])
                    setValue(key, newPhone);
                }else if (key === 'cep') {
                    const newCep = ApplyMask(key, registered[key])
                    setValue(key, newCep);
                }else if (key === 'idStudentLevel') {

                    //Filter level by idStudentLocalStorage
                    const keyExists = registered[key].find(item => item.idStudent === idStudentLocalStorage);

                    if(keyExists.relationshipLevel === 'Nenhum'){
                        setValue('relationshipLevel', '');
                    }else{
                        setValue('relationshipLevel', keyExists.relationshipLevel);
                    }

                }else {
                    setValue(key, registered[key]);
                }
            });
        }
    }, []); // Este useEffect depende de 'registered'


    const handleShowModalDelete = () => { 
        setShowModalDelete((prevState) => !prevState);
        setRegisteredDelete({
            fullName: registered.fullName
        })
    };

    const handleDeleteItem = async () => {
        const result = await deleteResponsibleStudent(registered.uid, idStudentLocalStorage)
        const { success, message} = result; 
        if(success){
            handleShowModalDelete()
            const path = `/responsibleStudents/responsibleList/`
            navigate('/notifications/delete', {
                state: {
                    uid: idStudentLocalStorage, //registered.idStudent[0],
                    url: path,
                    valueButton: {value: 'Lista Responsáveis', icon: 'MdPerson'},
                },
            });
        }else{
            console.log('Deu erro: ', message);
            navigate('/notifications/error');
        }
    }

    const handleOnSubmit = async (data) => {
        const { relationshipLevel, ...dataToSave } = data;
        let studentLevel;

        // Verifica se idStudentLevel existe e é um array
        if(registered.idStudentLevel){

            // Procura se já existe um item com o mesmo idStudent
            const existingIndex = registered.idStudentLevel.findIndex(item => item.idStudent === idStudentLocalStorage);
            
            if(existingIndex >= 0) {
                // Atualiza o item existente
                studentLevel = [...registered.idStudentLevel];
                studentLevel[existingIndex] = {
                    ...studentLevel[existingIndex], // Mantém todas as propriedades existentes
                    relationshipLevel: relationshipLevel // Atualiza apenas esta propriedade
                };
            } else {
                // Adiciona um novo item ao array
                studentLevel = [
                    ...registered.idStudentLevel,
                    {idStudent: idStudentLocalStorage, relationshipLevel: relationshipLevel}
                ];
            }
        } else {
            // Cria um novo array com um único item
            studentLevel = [{idStudent: idStudentLocalStorage, relationshipLevel: relationshipLevel}];
        }

        dataToSave.birthDate = FormattedDate(data.birthDate)
        dataToSave.phone = unMask(data.phone);
        dataToSave.cep = unMask(data.cep);
        dataToSave.idStudentLevel = studentLevel;

        //const result =   {success: true, message: 'Atualização bem-sucedida', };
        const result = await updateResponsibleStudent(dataToSave);
        const { success, message } = result;

        if(success){
            const path = `/responsibleStudents/responsibleList/`
            navigate('/notifications/update', {
                state: {
                    uid: idStudentLocalStorage,
                    url: path,
                    valueButton: {value: 'Lista Responsáveis', icon: 'MdPerson'},
                },
            });
            reset();
        }else{
            console.log('Erro: ', message);
            navigate('/notifications/error');
        }
    }
    
    return (
        <S.Container>
            <S.Form>
                <Form onSubmit={handleSubmit(handleOnSubmit)}>
                    <FieldData 
                        register={register}
                        setValue={setValue}
                        errors={errors}
                    />
                    <FieldAddress 
                        register={register}
                        setValue={setValue}
                        getValues={getValues}
                        errors={errors}
                    />
                    <S.WrapButtonDelete>
                        <Button
                            variant="danger"
                            onClick={handleShowModalDelete}
                            disabled={loadingDelete ? true : false}
                        >
                            {
                                loadingDelete && 
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                            }

                            <Theme.Icons.MdDelete />
                            <span>Excluir</span>
                        </Button> 
                    </S.WrapButtonDelete>
                    <S.WrapButtonUpdateCancel>
                        <Button
                            variant="outline-danger"
                            onClick={() => navigate(-1)}
                        >
                            <Theme.Icons.MdClose />
                            <span>Cancelar</span>
                        </Button>  

                        <Button
                            variant="success"
                            type='submit'
                            disabled={loadingUpdate ? true : false}
                        >   
                            { loadingUpdate ?
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span > Atualizando... </span>
                                </> :
                                <>
                                    <Theme.Icons.MdUpdate />
                                    <span>Atualizar</span>
                                </>
                            } 
                        </Button>  
                    </S.WrapButtonUpdateCancel>
                </Form>
            </S.Form>

            {
                showModalDelete &&
                    <DeleteData
                        registeredDelete = {registeredDelete}
                        handleShowDelete = {handleShowModalDelete}
                        handleDeleteData = {handleDeleteItem}
                    />
            }
        </S.Container>
    )
}

export default FormUpdate