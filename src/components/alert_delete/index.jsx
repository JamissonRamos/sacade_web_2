import * as S from './styled'
import { Theme } from '../../theme'
import { TextC } from '../Typography'
import { Button } from 'react-bootstrap'

const DeleteData =   ({registeredDelete, handleDeleteData, handleShowDelete }) => {
    const {fullName } = registeredDelete;
    
    
    const handleDelete = async () => {
        handleDeleteData();
        handleShowDelete()
    }
    return (
        <>
            <S.AlertDelete>
            
                <S.Header>
                    <TextC.Title level='1' color={Theme.Colors.white800}> Excluir Cadastro </TextC.Title>
                </S.Header>
                <S.Body>
                    <S.WrapIcon>
                        <Theme.Icons.MdDelete/>
                    </S.WrapIcon>

                    <S.WrapTitles>
                        <TextC.Body level='3' >Você Tem Certeza ?</TextC.Body>
                        <TextC.Body level='1'>
                            Realmente deseja excluir este cadastro? Esta ação não pode ser desfeita.
                        </TextC.Body>
                        <TextC.Body level='5' >{fullName}</TextC.Body>
                    </S.WrapTitles>

                    <S.WrapButtons>
                        <S.WrapButton>
                            <Button 
                                variant={'outline-danger'}
                                onClick={handleShowDelete}
                            >
                                <span>Não, Cancelar</span>
                            </Button>
                        </S.WrapButton>
                        <S.WrapButton>
                            <Button  
                                variant="success"
                                onClick={handleDelete}
                            >
                                <span> Sim, Excluir Cadastro</span>
                            </Button>
                        </S.WrapButton>
                    </S.WrapButtons>

                </S.Body>
            </S.AlertDelete>
        </>
    )
}

export default DeleteData