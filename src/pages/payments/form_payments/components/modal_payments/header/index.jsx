import * as S from './styled'
import { TextC } from '../../../../../../components/Typography'

const Header = ({data}) => {
    const { formattedSubTotal, formattedTotalCalculated, formattedValueInstallment
    } = data
    return (
        <S.Container>
            <TextC.Display level={1} >Pagar Parcela</TextC.Display>
            <TextC.Body level={2} >Abaixo estão os dados da parcela.</TextC.Body>
            
            <S.WrapDataParcel>

                <S.WrapField>
                    <TextC.Body level={2} >Valor da Parcela</TextC.Body>
                    <TextC.Body level={2} > {formattedValueInstallment}</TextC.Body>
                </S.WrapField>

                {
                    formattedTotalCalculated !== 'R$ 0,00' 
                    ? (
                        <S.WrapField>
                            <TextC.Body level={2} >Valor Total:</TextC.Body>
                            <TextC.Body level={2} >{formattedValueInstallment}</TextC.Body>
                        </S.WrapField>
                    ) : null
                }
                
                <S.WrapField>
                    <TextC.Body level={2} >Total a ser pago:</TextC.Body>
                    <TextC.Body level={2} >{formattedSubTotal}</TextC.Body>
                </S.WrapField>
            </S.WrapDataParcel>
        </S.Container>
    )
}

export default Header