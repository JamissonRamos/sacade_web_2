import * as S from './styled'
import { TextC } from '../../components/Typography';
import { Alert, Button, Form } from 'react-bootstrap';
import { Theme } from '../../theme';
import { useNavigate } from 'react-router-dom';
import { useStepper } from '../../hooks/use_stepper/useStepper';
import { FieldUsers } from './fields';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../validations/index'
import { unMask } from 'remask';
import { useUsers } from '../../hooks/users';
import { FormattedDate } from './scripts';
import { useSearchCep } from '../../services/cep';

const Register = () => {

  const navigate = useNavigate();

  const { createUser, isLoadingCreate, errorCreate } = useUsers.useCreate();
  const {fetchCep, isLoading: loadingCep } = useSearchCep();

  const { register, handleSubmit, setValue, reset, getValues, formState:{ errors } } = useForm({
    resolver: yupResolver(Validations.UserSchema)
  }); 

    //Contas os erro e mostra se tiver algum em qualquer form 
    const errorCount = Object.keys(errors).length;

  const handleOnClickCep = async (value) => {

    if (!value) return{success: false, message: "Cep não foi fornecido."}
    if (value.length <= 8) return{success: false, message: "  ."}

    const response = await fetchCep(value); // Chama a função do script e aguarda a resposta

    const { success, data, message} = response;
    
    if (success) {
        // Atualiza os valores dos campos com os dados recebidos  
        setValue('logadouro', data.logadouro);
        setValue('neighborhood', data.neighborhood);
        setValue('city', data.city);
        setValue('federativeUnit', data.federativeUnit);
        return{success: true};
    } else { 
        return{success: false, message: message};
    }
  };

  const onSubmitForm = async (data) => { 
    
    changeStep(currentStep + 1)

    if(currentStep + 1 === formFields.length){

      data.phoneUsers = unMask(data.phoneUsers);
      data.birthDate = FormattedDate(data.birthDate);
      data.cep = unMask(data.cep);
      data.status = "Visitante";
      data.statusActive = false;
      delete data.confirmPassword;
      
      let result;
      result = await createUser(data);

      if (result.success) {
          navigate(`/`)
      }      
    }
  }   

  //Components para renderizar os components de campo do form, deve ser passado no fim
  const formFields = [
    <FieldUsers.DataUser 
      key={'DataUser'} 
      register={register} setValue={setValue} getValues={getValues} reset={reset}  errors={errors} />,
  
    <FieldUsers.Address 
      key={'Address'} 
      register={register} 
      setValue={setValue} 
      getValues={getValues} 
      reset={reset} 
      errors={errors} 
      handleOnClickCep={handleOnClickCep} 
      loadingCep={loadingCep}/>,

    <FieldUsers.EndRegister key={'EndRegister'} isLoadingCreate={isLoadingCreate}/>
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useStepper(formFields)

  return (
    <S.Container>
      {
        errorCreate && <Alert variant={'danger'}> {errorCreate} </Alert>
      }
      <S.WrapPages>
        <S.HeaderPage>
          <TextC.Headline level={3}>Cadastrar Usuário</TextC.Headline>
          <S.WrapTextInfo>
            <TextC.Body level={2}>Vamos registrar um novo usuário. Lembre-se: se você já tem um cadastro, pode fazer o seu login.</TextC.Body>
          </S.WrapTextInfo>
          <S.WrapButtonHeader>
            <Button  
              variant="warning"
              onClick={() => navigate(`/login`)}
            >   
              <Theme.Icons.MdLock />
              <span> Fazer Login </span>
            </Button>
          </S.WrapButtonHeader>
          <S.WrapImg>
            <img src={Theme.ImgC.SecurityRemoveBg} alt="Logo de Segurança"  />
          </S.WrapImg>
        </S.HeaderPage>
        <S.BodyPage>
          <Form onSubmit={handleSubmit(onSubmitForm)}>

            <S.FormFields>
              { currentComponent }
            </S.FormFields>

            <S.WrapFooterBody>

              <S.WrapButtonCounterPage>

                <S.ButtonsStep>
                  {
                    !isFirstStep &&
                      <Button
                        type="button"
                        variant="success"
                        size="sm"
                        onClick={() => changeStep(currentStep - 1)}>
                          <Theme.Icons.MdOutlineArrowBackIos />
                      </Button>
                  }
                  {
                    !isLastStep &&
                      <Button
                        type= "button" 
                        variant="success"
                        onClick={() => changeStep(currentStep + 1)}
                        size="sm">
                        
                          <Theme.Icons.MdOutlineArrowForwardIos />
                      </Button>
                  }
                </S.ButtonsStep>

                <S.CounterPage>
                  <TextC.Label level={5}>
                    {currentStep + 1}/{formFields.length}
                  </TextC.Label>
                </S.CounterPage>

              </S.WrapButtonCounterPage>

              {
                  errorCount > 0 ? 
                  <S.ErrorCount>
                      {'Foram detectados erros no cadastro: ' + errorCount}
                  </S.ErrorCount> : null
              }
            </S.WrapFooterBody>
            
          </Form>
        </S.BodyPage>
      </S.WrapPages>
    </S.Container>
  )
}

export default Register