import * as S from './styled'
import { TextC } from '../../components/Typography';
import { Button, Form } from 'react-bootstrap';
import { Theme } from '../../theme';
import { useNavigate } from 'react-router-dom';
import { useStepper } from '../../hooks/use_stepper/useStepper';
import { FieldUsers } from './fields';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../validations/index'
import { unMask } from 'remask';

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, reset, getValues, formState:{ errors } } = useForm({
    resolver: yupResolver(Validations.UserSchema)
  }); 
  const formFields = [
    <FieldUsers.DataUser 
      key={'DataUser'} 
      register={register} setValue={setValue} getValues={getValues} reset={reset}  errors={errors} />,
    <FieldUsers.Address 
      key={'Address'} 
      register={register} setValue={setValue} getValues={getValues} reset={reset} errors={errors} />,
    <FieldUsers.EndRegister key={'EndRegister'} />
  ]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useStepper(formFields)

  const formattedDate = (birthDate) => {
    const newDate = new Date(birthDate);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = newDate.getFullYear();
    
    return `${day}/${month}/${year}`;

  }

  const onSubmitForm = (data) => { 
    console.log('Dentro do submit');
    changeStep(currentStep + 1)
    if(currentStep + 1 === formFields.length){
      data.phoneUsers = unMask(data.phoneUsers);
      data.birthDate = formattedDate(data.birthDate);
      data.cep = unMask(data.cep);
      data.status = "Visitante";
      console.log(data);
    }

  }

  return (
    <S.Container>
      <S.WrapPages>
        <S.HeaderPage>
          <TextC.Headline level={3}>Cadastrar Usuário</TextC.Headline>
          <S.WrapTextInfo>
            <TextC.Body level={2}>Vamos registrar um novo usuário. Lembre-se: se você já tem um cadastro, pode fazer o seu login.</TextC.Body>
          </S.WrapTextInfo>
          <S.WrapButtonHeader>
            <Button  
              variant="warning"
              onClick={() => navigate(`/login`)}> 
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
          <S.WrapButtonCounterPage>
            <S.ButtonsStep>
              {!isFirstStep &&
                <Button
                  type="button"
                  variant="success"
                  size="sm"
                  onClick={() => changeStep(currentStep - 1)}>
                    <Theme.Icons.MdOutlineArrowBackIos />
                </Button>
              }
              {!isLastStep &&
                  <Button
                    type="submit"
                    variant="success"
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
        </Form>
        </S.BodyPage>
      </S.WrapPages>
    </S.Container>
  )
}

export default Register