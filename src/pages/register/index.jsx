import * as S from './styled'
import { ButtonsC } from '../../components/buttons'
import { useNavigate } from 'react-router-dom';
import { WrapPages } from '../../components/Wrappe/pages';
import { TextC } from '../../components/Typography';
import { Theme } from '../../theme';
import { Button, Form } from 'react-bootstrap';
import { FieldUsers } from './fields';
import { useStepper } from '../../hooks/use_stepper/useStepper';

const Register = () => {
  const navigate = useNavigate();
  const formFields = [
    <FieldUsers.DataUser key={'DataUser'}/>,
    <FieldUsers.Contact key={'Contact'}/>,
    <FieldUsers.Address key={'Address'}/>
  ]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useStepper(formFields)
  
  const handleSubmit = (e) =>{ 
    changeStep(currentStep + 1, e)
    // console.log(data);
  }

  return (
    <S.Container>
      <WrapPages>
        <S.HeaderPage>
          <TextC.Headline level={3}>Cadastrar Usuário</TextC.Headline>
          <S.WrapTextInfo>
            <TextC.Body level={2}>Vamos registrar um novo usuário. Lembre-se: se você já tem um cadastro, pode fazer o seu login.</TextC.Body>
          </S.WrapTextInfo>

          <S.WrapButtonHeader>
            <ButtonsC.ButtonCustom 
              color={Theme.Colors.green800}
              onClick={() => navigate(`/login`)}> 
                <span> Fazer Login </span>
            </ButtonsC.ButtonCustom>
          </S.WrapButtonHeader>
        </S.HeaderPage>

        <S.BodyPage>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <S.FormFields>
              { currentComponent }
            </S.FormFields>

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

              {!isLastStep ?
                  <Button
                    type="submit"
                    variant="success"
                    size="sm">
                      <Theme.Icons.MdOutlineArrowForwardIos />
                  </Button>
                :
                <div>
                  <Button
                    type="submit"
                    variant="success"
                    size="sm">
                      <span> Salvar Cadastro </span>
                      <Theme.Icons.MdSend />
                  </Button>
                </div>
              }
            </S.ButtonsStep>
          </Form>
        </S.BodyPage>

      </WrapPages>
    </S.Container>
  )
}

export default Register