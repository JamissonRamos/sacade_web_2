import { TextC } from '../../../../components/Typography';
import { Theme } from '../../../../theme';
import * as S from './styled';

const Header = () => {
    
    return (
        <S.Header>
            <S.WrapTitle>
                <Theme.Icons.FaMoneyCheckAlt />
                <TextC.Title level={4}> Lista das Parcelas </TextC.Title>
            </S.WrapTitle>

            <S.WrapSubTitle>
                <S.WrapError
                    $error={true}
                >
                    <Theme.Icons.MdClose />
                    <TextC.Body level={2}> 
                        As parcelas com este ícone não foram geradas.
                    </TextC.Body>
                </S.WrapError>

                <S.WrapError>
                    <Theme.Icons.MdCheck 
                        $error={false}
                    />
                    <TextC.Body level={2}> 
                        As parcelas com este ícone foram geradas com sucesso. 
                    </TextC.Body>
                </S.WrapError>





            </S.WrapSubTitle>

        </S.Header>
    )
}

export default Header