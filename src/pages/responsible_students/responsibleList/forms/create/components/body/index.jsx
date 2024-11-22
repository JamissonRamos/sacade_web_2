import { Button, Form, Spinner } from 'react-bootstrap'
import * as S from './styled'

import FieldData from '../fields/field_data'
import FieldAddress from '../fields/field_address'
import { Theme } from '../../../../../../../theme'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../../../../validations'
import { FormattedDate } from './script'
import { unMask } from 'remask';

import { useResponsibleStudents } from '../../../../../../../hooks/responsibleStudents'
import { useNavigate } from 'react-router-dom'


const BodyForm = () => {
    const navigate = useNavigate();
    const { createResponsibleStudent, loading: loadingCrate } = useResponsibleStudents.usePostDocumentsCreate()

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ResponsibleStudents)
    });
    


    const handleOnSubmit = async (data) => {
        data.birthDate = FormattedDate(data.birthDate)
        data.phone = unMask(data.phone);
        data.cep = unMask(data.cep);

        const result = await createResponsibleStudent(data);
        
        const { success, message } = result;

        if(success){
            console.log('Cadastro realizado com sucesso!');
            navigate('/notifications/create')
            
        }else{
            console.log('Erro: ', message);
            
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
                            // onClick={() => navigate('/users')}
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