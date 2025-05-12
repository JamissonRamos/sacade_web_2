import * as S from './styled';
import { FormatNumberCurrency, ParseCurrencyToNumber } from "../../scripts"
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

    const formatCurrencyValueToNumber = (value) => {
        // Função para formatar o valor monetario em number
        if (value === 0) return "R$ 0,00";
        if (value === '') return "R$ 0,00";
        if (value == 'R$ NaN') return "R$ 0,00";
            
        const newValue = ParseCurrencyToNumber(value);

        return newValue;
    }   
    
    const handleChange = (event) => {
        // Função para lidar com a mudança de valor dos campos
        const { name, value } = event.target;
        let newValue;
        newValue = applicarMascara(value);
        setValue(name, newValue)
    };

    const handleBlur = (event) => {
        // Função para lidar com o evento de desfocar (blur) dos campos
        const { name, value } = event.target;

        const result = formatCurrencyValueToNumber(value);

        switch (name) {
            case 'installmentDiscount': 
                setValueDiscount(result);
                break;
            case 'installmentIncrease':
                setValueIncrease(result);
                break;
            case 'amountPaid':
                setValuePayments(result);
                break;
            default:        
                break;
        };
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