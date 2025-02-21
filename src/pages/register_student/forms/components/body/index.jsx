import * as S from './styled'
import { Form } from 'react-bootstrap'
import { useEffect } from 'react';
import { FieldRegisterStudent } from '../fields';
import { Validations } from '../../../../validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ApplyChew, ConvertDate, FormatStringNumber, FormattedDate } from './script';


//handleDeleteData
const BodyForm = ({handleOnSubmit, handleShowModalDelete, checkForm, loading, dataRecovered}) => {
    
    const navigate = useNavigate();

    const { register, handleSubmit, setValue, watch, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.RegisterStudentSchema),
        defaultValues: {
            studentWeight: 0,
            studentHeight: 0,
            degrees: 0, // Valor inicial para degreesRange
        },
    });

    const applyMascara = (fieldName, fieldValue ) => {
        let maskedValue = ApplyChew(fieldName, fieldValue)
        setValue(fieldName, maskedValue)
    }


    const handleApplyChewChange = (e) => {
        let fieldName = e.target.name || false;
        let fieldValue = e.target.value || false;

        let maskedValue = ApplyChew(fieldName, fieldValue);   
        
        setValue(fieldName, maskedValue);
    }

    const handleSubmitBody = async (data) => {
        data.dateUpdate = FormattedDate(data.dateUpdate)
        data.studentWeight = FormatStringNumber(data.studentWeight)
        data.studentHeight = FormatStringNumber(data.studentHeight)

        const result = await handleOnSubmit(data)
        const {success, message} = result;
    
        if(success){
            const path = `/registerStudent`;
            //Coloca dinamico a page de notificação, atualiação ou create
            navigate(`/notifications/${checkForm ? 'create' : 'update' } `, {
                state: {
                    url: path,
                    valueButton: {value: 'Ficha do Aluno', icon: 'PiAddressBookFill'},
                    buttonNewRegister: false,
                },
            });

            
        }else{
            reset()
            navigate('/notifications/error');
            console.log({message: `Deu algum erro na ficha do aluno: ${message}`})
        }
    }

    useEffect(() => {  
        
        if (!checkForm && dataRecovered ) {
            Object.keys(dataRecovered).forEach(key => {
                if (key === 'dateUpdate') {
                    const newDate = ConvertDate( dataRecovered[key]) 
                    setValue(key, newDate);
                }else if (key === 'degrees') {
                    setValue(key, dataRecovered[key]);
                }else if (key === 'studentWeight') {
                    applyMascara(key, dataRecovered[key]);
                }else if (key === 'studentHeight') {
                    applyMascara(key, dataRecovered[key]);
                }else{
                    setValue(key, dataRecovered[key]);
                }
            });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataRecovered])  
    

    return (

        <S.Container>
            <Form onSubmit={handleSubmit(handleSubmitBody)}>
                <S.WrapFields>
                    <FieldRegisterStudent.RegisterStat 
                        register={register} 
                        setValue={setValue}
                        watch={watch}
                        errors={errors}
                        handleApplyChewChange={handleApplyChewChange}
                    />  
                    <FieldRegisterStudent.EndRegister 
                        handleShowModalDelete={handleShowModalDelete}
                        checkForm={checkForm}
                        loading={loading}
                    />  
                </S.WrapFields>
            </Form>
            
        </S.Container>
    )
}

export default BodyForm