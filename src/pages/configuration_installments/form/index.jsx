/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "./styled"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../validations/index'
import { Theme } from "../../../theme";

import { FormatPercentageNumber, FormatMoneyNumber, FormattedDate, GenerateInstallments, AddDaysToDate} from "../scripts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Fields from "./fields"
import { Button, Spinner } from "react-bootstrap";
import { useInstallments } from "../../../hooks/installments";

const Form = () => {
    const [fieldDisabled, setFieldDisabled] = useState(true);

    const navigate = useNavigate();

    const { createDocuments, loading: loadingCrate} = useInstallments.usePostDocumentsCreate();

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ConfigurationInstallmentsSchema)
    }); 


    const handleOnSubmit = async (data) => {
        let result = null;
        

        data.fees = FormatPercentageNumber(data.fees);
        data.interestAnnual = FormatPercentageNumber(data.interestAnnual);
        data.interestDaily = FormatPercentageNumber(data.interestDaily);
        data.interestMonthly = FormatPercentageNumber(data.interestMonthly);
        data.valueInstallment = FormatMoneyNumber(data.valueInstallment);
        data.firstDateInstallments = FormattedDate(data.firstDateInstallments);

        console.log('Data: ', data);
        
            // Recuperar o documento do local storage
            const studentsUid = JSON.parse(localStorage.getItem('uisStudents')) || [];
            // Verificar se o documento foi encontrado
            if (!studentsUid) {
                console.log('Erro ao tenta busca Uid de estudantes');
                //navigate('/notifications/error');
            }

            studentsUid && studentsUid.forEach((uid) => {
                console.log('uid: ', uid);

                /* 
                    - 2 for para gerar a parcela e criar o docuento no bnaco;
                    - passar o uid do estudante;
                */

                for (let i = 0; i < data.quantityInstallments; i++) {
                    console.log('parcelas: ', i);
                    let resultDueDate = 0;

                    // 1 loop sempre a data da parcela normal 2 loop em diante sempre colocar 30 dias
                    i === 0 
                        ? resultDueDate = data.firstDateInstallments
                        : resultDueDate = AddDaysToDate( data.firstDateInstallments, i)

                    const installment = {
                        uid,
                        installmentNumber: `${i + 1}/${data.quantityInstallments}`,
                        dueDate: resultDueDate,
                        value: data.valueInstallment,
                        fees: data.fees,
                        interestAnnual: data.interestAnnual,
                        interestMonthly: data.interestMonthly,
                        interestDaily: data.interestDaily,
                    };

                        console.log(installment);
                            
                    // result = createDocuments();

                    // const {success, message } = result;

                }

                
            })



       //let resultGenerateInstallments = GenerateInstallments(data)

       // console.log(resultGenerateInstallments);
        // const {success, installments, message }= resultGenerateInstallments
        
        //console.log('installments: ', installments);
        
        // if(success){
        //     console.log('Gerou as PArcelas');
            
        //     //navigate('/notifications/create');
            
        // }else{
        //     console.log('error: ', message);
        //     //navigate('/notifications/error');
        // }
        


        
        // result = {success: true, message: false }

        // const {success, message } = result;

        // if(success){
        //     console.log('Gerou as PArcelas');
            
        //     //navigate('/notifications/create');
            
        // }else{
        //     console.log('error: ', message);
        //     navigate('/notifications/error');
        // }
        //reset()
    }
    
    return (
        <S.Form onSubmit={handleSubmit(handleOnSubmit)} >
            <Fields 
                register={register}
                setValue={setValue}
                getValues={getValues}
                errors={errors}
                fieldDisabled={fieldDisabled}
                setFieldDisabled={setFieldDisabled}
            />

            <S.WrapButtons>
                <Button
                    variant="outline-danger"
                    onClick={() =>  navigate('/')}
                >
                    <Theme.Icons.MdClose />
                    <span>Cancelar</span>
                </Button>  
                {
        
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
                                    <span > Gerando Parcelas... </span>
                                </> :
                                <>
                                    <Theme.Icons.MdAddCard />
                                    <span>Gerar Parcelas</span>
                                </>
                            } 
                        </Button>  
                }

            </S.WrapButtons>
        </S.Form>
    )
}

export default Form