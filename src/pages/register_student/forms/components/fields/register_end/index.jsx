import * as S from './styled'
import { Button, Spinner } from 'react-bootstrap'
import { Theme } from '../../../../../../theme'
import { useNavigate } from 'react-router-dom'

const EndRegister = ({handleShowModalDelete, checkForm, loadingCreate, loadingUpdate, loadingDelete }) => {
  const navigate = useNavigate();

  const handleOnClickCancel = () => {
    //localStorage.removeItem('currentHistory');
    navigate(-1)

  }
  return (
    <S.Container>
      <S.SectionPrime>
        {
          !checkForm &&
            <S.WrapButtonContainedDanger>
              <Button
                variant='danger'
                disabled={loadingDelete ? true : false}
                onClick={() => handleShowModalDelete()}
              >
                { loadingDelete 
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
      </S.SectionPrime>

      <S.SectionSecondary>
      <S.WrapButtonOutline>
            <Button
              variant="outline-danger" 
              onClick={() => handleOnClickCancel()}
            >
              <Theme.Icons.MdCancel />
              <span>Cancelar</span>
            </Button>
            
            
          </S.WrapButtonOutline>

          <S.WrapButtonContained>
            <Button
              variant='success'
              type='submit'
              disabled={loadingUpdate || loadingCreate ? true : false}
            >
              { loadingUpdate || loadingCreate
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
      </S.SectionSecondary>


    </S.Container>
  )
}

export default EndRegister
