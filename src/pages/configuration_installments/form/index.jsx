/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "./styled"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../validations/index'
import { Theme } from "../../../theme";

import { FormatPercentageNumber, FormatMoneyNumber, FormattedDate, AddDaysToDate} from "../scripts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Fields from "./fields"
import { Button, Spinner } from "react-bootstrap";
import { useInstallments } from "../../../hooks/installments";
import { LoadingOverlay } from "../../../components/spinner/global/styled"

const Form = () => {
    const [fieldDisabled, setFieldDisabled] = useState(true);
    // const [errorProcess, setErrorProcess] = useState(false);
    const [loadingProcess, setLoadingProcess] = useState(false);

    const navigate = useNavigate();

    const { createDocuments, loading: loadingCrate} = useInstallments.usePostDocumentsCreate();

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ConfigurationInstallmentsSchema)
    }); 


    const fetchPostCreate = async (installment) => {
        /* 
            - Função para gerar parcelas;
            - O installment é obj para gerar as parcelas;
        */
        try {
            
            let result = await createDocuments(installment);
    
            const {success, message } = result;
    
            if(success){
                console.log(`Parcela ${installment.installmentNumber} foi gerada`);
                
            }else{
                console.error('Error ao criar parcela: ', message);
                console.error('uid: ', installment.uid);
            }
        } catch (error) {
            console.error('Erro no fetchPostCreate: ', error.message);
        }

    };

    const handleOnSubmit = async (data) => {
        setLoadingProcess(true);

        try {
            console.log('iniciou');
            
            data.fees = FormatPercentageNumber(data.fees);
            data.interestAnnual = FormatPercentageNumber(data.interestAnnual);
            data.interestDaily = FormatPercentageNumber(data.interestDaily);
            data.interestMonthly = FormatPercentageNumber(data.interestMonthly);
            data.valueInstallment = FormatMoneyNumber(data.valueInstallment);
            data.firstDateInstallments = FormattedDate(data.firstDateInstallments);
            
            // Recuperar o documento do local storage
            const studentsUid = JSON.parse(localStorage.getItem('uisStudents')) || [];
            // Verificar se o documento foi encontrado
            if (!studentsUid) {
                console.log('Erro ao tenta busca Uid de estudantes');
                navigate('/notifications/error');
            }
            
            // Lista para armazenar todas as Promises
            const allPromises = [];

            studentsUid && studentsUid.forEach((uid) => {
    
                for (let i = 0; i < data.quantityInstallments; i++) {
                    // console.log('parcelas: ', i);
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
    
                    // installment && fetchPostCreate(installment)
                      // Adiciona a Promise de criação à lista
                    if (installment) {
                        allPromises.push(fetchPostCreate(installment));
                    }
                }
            })
            // Aguarda todas as Promises serem resolvidas
            await Promise.all(allPromises);
            reset()
            navigate('/notifications/create');
            console.log('notification create');
            
        } catch (error) {
            console.log('error: ', error.message);
            navigate('/notifications/error');
        }finally{
            setLoadingProcess(false)
            console.log('Finalizou');
        }
    }
    
    return (
        <>
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
            {
                loadingProcess &&
                    <LoadingOverlay>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                        <span >Gerando todas as parcelas...</span>
                    </LoadingOverlay> 
            }
            </S.Form>
        </>


    )
}

export default Form