import * as S from './styled'
import { Button, Spinner } from 'react-bootstrap'
import { TextC } from '../../../../../../../components/Typography'
import { Theme } from '../../../../../../../theme'

const EndRegister = ({loadingStudents}) => {

    return (
      <S.Container>
        
        <S.SectionPrime>
          <TextC.Title level={1} > Pronto! Clique no botão para finalizar o processo. </TextC.Title>
        </S.SectionPrime>
  
        <S.SectionSecondary>
          <S.WrapButton>
            <Button
              variant='success'
              type='submit'
              disabled={loadingStudents ? true : false}
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
                      <span > Atualizando... </span>
                  </> :
                  <>
                      <Theme.Icons.MdUpdate />
                      <span>Atualizar</span>
                  </>
              } 
            </Button>
          </S.WrapButton>
        </S.SectionSecondary>
        
      </S.Container>
    )
}

export default EndRegister
