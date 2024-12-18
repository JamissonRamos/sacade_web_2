import * as S from './styled'
import { Button, Spinner } from 'react-bootstrap'
import { TextC } from '../../../../../../components/Typography'
import { Theme } from '../../../../../../theme'
import { useNavigate } from 'react-router-dom'

const EndRegister = ({loadingStudents}) => {
      const navigate = useNavigate();
  return (
    <S.Container>
        <S.WrapTitleStepper>
          <TextC.Title level={1} > Pronto! Salve seu cadastro para finalizar o processo. </TextC.Title>
        </S.WrapTitleStepper>
        
        <S.Panels>
          <S.Left>
            <img src={Theme.ImgC.SecureLogin} alt="Logo de segurança"  />
          </S.Left>

          <S.Right>

            <Button
              variant='success'
              type='submit'
              disabled={loadingStudents ? true : false}
              //onClick={() => navigate('/notifications/studentCreate')}
            >
                { loadingStudents ?
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

          </S.Right>
        </S.Panels>
        
        
    </S.Container>
  )
}

export default EndRegister
