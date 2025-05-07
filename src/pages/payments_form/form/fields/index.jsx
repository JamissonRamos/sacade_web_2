import * as S from './styled'
//import { FormatNumberCurrency, ParseCurrencyToNumber } from "../../../../scripts"
import RowFirst from "./components/row_first"
import RowSecond from "./components/row_second"
import RowThird from "./components/row_third"

const Fields = (props) => {
    const { register, errors, setValue, setValueDiscount, setValueIncrease, setValuePayments } = props

    const applicarMascara = (value) => {
        // Função para aplicar a máscara de moeda
        if (value === 0) return "R$ 0,00"
        if (value === '') return "R$ 0,00"
        if (value === 'R$ NaN') return 0;
        if (value === undefined) return ;

        // Remove todos os caracteres que não são dígitos
        const cleanedValue = value.replace(/\D/g, '');
        if(!cleanedValue) return "R$ 0,00";

        const newValue = FormatNumberCurrency(value)

        return newValue
    };

    const formatCurrencyValueToNumber = (field, value) => {
        // Função para formatar o valor monetario em number
        if (value === 0) return "R$ 0,00";
        if (value === '') return "R$ 0,00";
        if (value == 'R$ NaN') return "R$ 0,00";
            
        const newValue = ParseCurrencyToNumber(value);

        switch (field) {
            case 'installmentDiscount': 
                setValueDiscount(newValue);
                break;
            case 'installmentIncrease':
                setValueIncrease(newValue);
                break;
            case 'amountPaid':
                setValuePayments(newValue);
                break;
            default:        
                break;
        };
    }   
    
    const handleChange = (event) => {
        // Função para lidar com a mudança de valor dos campos
        const { name, value } = event.target;
        let newValue;

        switch (name) {
            case 'installmentDiscount':
                newValue = applicarMascara( value);
                break;
            case 'installmentIncrease':
                newValue = applicarMascara( value);
                break;
            case 'amountPaid':
                newValue = applicarMascara( value);
                break;
            default:
                break;
        }
        setValue(name, newValue)
    };

    const handleBlur = (event) => {
        // Função para lidar com o evento de desfocar (blur) dos campos
        const { name, value } = event.target;

        switch (name) {
            case 'installmentDiscount':
                formatCurrencyValueToNumber(name, value)
                break;
            case 'installmentIncrease':
                formatCurrencyValueToNumber(name, value)
                break;
            case 'amountPaid':
                formatCurrencyValueToNumber(name, value)
                break;
            default:
                break;
        }
    }

    return (
        <S.Container>
            <RowFirst 
                errors={errors}
                register={register}
                />
            <RowSecond 
                errors={errors}
                register={register}
                handleChange={handleChange}
                handleBlur={handleBlur}
                />
            <RowThird 
                errors={errors}
                register={register}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
        </S.Container>
    )
}

export default Fields