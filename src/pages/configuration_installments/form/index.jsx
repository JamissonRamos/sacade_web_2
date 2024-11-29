import * as S from "./styled"
import Fields from "./fields"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../validations/index'
import { Button, Spinner } from "react-bootstrap";
import { Theme } from "../../../theme";

const Form = ({registered}) => {
    console.log('registered: ', registered);
    
    
    let loadingCrate = false;

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ConfigurationInstallmentsSchema)
    }); 

    const handleOnSubmit = (data) => {
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