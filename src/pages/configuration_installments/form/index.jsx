import * as S from "./styled"
import Fields from "./fields"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../validations/index'
import { Button, Spinner } from "react-bootstrap";
import { Theme } from "../../../theme";
import { useConfigurationInstallments } from "../../../hooks/configuration_installments";
import { FormatPercentageNumber, FormatMoneyNumber } from "../scripts";

const Form = ({registered}) => {
    
    console.log('registered: ', registered);

    const {createConfigurationInstallments, loading: loadingCrate} = useConfigurationInstallments.usePostDocumentsCreate();

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ConfigurationInstallmentsSchema)
    }); 


    /* 
    
        - criar o useefect para alimenta os campos;

    */



    const handleOnSubmit = async (data) => {
        data.fees = FormatPercentageNumber(data.fees);
        data.interestAnnual = FormatPercentageNumber(data.interestAnnual);
        data.interestDaily = FormatPercentageNumber(data.interestDaily);
        data.interestMonthly = FormatPercentageNumber(data.interestMonthly);
        data.valueInstallment = FormatMoneyNumber(data.valueInstallment);

        const result = await createConfigurationInstallments(data);
        const {success, message } = result;

        if(success){
            console.log('Deu certo');
            
        }else{
            console.log('error: ', message);
            
        }
        console.log(data);
        
    }
    return (
        <S.Form onSubmit={handleSubmit(handleOnSubmit)} >
            <Fields 
                register={register}
                setValue={setValue}
                getValues={getValues}
                errors={errors}
            />

            <S.WrapButtons>
                <Button
                    variant="outline-danger"
                    onClick={() => console.log(-1)}
                >
                    <Theme.Icons.MdClose />
                    <span>Cancelar</span>
                </Button>  

                <Button
                    variant="success"
                    type='submit'
                    // disabled={loadingCrate ? true : false}
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

            </S.WrapButtons>
        </S.Form>
    )
}

export default Form