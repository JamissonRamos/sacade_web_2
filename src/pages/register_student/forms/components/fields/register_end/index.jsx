import * as S from './styled'
import { Button, Spinner } from 'react-bootstrap'
import { TextC } from '../../../../../../components/Typography'
import { Theme } from '../../../../../../theme'
import { useNavigate } from 'react-router-dom'

const EndRegister = ({checkForm, loading}) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      
      <S.SectionPrime>
        <TextC.Title level={1}> Pronto! Clique no botão para finalizar o processo. </TextC.Title>
      </S.SectionPrime>

      <S.SectionSecondary>

        <S.WrapButton>
          
          <S.WrapButtonContained>
            <Button
              variant='success'
              type='submit'
              disabled={loading ? true : false}
            >
                { loading 
                  ? <>
                      <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                      />

                      { 
                        checkForm ? <span>Atualizando...</span> : <span>Salvando...</span>
                      }
                  </> 
                  : <>
                      {
                          checkForm 
                          ?
                            <>
                              <Theme.Icons.MdUpdate />
                              <span>Atualizar</span>
                          
                            </>
                          :
                            <>
                              <Theme.Icons.MdSaveAlt />
                              <span>Salvar</span>
                            </>
                        }
                    </>

              } 
            </Button>

          </S.WrapButtonContained>
            
          <S.WrapButtonOutline>
          <Button
            variant="outline-danger" 
            onClick={() => navigate(-1)}
          >
            <Theme.Icons.MdCancel />
            <span>Cancelar</span>
          </Button>
            
            
          </S.WrapButtonOutline>
        
        </S.WrapButton>
      </S.SectionSecondary>
    </S.Container>
  )
}

export default EndRegister
