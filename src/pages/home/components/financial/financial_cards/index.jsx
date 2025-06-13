import { Spinner } from 'react-bootstrap'
import { TextC } from '../../../../../components/Typography'
import { Theme } from '../../../../../theme'
import * as S from './styled'
import { FormatToCurrency } from '../../../script'

const FinancialCards = (props) => {
    const { loading, resultsPayments, resultsDelaysMonth, resultsAllDelays } = props
    const { totalAmountDue, totalOverdueInstallments } = resultsDelaysMonth;
    const { allTotalAmountDue, allTotalOverdueInstallments} = resultsAllDelays;

    const { totalPaid, totalPayments  } = resultsPayments;
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
                            <S.SectionHeader $bgColor={Theme.Colors.green800}>
                                <TextC.Title level={1}> Recebimentos do Mês: {totalPayments}</TextC.Title>
                                <TextC.Label level={2}>Todos os pagamento realizados no mês</TextC.Label>
                            </S.SectionHeader>

                            <S.SectionBody> 
                                <TextC.Body level={3}> { FormatToCurrency(totalPaid) } </TextC.Body>
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
                            <S.SectionHeader $bgColor={Theme.Colors.red800}>
                                <TextC.Title level={1}> Atrasados do Mês: {totalOverdueInstallments}</TextC.Title>
                                <TextC.Label level={2}>Total de mensalidades Atrasdas do mês</TextC.Label>
                            </S.SectionHeader>

                            <S.SectionBody> 
                                <TextC.Body level={3}> {FormatToCurrency(totalAmountDue)} </TextC.Body>
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
                                <S.SectionHeader $bgColor={Theme.Colors.yellow800}>
                                    <TextC.Title level={1}> Total de Atrasos: {allTotalOverdueInstallments} </TextC.Title>
                                    <TextC.Label level={2}>Total de mensalidades vencidas</TextC.Label>

                                </S.SectionHeader>

                                <S.SectionBody> 
                                    <TextC.Body level={3}>{FormatToCurrency(allTotalAmountDue)}</TextC.Body>
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