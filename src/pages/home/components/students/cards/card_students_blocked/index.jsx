import * as S from '../styled';
import { Theme } from "../../../../../../theme";
import { TextC } from '../../../../../../components/Typography';
import { Spinner } from 'react-bootstrap';

const CardStudentsBlocked = ({totalItem, loading}) => {

    return (

        <S.Card>  

            <S.WrapImg>
                <img src={Theme.ImgC.CardTotalRecebidoMes} alt="Alunos Bloqueados"/>
            </S.WrapImg>

            <S.WrapText>

                <S.Title >
                    {
                        loading 
                        ?   <Spinner
                                variant='warning'
                                size="sm"
                                as="span"
                                animation="border"
                                role="status"
                                aria-hidden="true"
                            />
                        :   <TextC.Label level={4}>{totalItem}</TextC.Label>
                    }
                </S.Title>

                <S.SubTitle >
                    <TextC.Body level={1}>alunos Bloqueados </TextC.Body>
                </S.SubTitle>

            </S.WrapText>
        </S.Card>
    )
}

export default CardStudentsBlocked