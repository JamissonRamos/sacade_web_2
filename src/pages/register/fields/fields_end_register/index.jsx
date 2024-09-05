import { Button } from 'react-bootstrap'
import { TextC } from '../../../../components/Typography'
import * as S from './styled'
import { Theme } from '../../../../theme'


const EndRegister = () => {

  return (
    <S.Container>
        <S.WrapTitleStepper>
          <TextC.Headline level={1} >Pronto! Salve seu cadastro para finalizar o processo.</TextC.Headline>
        </S.WrapTitleStepper>

        <S.Panels>
          <S.Left>
            <img src={Theme.ImgC.SecureLogin} alt=""  />
          </S.Left>

          <S.Right>
            <Button
            >
              Finalizar Cadastro
            </Button>
            <TextC.Body level={2} >
              Após finalizar o cadastro, seu status será definido como visitante e será alterado pelo administrador do sistema.
            </TextC.Body>
          </S.Right>
        </S.Panels>
    </S.Container>

  )
}

export default EndRegister
