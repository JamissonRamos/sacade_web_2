import { Spinner } from 'react-bootstrap'
import { TextC } from '../../../../../components/Typography'
import { Theme } from '../../../../../theme'
import * as S from './styled'

const FinancialCards = (props) => {
    const { loading } = props
    return (
        <S.Container>
            <S.WrapCards>

                <S.WrapCard $borderColor={Theme.Colors.green800}>
                    {
                        loading 
                        ?
                            <> 
                                <Spinner
                                    variant="success"
                                    as="span"
                                    animation="border"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span>Carregando os dados...</span>
                            </>
                        :
                            <>
                                <S.SectionHeader>
                                    <TextC.Title level={1}>Recebidos do Mês</TextC.Title>
                                </S.SectionHeader>

                                <S.SectionBody> 
                                    <TextC.Body level={3}>R$ 100,00</TextC.Body>
                                </S.SectionBody>

                                <S.SectionIconFloating $bgColor={Theme.Colors.green800}>
                                    <Theme.Icons.MdOutlineArrowUpward />
                                </S.SectionIconFloating>
                            
                            </>
                    }
                </S.WrapCard>

                <S.WrapCard $borderColor={Theme.Colors.red800}>
                    {
                        loading 
                        ?
                            <> 
                                <Spinner
                                    variant="danger"
                                    as="span"
                                    animation="border"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span>Carregando os dados...</span>
                            </>
                        :
                            <>
                                <S.SectionHeader>
                                    <TextC.Title level={1}>Atrasado do Mês</TextC.Title>
                                </S.SectionHeader>

                                <S.SectionBody> 
                                    <TextC.Body level={3}>R$ 100,00</TextC.Body>
                                </S.SectionBody>

                                <S.SectionIconFloating $bgColor={Theme.Colors.red800}>
                                    <Theme.Icons.MdOutlineArrowDownward />
                                </S.SectionIconFloating>

                            </>
                    }


                </S.WrapCard>

                <S.WrapCard $borderColor={Theme.Colors.yellow800}>
                    {
                        loading 
                        ?
                            <> 
                                <Spinner
                                    variant="warning"
                                    as="span"
                                    animation="border"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span>Carregando os dados...</span>
                            </>
                        :
                            <>
                                <S.SectionHeader>
                                    <TextC.Title level={1}>Atrasados do Ano</TextC.Title>
                                </S.SectionHeader>

                                <S.SectionBody> 
                                    <TextC.Body level={3}>R$ 100,00</TextC.Body>
                                </S.SectionBody>

                                <S.SectionIconFloating $bgColor={Theme.Colors.red800}>
                                    <Theme.Icons.MdOutlineArrowDownward />
                                </S.SectionIconFloating>
                            </>
                    }

                </S.WrapCard>

            </S.WrapCards>
        </S.Container>
    )
}

export default FinancialCards