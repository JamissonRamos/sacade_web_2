import { TextC } from '../../../../components/Typography';
import { Theme } from '../../../../theme';
import ListInstallment from '../ListInstallment';
import * as S from './styled';

const Body = ({allInstallments}) => {
    //console.log('allInstallments', allInstallments);
    



    return (
        <S.Body>
            
            <S.WrapCards>
                <ListInstallment 
                    data={allInstallments}
                />
            </S.WrapCards>
        </S.Body>
    )
}

export default Body