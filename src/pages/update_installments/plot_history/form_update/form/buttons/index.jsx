import * as S from './styled';
import { Theme } from '../../../../../../theme';
import { Button, Spinner } from 'react-bootstrap';


const Buttons = (props) => {
    const {loadingUpdate, loadingDelete, buttonCancel, handleShowModalDelete} = props
    
    const handleLoading = (type) => {
        return (
            <>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                { type === 'delete' ?
                    <span > Excluindo... </span> :
                    <span > Atualizando... </span>
                }
            </>
        )
    }

    return (
        <S.Container>
            <S.WrapButtonDelete>
                <Button 
                    variant="danger"
                    onClick={handleShowModalDelete}
                    disabled={loadingDelete ? true : false}
                >
                    { 
                        loadingDelete 
                        ?   handleLoading('delete')
                        :   <>
                                <Theme.Icons.MdDelete />
                                <span>Excluir</span>
                            </>
                    }
                </Button>

            </S.WrapButtonDelete>

            <S.WrapButtonUpdateCancel>
                <Button 
                    variant="outline-danger"
                    onClick={buttonCancel}
                >
                    <Theme.Icons.MdClose />
                    <span>Cancelar</span>
                </Button>
                <Button 
                    variant="success"
                    type='submit'
                    disabled={loadingUpdate ? true : false}>
                { 
                    loadingUpdate 
                    ?  handleLoading('update')
                    :
                        <>
                            <Theme.Icons.MdUpdate />
                            <span>Atualizar</span>
                        </>
                } 
                </Button>
            </S.WrapButtonUpdateCancel>
        </S.Container>
    )
}

export default Buttons