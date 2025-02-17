import * as S from './styled'
import { Button, Spinner } from 'react-bootstrap'
import { TextC } from '../../../../../../components/Typography'
import { Theme } from '../../../../../../theme'
import { useNavigate } from 'react-router-dom'

const EndRegister = ({handleDeleteDataBody, checkForm, loading}) => {
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
                        checkForm ?  <span>Salvando...</span> : <span>Atualizando...</span>
                      }
                  </> 
                  : <>
                      {
                          checkForm 
                          ?
                            <>
                              <Theme.Icons.MdSaveAlt />
                              <span>Salvar</span>
                            </>
                          :
                            <>
                              <Theme.Icons.MdUpdate />
                              <span>Atualizar</span>
                          
                            </>
                        }
                    </>

              } 
            </Button>

          </S.WrapButtonContained>
          
          {
            !checkForm &&
              <S.WrapButtonContainedDanger>
                <Button
                  variant='danger'
                  disabled={loading ? true : false}
                  onClick={() => handleDeleteDataBody()}
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

                          <span>Excluindo...</span>
                      </> 
                      : <>
                          <Theme.Icons.MdDelete />
                          <span>Excluir</span>
                        </>

                  } 
                </Button>

              </S.WrapButtonContainedDanger>
          }

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
