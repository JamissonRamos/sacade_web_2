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
import { useEffect } from 'react'

import { useResponsibleStudents } from '../../../../../../hooks/responsibleStudents'

const FormUpdate = ({registered}) => {
    
    const navigate = useNavigate();

    const { updateResponsibleStudent, loading: loadingUpdate } = useResponsibleStudents.usePostDocumentsUpdate()

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


    const handleOnSubmit = async (data) => {        
        data.birthDate = FormattedDate(data.birthDate)
        data.phone = unMask(data.phone);
        data.cep = unMask(data.cep);

        const result = await updateResponsibleStudent(data);
        const { success, message } = result;

        if(success){
            console.log('Cadastro realizado com sucesso!');
            reset();
            navigate('/notifications/update');
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
        </S.Container>
    )
}

export default FormUpdate