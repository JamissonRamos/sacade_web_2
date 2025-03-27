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
        const {uid, name, installmentNumber, dueDate, value } = installment;

        //console.log('installment', installment);
        
        let installmentObjAdd = {
            uid: uid,
            name: name,
            installmentNumber: installmentNumber,
            dueDate: dueDate,
            value: value,
            error: false // Inicializa como erro, muda para false se sucesso
        };

        try {
            
            ///let result = await createDocuments(installment);
    
            const result = {success: true, message: 'error teste' }
            const {success, message } = result;

            if(!success || uid === "8OlknLrraKECunVYffFF"){       
                installmentObjAdd.error = true;    
                console.error('Error ao criar parcela: ', message);
                console.error('uid: ', installment.uid);
            }
        } catch (error) {
            console.error('Erro no fetchPostCreate: ', error.message);
        }finally{
            // Atualiza o localStorage de forma segura
            const currentInstallments = JSON.parse(localStorage.getItem("generatedInstallments") || "[]");
            currentInstallments.push(installmentObjAdd);
            // Atualiza o localStorage com o novo array
            localStorage.setItem("generatedInstallments", JSON.stringify(currentInstallments));
        }
    };

    const handleOnSubmit = async (data) => {
        setLoadingProcess(true);

        try {
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

            studentsUid && studentsUid.forEach(({uid, name}) => {
                
                for (let i = 0; i < data.quantityInstallments; i++) {
                    let resultDueDate = 0;

                    // 1 loop sempre a data da parcela normal 2 loop em diante sempre colocar 30 dias
                    i === 0 
                        ? resultDueDate = data.firstDateInstallments
                        : resultDueDate = AddDaysToDate( data.firstDateInstallments, i)
    
                    const installment = {
                        uid,
                        name,
                        installmentNumber: `${i + 1}/${data.quantityInstallments}`,
                        dueDate: resultDueDate,
                        value: data.valueInstallment,
                        fees: data.fees,
                        interestAnnual: data.interestAnnual,
                        interestMonthly: data.interestMonthly,
                        interestDaily: data.interestDaily,
                    };

                    // Adiciona a Promise de criação à lista
                    
                    if (installment) {
                        allPromises.push(fetchPostCreate(installment));
                    }
                }
            })
            // Aguarda todas as Promises serem resolvidas
            await Promise.all(allPromises);
            reset()
            navigate('/notifications/generatedPlots');
            //Coloca dinamico a page de notificação, atualiação ou create
            const path = `/`;
            navigate(`/notifications/generatedPlots`, {
                state: {
                    url: path,
                    valueButton: {value: 'Home', icon: 'MdHome'},
                    buttonNewRegister: true,
                },
            });

            //console.log('Salvando');
            
        } catch (error) {
            console.log('error: ', error.message);
            navigate('/notifications/error');
        }finally{
            setLoadingProcess(false)
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
                        onClick={() =>  {localStorage.removeItem('uisStudents'), navigate('/')}}
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