import * as S from './styled';
import { Theme } from '../../../../../theme';
import { Button, Row, Spinner } from 'react-bootstrap';

const FieldsButton = ({navigate, loading}) => {
    return (
        <>
            <Row className="mt-2 ">
                <S.WrapButtons>
                    <Button
                        variant="outline-danger"
                        onClick={() => navigate('/users')}
                    >
                        <Theme.Icons.MdClose />
                        <span>Cancelar</span>
                    </Button>

                    <Button
                        variant="success"
                        type='submit'
                        disabled={loading ? true : false}
                    >
                        { loading 
                            ?
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span > Atualizando... </span>
                                </>
                            :
                                <>
                                    <Theme.Icons.MdUpdate />
                                    <span>Atualizar</span>
                                </>
                        }
                    </Button>  

                </S.WrapButtons>
            </Row> 
        </>
    )
}

export default FieldsButton