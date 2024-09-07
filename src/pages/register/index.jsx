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

const Register = () => {
  // const {handleSubmit} = useForm({
  //   resolver: yupResolver(Validations.UserSchema)
  // })
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(Validations.UserSchema)
  }); // Certifique-se de que isso está correto

  const navigate = useNavigate();
  const formFields = [
    <FieldUsers.DataUser key={'DataUser'} register={register} errors={errors} />,
    <FieldUsers.Address key={'Address'} register={register} errors={errors} />,
    <FieldUsers.EndRegister key={'EndRegister'}/>
  ]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useStepper(formFields)

  const onSubmitForm = (data) => { 
    console.log(currentStep);
    changeStep(currentStep + 1)
    console.log(data);

    /* 
      - Na hora de passar coloca o status do user como visitante;
    
    
    */
    
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
                    onClick={() => console.log('clicou')
                    }
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