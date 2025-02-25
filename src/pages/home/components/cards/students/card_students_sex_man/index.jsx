import * as S from '../../styled';
import { Theme } from "../../../../../../theme";
import { TextC } from '../../../../../../components/Typography';
import { Spinner } from 'react-bootstrap';

const CardStudentsSexMan = ({totalItem, loading}) => {

    return (

        <S.Card>  

            <S.WrapImg>
                <img src={Theme.ImgC.studentsMan} alt="Alunos Masculino"/>
            </S.WrapImg>

            <S.WrapText>

                <S.Title >
                    {
                        loading 
                        ?   <Spinner
                                variant='primary'
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
                    <TextC.Body level={1}> Sexo Masculino </TextC.Body>
                </S.SubTitle>

            </S.WrapText>
        </S.Card>
    )
}

export default CardStudentsSexMan