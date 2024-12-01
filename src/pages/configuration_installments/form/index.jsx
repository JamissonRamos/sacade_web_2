import * as S from "./styled"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../validations/index'
import { Theme } from "../../../theme";
import { useConfigurationInstallments } from "../../../hooks/configuration_installments";
import { FormatPercentageNumber, FormatMoneyNumber, FormatNumberCurrency, FormatNumberPercentage } from "../scripts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Fields from "./fields"
import { Button, Spinner } from "react-bootstrap";

const Form = ({registered}) => {
    const [fieldDisabled, setFieldDisabled] = useState(true);
    /* 
        - False => Button create (Salva) 
        - True => Button update (Atualizar)
    */
    const [chooseButton, setChooseButton] = useState(false);

    //Verificar quando não tiver dados;
    const data = Array.isArray(registered) && registered.length > 0 ? registered[0] : null;
    const navigate = useNavigate();

    const {updateConfigurationInstallments, loading: loadingUpdate } = useConfigurationInstallments.usePostDocumentsUpdate();
    const {createConfigurationInstallments, loading: loadingCrate} = useConfigurationInstallments.usePostDocumentsCreate();

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ConfigurationInstallmentsSchema)
    }); 

    const handleFetchDocument = async () => {
        /* Função para alimentar os campos */
        let maskedValue = null;
        if(typeof data !== 'object' || data === null) return
        for(const [key, value] of Object.entries(data)){
            if(key === 'valueInstallment'){
                maskedValue = FormatNumberCurrency(value)
            }else if(key === 'fees' ){
                maskedValue = FormatNumberPercentage(value)
            }else if(key === 'interestDaily' ){
                maskedValue = FormatNumberPercentage(value)
            }else if(key === 'interestMonthly' ){
                maskedValue = FormatNumberPercentage(value)
            }else if(key === 'interestAnnual' ){
                maskedValue = FormatNumberPercentage(value)
            }else{
                maskedValue = value
            }
            setValue(key, maskedValue);
            //Liberar os campos
            setFieldDisabled(false);
            //Mudar o button para Update
            setChooseButton(true);
        }
    };

    useEffect(() => {
        handleFetchDocument()  // Chama a função ao renderizar o componente
    }, []);

    const handleOnSubmit = async (data) => {
        let result = null;

        data.fees = FormatPercentageNumber(data.fees);
        data.interestAnnual = FormatPercentageNumber(data.interestAnnual);
        data.interestDaily = FormatPercentageNumber(data.interestDaily);
        data.interestMonthly = FormatPercentageNumber(data.interestMonthly);
        data.valueInstallment = FormatMoneyNumber(data.valueInstallment);

        if(chooseButton){
            result = await updateConfigurationInstallments(data);
        }else{
            result = await createConfigurationInstallments(data);
        }

        const {success, message } = result;

        if(success){
            chooseButton 
                ? navigate('/notifications/update')
                : navigate('/notifications/create');
            
        }else{
            console.log('error: ', message);
            navigate('/notifications/error');
        }
        reset()
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
                    chooseButton 
                        ? <Button
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
                                    <Theme.Icons.MdSaveAlt />
                                    <span>Atualizar</span>
                                </>
                            } 
                        </Button> 
                        : <Button
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
                }

            </S.WrapButtons>
        </S.Form>
    )
}

export default Form