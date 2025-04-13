import { 
    OnlyNumber, /* Regra para deixa somente numero */
    FormatCurrency,
    ConvertMoneyNumber,
    FormatNumberPercentage,
    ConvertPercentageMoney,
    ConvertDate,
    ConvertNumberPercentage
} from "../../../scripts";

import { useEffect, useState } from "react";

import * as S from './styled'
import RowFirst from "./components/row_first"
import RowSecond from "./components/row_second"
import RowFourth from "./components/row_fourth"

const Fields = ({data, register, setValue, getValues, errors, fieldDisabled, setFieldDisabled}) => {
    const [interestValues, setInterestValues] = useState({
        fees: "",
        interestDaily: "",
        interestMonthly: "",
        interestAnnual: "",
    });

    const percentageToMonetaryValueConverter = (valueInstallment) => {
    /* 
        - Função para converter valor de porcentagem em valor nonetario
        - Aplicar valor monetario em cada campo depois que alterar valor do campo valor da parcela
    */
        const fields = ['fees', 'interestDaily', 'interestMonthly', 'interestAnnual']; //Nomes dos meu campos
        const updatedValues = { ...interestValues };

        fields.forEach((field) => {
            const fieldValue = getValues(field);
            if (fieldValue > 0) {
                updatedValues[field] = ConvertPercentageMoney(fieldValue, valueInstallment);
            }
        });
        setInterestValues(updatedValues);
    }

    const updateFildsValueInstallment = (valueInstallment) => {
        if(!valueInstallment) return
        const convertValue = ConvertMoneyNumber(valueInstallment)
        convertValue > 0 
            ? setFieldDisabled(false) 
            : setFieldDisabled(true)
            /* Alterar valors de juros e taxa caso altere o valor da parcela */
            percentageToMonetaryValueConverter(valueInstallment);
    }

    const handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let maskedValue = fieldValue;

        maskedValue = OnlyNumber(fieldValue);

        if(fieldName === 'valueInstallment') {
            maskedValue = FormatCurrency(fieldValue)
        }else{
            maskedValue = ConvertNumberPercentage(fieldValue);
        }

        setValue(fieldName, maskedValue)
    };

    const handleBlur = (e) => {
        const fieldValueInstallment = getValues('valueInstallment')
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        console.log(fieldName, fieldValue);

        const updatedValues = { ...interestValues };
        
        if(fieldName === 'valueInstallment'){
            updateFildsValueInstallment(fieldValueInstallment);
        }else{
            //Função para pegar valor de parcela e converter em valor juros monetário
            updatedValues[fieldName] = ConvertPercentageMoney(fieldValue, fieldValueInstallment);
            setInterestValues(updatedValues);
        }
    }
    
    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            updateFildsValueInstallment(getValues('valueInstallment'))
        }
    }, [data]);

    return (
        <S.Container>
            {/* Veirificado e Normalizado */}
            <RowFirst 
                register={register}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />

            <RowSecond 
                register={register}
                errors={errors}
                interestValues={interestValues}
                fieldDisabled={fieldDisabled}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />

            {/* <RowFourth 
                // register={register}
                // errors={errors}
                // interestValues={interestValues}
                // fieldDisabled={fieldDisabled}  
                // handleChange={handleChange}
                // handleBlur={handleBlur}
            /> */}
        </S.Container>
    )
}

export default Fields