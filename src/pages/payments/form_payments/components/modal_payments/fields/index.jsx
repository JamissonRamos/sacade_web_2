import { FormatNumberCurrency, ParseCurrencyToNumber } from "../../../../scripts"
import RowFirst from "./components/row_first"
import RowSecond from "./components/row_second"
import RowThird from "./components/row_third"

const Fields = (props) => {
    const { register, errors, setValue, setValueDiscount, setValueIncrease, setValuePayments } = props

    const applicarMascara = (field, value) => {
        // Função para aplicar a máscara de moeda
        if (value === 0) return
        if (value === '') return
        if (value === 'R$ NaN') return "R$ 0,00";
        const newValue = FormatNumberCurrency(value)
        setValue(field, newValue)
    };

    const formatCurrencyValueToNumber = (field, value) => {
        // Função para formatar o valor monetario em number
        if (value === 0) return 0
        if (value === '') return 0
        if (value === 'R$ NaN') return "R$ 0,00";

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

        switch (name) {
            case 'installmentDiscount':
                applicarMascara(name, value);
                break;
            case 'installmentIncrease':
                applicarMascara(name, value);
                break;
            case 'amountPaid':
                applicarMascara(name, value);
                break;
            default:
                break;
        }
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
        <>
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
        </>
    )
}

export default Fields