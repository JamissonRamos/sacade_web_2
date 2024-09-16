import { Button } from 'react-bootstrap'
import { TextC } from '../../../../components/Typography'
import * as S from './styled'
import { Theme } from '../../../../theme'

const EndRegister = () => {

  return (
    <S.Container>
        <S.WrapTitleStepper>
          <TextC.Title level={1} >Pronto! Salve seu cadastro para finalizar o processo.</TextC.Title>
        </S.WrapTitleStepper>
        <S.Panels>
          <S.Left>
            <img src={Theme.ImgC.SecureLogin} alt="Logo de segurança"  />
          </S.Left>
          <S.Right>
            <Button
            type='submit'
            >
              Finalizar Cadastro
            </Button>
            <TextC.Body level={2} >
              Após finalizar o cadastro, seu status será definido como <strong> Visitante </strong> e será alterado pelo administrador do sistema.
            </TextC.Body>
          </S.Right>
        </S.Panels>
    </S.Container>
  )
}

export default EndRegister
