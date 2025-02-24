import * as S from '../../styled';
import { Theme } from "../../../../../../theme";
import { TextC } from '../../../../../../components/Typography';
import { Spinner } from 'react-bootstrap';

const CardStudentsInactive = ({totalItem, loading}) => {

    return (

        <S.Card>  

            <S.WrapImg>
                <img src={Theme.ImgC.CardTotalAtrasadoMes} alt="Alunos Inativos"/>
            </S.WrapImg>

            <S.WrapText>

                <S.Title >
                    {
                        loading 
                        ?   <Spinner
                                variant='danger'
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
                    <TextC.Body level={1}>Total alunos Inativos </TextC.Body>
                </S.SubTitle>

            </S.WrapText>
        </S.Card>
    )
}

export default CardStudentsInactive