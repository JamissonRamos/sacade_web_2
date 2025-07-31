import * as S from './styled'
import { Button, Form, Spinner } from 'react-bootstrap'
import FieldData from '../fields/field_data'
import FieldAddress from '../fields/field_address'
import { Theme } from '../../../../../../../theme'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../../../../validations'
import { AddUidResponsibleStudentArray, FormattedDate, GetUidLocalStorage } from './script'
import { unMask } from 'remask';
import { useResponsibleStudents } from '../../../../../../../hooks/responsibleStudents'
import { useNavigate } from 'react-router-dom'

const BodyForm = () => {
    const navigate = useNavigate();
    const { createResponsibleStudent, loading: loadingCrate } = useResponsibleStudents.usePostDocumentsCreate()

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ResponsibleStudents)
    });
    
    const handleNavigate = () => {
        //Recuperando id do aluno cadastrado
        const uidStudent = GetUidLocalStorage();        
        const path = `/responsibleStudents/responsibleList/ `
        navigate('/notifications/create', {
            state: {
                url: path,
                uid: uidStudent,
                valueButton: {value: 'Lista Responsáveis', icon: 'MdPerson'},
            },
        });
    }

    const handleOnSubmit = async (data) => {
        const uidStudent =  GetUidLocalStorage();
        //Remover relationshipLevel do objeto data
        const { relationshipLevel, ...dataToSave } = data;

        dataToSave.birthDate = FormattedDate(dataToSave.birthDate)
        dataToSave.phone = unMask(dataToSave.phone);
        dataToSave.cep = unMask(dataToSave.cep);
        dataToSave.idStudent = [uidStudent];
        dataToSave.idStudentLevel = [{idStudent: uidStudent, relationshipLevel: relationshipLevel}]

        const result = await createResponsibleStudent(dataToSave);
        //const result = { success: true, uidResponsibleStudents:'Rf098aopEf5Q3NlFuiqI' , message: 'teste de erro' }
        const { success, uidResponsibleStudents, message } = result;
        
        if(success){
            AddUidResponsibleStudentArray('uidsResponsibleStudent', uidResponsibleStudents)
            reset();
            handleNavigate()
        }else{
            console.log('Erro: ', message);
            navigate('/notifications/error');
        }
    }

    return (
        <S.Container>
            <S.FormCreate>
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
                            disabled={loadingCrate ? true : false}
                        >   
                            { loadingCrate ?
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span > Salvando... </span>
                                </> :
                                <>
                                    <Theme.Icons.MdSaveAlt />
                                    <span>Salvar</span>
                                </>
                            } 
                        </Button>  

                    </S.WrapButtonUpdateCancel>
                </Form>
            </S.FormCreate>
        </S.Container>
    )
}

export default BodyForm