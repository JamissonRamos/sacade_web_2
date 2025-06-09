import { TextC } from '../../../../../components/Typography'
import { Theme } from '../../../../../theme'
import * as S from './styled'

const FinancialCards = () => {
    return (
        <S.Container>

            <S.WrapCards>

                <S.WrapCard borderColor={Theme.Colors.green800}>

                    <S.SectionHeader>
                        <TextC.Title level={1}>Recebidos do Mês</TextC.Title>
                    </S.SectionHeader>

                    <S.SectionBody> 
                        <TextC.Body level={3}>R$ 100,00</TextC.Body>
                    </S.SectionBody>

                    <S.SectionIconFloating bgColor={Theme.Colors.green800}>
                        <Theme.Icons.MdOutlineArrowUpward />
                    </S.SectionIconFloating>

                </S.WrapCard>

                <S.WrapCard borderColor={Theme.Colors.red800}>

                    <S.SectionHeader>
                        <TextC.Title level={1}>Atrasado do Mês</TextC.Title>
                    </S.SectionHeader>

                    <S.SectionBody> 
                        <TextC.Body level={3}>R$ 100,00</TextC.Body>
                    </S.SectionBody>

                    <S.SectionIconFloating bgColor={Theme.Colors.red800}>
                        <Theme.Icons.MdOutlineArrowDownward />
                    </S.SectionIconFloating>

                </S.WrapCard>

                <S.WrapCard borderColor={Theme.Colors.yellow800}>

                    <S.SectionHeader>
                        <TextC.Title level={1}>Atrasados do Ano</TextC.Title>
                    </S.SectionHeader>

                    <S.SectionBody> 
                        <TextC.Body level={3}>R$ 100,00</TextC.Body>
                    </S.SectionBody>

                    <S.SectionIconFloating bgColor={Theme.Colors.red800}>
                        <Theme.Icons.MdOutlineArrowDownward />
                    </S.SectionIconFloating>

                </S.WrapCard>

            </S.WrapCards>

        </S.Container>
    )
}

export default FinancialCards