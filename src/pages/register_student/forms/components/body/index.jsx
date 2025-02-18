import * as S from './styled'
import { Form } from 'react-bootstrap'
//import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane }  from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { FieldRegisterStudent } from '../fields';
import { Validations } from '../../../../validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ApplyChew, ConvertDate, FormatStringNumber, FormattedDate } from './script';


const BodyForm = ({handleOnSubmit, handleDeleteData, checkForm, loading, dataRecovered}) => {

    //const [basicActive, setBasicActive] = useState('tab1');
    
    const navigate = useNavigate();

    const { register, handleSubmit, setValue, getValues, watch, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.RegisterStudentSchema),
        defaultValues: {
            studentWeight: 0,
            studentHeight: 0,
            degrees: 0, // Valor inicial para degreesRange
        },
    });

    // const handleBasicClick = (value) => {
    //     //Tabs nav
    //     if (value === basicActive) {
    //         return;
    //     }
    //     setBasicActive(value);
    // };

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

    const handleDeleteDataBody = async () => {
        const uid = dataRecovered.uid;

        const result = await handleDeleteData(uid)
        const {success, message} = result;

        if(success){
            const path = `/registerStudent`;
            //Coloca dinamico a page de notificação, atualiação ou create
            navigate(`/notifications/delete`, {
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

    //Contas os erro e mostra se tiver algum em qualquer form 
    //const errorCount = Object.keys(errors).length;

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
                        getValues={getValues}
                        watch={watch}
                        errors={errors}
                        handleApplyChewChange={handleApplyChewChange}
                    />  
                    <FieldRegisterStudent.EndRegister 
                                handleDeleteDataBody={handleDeleteDataBody}
                                checkForm={checkForm}
                                loading={loading}
                            />  
                </S.WrapFields>
            </Form>
        </S.Container>
    )
}

export default BodyForm