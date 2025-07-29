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
        const result = await deleteResponsibleStudent(registered.uid)
        const { success, message} = result; 
        if(success){
            handleShowModalDelete()
            const path = `/responsibleStudents/responsibleList/`
            navigate('/notifications/delete', {
                state: {
                    uid: registered.idStudent[0],
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
        const dataStudentLocalStorage = JSON.parse(localStorage.getItem('student')) || [];
        const {uid} = dataStudentLocalStorage[0] || ""; 

        data.birthDate = FormattedDate(data.birthDate)
        data.phone = unMask(data.phone);
        data.cep = unMask(data.cep);
        // Atualiza o array idStudentLevel
        data.idStudentLevel = data.idStudentLevel.map(item => {
        if (item.idStudent === uid) {
            return {
                idStudent: uid,
                relationshipLevel: data.relationshipLevel
            };
        }
        return item;
    });        
        const result = await updateResponsibleStudent(data);
        const { success, message } = result;

        if(success){
            const path = `/responsibleStudents/responsibleList/`
            navigate('/notifications/update', {
                state: {
                    uid: uid,
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