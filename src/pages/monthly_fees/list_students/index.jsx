import * as S from './styled'
import { LoadingOverlay } from '../../../components/spinner/global/styled'
import ListPrimary from '../../../components/lists_custom/students/list_primary'
import { Spinner } from 'react-bootstrap'

const ListStudents = (props) => {
    const { registered, loading, handleNavegation } = props
    return (
        <>
            {
                loading &&
                    <LoadingOverlay>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Carregando os dados...</span>
                    </LoadingOverlay> 
            }

            <S.WrapList>
                <ListPrimary data={registered} navigateOnClick={handleNavegation} />
            </S.WrapList>
        </>
    )
}

export default ListStudents