import * as S from '../../styled';
import { Theme } from "../../../../../../theme";
import { TextC } from '../../../../../../components/Typography';
import { Spinner } from 'react-bootstrap';

const CardStudentsTotal = ({totalItem, loading}) => {

    return (

        <S.Card>  

            <S.WrapImg>
                <img src={Theme.ImgC.CardTotalAtrasadoMes} alt="Total Alunos"/>
            </S.WrapImg>

            <S.WrapText>

                <S.Title >
                    {
                        loading 
                        ?   <Spinner
                                variant='success'
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
                    <TextC.Body level={1}> Total de Alunos </TextC.Body>
                </S.SubTitle>

            </S.WrapText>
        </S.Card>
    )
}

export default CardStudentsTotal