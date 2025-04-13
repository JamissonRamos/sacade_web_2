/* eslint-disable react-hooks/exhaustive-deps */

import * as S from "./styled"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../../validations'
import { ConvertDate, ConvertNumberToCurrency, FormatNumberPercentage } from "../../scripts";
import { useEffect, useState } from "react";

import Fields from "./fields"
import { LoadingOverlay } from "../../../../../components/spinner/global/styled";
import { Spinner } from "react-bootstrap";

const Form = ({registered}) => {
    const [loading, setLoading] = useState(false);

    const [fieldDisabled, setFieldDisabled] = useState(true); // Habilitar e desabilitar campos
    const fields = ['fees', 'interestDaily', 'interestMonthly', 'interestAnnual']; //Nomes dos meu campos

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ConfigurationInstallmentsSchema)
    }); 

    const handleOnSubmit = async (data) => {
        console.log('data', data);
        
    //     setLoadingProcess(true);

    //     try {
    //         data.fees = FormatPercentageNumber(data.fees);
    //         data.interestAnnual = FormatPercentageNumber(data.interestAnnual);
    //         data.interestDaily = FormatPercentageNumber(data.interestDaily);
    //         data.interestMonthly = FormatPercentageNumber(data.interestMonthly);
    //         data.valueInstallment = FormatMoneyNumber(data.valueInstallment);
    //         data.firstDateInstallments = FormattedDate(data.firstDateInstallments);
            
    //         // Recuperar o documento do local storage
    //         const studentsUid = JSON.parse(localStorage.getItem('uisStudents')) || [];
            
    //         // Verificar se o documento foi encontrado
    //         if (!studentsUid) {
    //             console.log('Erro ao tenta busca Uid de estudantes');
    //             navigate('/notifications/error');
    //         }
            
    //         // Lista para armazenar todas as Promises
    //         const allPromises = [];

    //         studentsUid && studentsUid.forEach(({uid, name}) => {
                
    //             for (let i = 0; i < data.quantityInstallments; i++) {
    //                 let resultDueDate = 0;

    //                 // 1 loop sempre a data da parcela normal 2 loop em diante sempre colocar 30 dias
    //                 i === 0 
    //                     ? resultDueDate = data.firstDateInstallments
    //                     : resultDueDate = AddDaysToDate( data.firstDateInstallments, i)
    
    //                 const installment = {
    //                     uid,
    //                     name,
    //                     statusPayment: false, //false => Aberto
    //                     installmentNumber: `${i + 1}/${data.quantityInstallments}`,
    //                     dueDate: resultDueDate,
    //                     value: data.valueInstallment,
    //                     fees: data.fees,
    //                     interestAnnual: data.interestAnnual,
    //                     interestMonthly: data.interestMonthly,
    //                     interestDaily: data.interestDaily,
    //                 };

    //                 // Adiciona a Promise de criação à lista
                    
    //                 if (installment) {
    //                     allPromises.push(fetchPostCreate(installment));
    //                 }
    //             }
    //         })
    //         // Aguarda todas as Promises serem resolvidas
    //         await Promise.all(allPromises);
    //         reset()
    //         navigate('/notifications/generatedPlots');
    //         //Coloca dinamico a page de notificação, atualiação ou create
    //         const path = `/`;
    //         navigate(`/notifications/generatedPlots`, {
    //             state: {
    //                 url: path,
    //                 valueButton: {value: 'Home', icon: 'MdHome'},
    //                 buttonNewRegister: true,
    //             },
    //         });
            
    //     } catch (error) {
    //         console.log('error: ', error.message);
    //         navigate('/notifications/error');
    //     }finally{
    //         setLoadingProcess(false)
    //     }
    }

    useEffect(() => {     
        const firstItem = registered[0];
        let maskedValue = 0;
        if (firstItem) {
            Object.entries(firstItem).forEach(([key, value]) => {
                if (key === 'dueDate'){
                    setValue(key, ConvertDate(value)); 
                }else if (key === 'valueInstallment'){
                    setValue(key, ConvertNumberToCurrency(value));
                }else if (fields.includes(key)){
                    maskedValue = FormatNumberPercentage(value);
                    setValue(key,  maskedValue);
                }
            });
            setLoading(true); // dados carregados
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [registered]) 

    // Condicione a renderização do seu componente
    if (!loading) {
        return (
            <LoadingOverlay>
                <Spinner
                    as="span"
                    animation="border"
                    role="status"
                />
                <span >Carregando os dados...</span>
            </LoadingOverlay> // Ou qualquer outro indicador de carregamento
        )
    }
    return (

        <S.Container>
            <S.Form onSubmit={handleSubmit(handleOnSubmit)} >
                <Fields 
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                    errors={errors}
                    fieldDisabled={fieldDisabled}
                    setFieldDisabled={setFieldDisabled}
                    data={registered}
                />
            </S.Form>
        </S.Container>
    )
}

export default Form