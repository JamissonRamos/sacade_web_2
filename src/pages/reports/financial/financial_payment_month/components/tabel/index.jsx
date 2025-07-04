import * as S from "./styled";
import { Badge } from "react-bootstrap";
import { Theme } from "../../../../../../theme";
import Table from 'react-bootstrap/Table';
import BadgeCustomTrack from "../../../../../../components/badge_custom_track";
import { ConverterFormatPayment, ConverterStatusMonthlyFee, FormatToCurrency } from "../../../script";

const TableCustom = (props) => {
    const { data, totalStudents } = props
    console.log('data', data);  
    

    
    const handleBadge = (status) => 
    {
        let bg
        switch (status) {
            case 'ativo':
                bg = "success"
                break;
            case 'bloqueado':
                bg = "warning"
                break;
            case 'inativo':
                bg = "danger"
                break;

            default:
                bg = "primary"
                break;
        }
        return bg 
    }
    const handleStatusPayment = (status) => 
    {
        let bg
        switch (status) {
            case true:
                bg = "success"
                break;
            case false:
                bg = "danger"
                break;
            default:
                bg = "primary"
                break;
        }
        return bg 
    }
    
    return (
        <S.Container>
            <Table  hover responsive className='custom-table' >
                <thead>
                    <tr>
                        <th className='text-center hidle-boder-left'>#</th>
                        <th>Nome</th>
                        <th className='text-center'>Status Aluno</th>
                        <th className='text-center'>Pagamento</th>
                        <th className='text-center'>Pago</th>
                        <th className='text-center'>Forma</th>
                        <th className='text-center'>Status Mensalidade</th>
                    </tr>
                </thead>

                <tbody>
                    { 
                        data && data.map((item, i) => {
                            console.log(item);
                            const {paymentDate, amountPaid, paymentMethod, installment} = item
                            const {statusPayment, student} = installment
                            const {firstName, lastName, status} = student



                            return (
                                <tr key={item.id}>
                                    <td className='text-center'>{i + 1}</td>
                                    <td>
                                        <S.WrapFullName>
                                            <span>{firstName} {lastName}</span>
                                        </S.WrapFullName>
                                    </td>
                                    <td className='text-center'>
                                        <S.WrapStatus>                  
                                            <Badge bg={handleBadge(status)} text="light">
                                                <span>{status}</span>
                                            </Badge>
                                        </S.WrapStatus>
                                    </td>
                                    <td className='text-center'>
                                        <span> {paymentDate}</span>
                                    </td>
                                    <td className='text-center'>
                                        <span>{FormatToCurrency(amountPaid)}</span>
                                    </td>
                                    <td className='text-center'>
                                        <span>{ConverterFormatPayment(paymentMethod)}</span>
                                    </td>
                                    <td className='text-center'>
                                        <S.WrapStatus>
                                            <Badge bg={handleStatusPayment(statusPayment)} text="light">
                                                <span>{ConverterStatusMonthlyFee(statusPayment)}</span>
                                            </Badge>
                                        </S.WrapStatus>
                                    </td>


                                </tr>
                            )

                        })

                    }
                </tbody>

                {
                    totalStudents > 0 &&
                        <tfoot>
                            <tr>
                                <th className='text-center '>Total</th>
                                <th  className='text-end py-3' >{totalStudents}</th>
                            </tr>
                        </tfoot>
                }
            </Table> 
        </S.Container>
            
    )
}

export default TableCustom




// data && data.map((item, i) => {
// const {uidStudent, firstName, lastName, age, sex, status, studentHeight, studentWeight, degrees, range} = item;

// return (
// <tr key={uidStudent}>
// <td className='text-center'>{i + 1}</td>
// <td>
// <S.WrapFullName>
// <span>{firstName} {lastName}</span>
// </S.WrapFullName>
// </td>

// <td className='text-center'>
// <S.WrapAge $colorFont={age}>
// {age}
// {
// age > 17 ? <Theme.Icons.MdOutlineArrowUpward /> : <Theme.Icons.MdOutlineArrowDownward />
// }
// </S.WrapAge>
// </td>
// <td className='text-center'>
// <S.WrapSex>
// <S.WrapSexText>
// {sex === 'homem' ? 'H' : 'M'} 
// </S.WrapSexText>
// <S.WrapSexIcon $bgColor={sex}>
// {sex === 'homem' ? <Theme.Icons.FaMale /> : <Theme.Icons.FaFemale />}
// </S.WrapSexIcon>
// </S.WrapSex>
// </td>
// <td className='text-center'>
// <S.Status>                  
// <Badge bg={handleBadge(status)} text="light">
// <span>{status}</span>
// </Badge>
// </S.Status>
// </td>
// <td className='text-center'>
// <S.WrapHeightWeight>
// {studentHeight}
// <Theme.Icons.MdHeight />
// </S.WrapHeightWeight>
// </td>
// <td className='text-center'>
// <S.WrapHeightWeight>
// {studentWeight}
// <Theme.Icons.FaWeight />
// </S.WrapHeightWeight>
// </td>
// <td className='text-center'>{degrees}</td>   
// <td className='text-center'>
// <S.WrapRange>
// <BadgeCustomTrack track={range} />
// </S.WrapRange>

// </td>      
// </tr>
// )
// })