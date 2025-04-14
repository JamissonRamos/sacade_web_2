/* eslint-disable react-hooks/exhaustive-deps */

import * as S from "./styled"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../../validations'
import { ConvertDate, ConvertNumberToCurrency, FormatNumberPercentage, FormattedDate } from "../../scripts";
import { useEffect, useState } from "react";

import Fields from "./fields"
import { LoadingOverlay } from "../../../../../components/spinner/global/styled";
import { Button, Spinner } from "react-bootstrap";
import { Theme } from "../../../../../theme";
import { useNavigate } from "react-router-dom";
import { FormatMoneyNumber, FormatPercentageNumber } from "../../../../configuration_installments/scripts";
import { useInstallments } from "../../../../../hooks/installments";

const Form = ({registered}) => {
    const [loading, setLoading] = useState(false);
    const [idDocument, setIdDocument] = useState(false);
    const [fieldDisabled, setFieldDisabled] = useState(true); // Habilitar e desabilitar campos
    const fields = ['fees', 'interestDaily', 'interestMonthly', 'interestAnnual']; //Nomes dos meu campos
    const navigate = useNavigate();

    const { updateInstallments, loading: loadingUpdate} = useInstallments.usePostDocumentsUpdate()

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.UpdateInstallmentsSchema)
    });

    const handleOnSubmit = async (data) => {
        data.dueDate = FormattedDate(data.dueDate);
        data.fees = FormatPercentageNumber(data.fees);
        data.interestAnnual = FormatPercentageNumber(data.interestAnnual);
        data.interestDaily = FormatPercentageNumber(data.interestDaily);
        data.interestMonthly = FormatPercentageNumber(data.interestMonthly);
        data.valueInstallment = FormatMoneyNumber(data.valueInstallment);
        data.uid = idDocument;
        console.log('data', data);

        const result = await updateInstallments(data);
        const { success, message} = result;

        if(success){
            console.log('Atualizado');
            
        }else{
            console.log('Error', message);
            
        }



    
    }

    //Loading
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
            setIdDocument(firstItem.id)
            setLoading(true); // dados carregados
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [registered])
    console.log('registered', registered);
    

    // Condicione a renderização do seu componente
    if (!loading ) {
        return (
            <LoadingOverlay>
                <Spinner
                    as="span"
                    animation="border"
                    role="status"
                />
                <span> Carregando os dados... </span>
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

                <S.WrapButtons>
                    <Button
                        variant="outline-danger"
                        onClick={()=>navigate(-1)}
                    >
                        <Theme.Icons.MdClose />
                        <span>Cancelar</span>
                    </Button> 

                    <Button
                        variant="success"
                        type='submit'
                        disabled={loadingUpdate ? true : false}
                    >
                        { 
                            loadingUpdate 
                            ?   <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                        <span > Atualizando... </span>
                                </> 
                            :
                                <>
                                    <Theme.Icons.MdUpdate />
                                    <span>Alterar Parcelas</span>
                                </>
                        } 
                    </Button> 
                </S.WrapButtons>
            </S.Form>
        </S.Container>
    )
}

export default Form