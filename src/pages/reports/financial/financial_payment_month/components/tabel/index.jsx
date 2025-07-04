import * as S from "./styled";
import { Badge } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { ConverterFormatPayment, ConverterStatusMonthlyFee, FormatToCurrency } from "../../../script";

const TableCustom = (props) => {
    const { data, totalStudents } = props

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
                        <th className='text-center'>Pagamento</th>
                        <th className='text-center'>Pago</th>
                        <th className='text-center'>Forma</th>
                        <th className='text-center'>Status</th>
                    </tr>
                </thead>

                <tbody>
                    { 
                        data && data.map((item, i) => {
                            const {paymentDate, amountPaid, paymentMethod, installment} = item
                            const {statusPayment, student} = installment
                            const {firstName, lastName} = student

                            return (
                                <tr key={item.id}>
                                    <td className='text-center'>{i + 1}</td>
                                    <td>
                                        <S.WrapFullName>
                                            <span>{firstName} {lastName}</span>
                                        </S.WrapFullName>
                                    </td>
                                    <td className='text-center'>
                                        {paymentDate}
                                    </td>
                                    <td className='text-center'>
                                        {FormatToCurrency(amountPaid)}
                                    </td>
                                    <td className='text-center'>
                                        {ConverterFormatPayment(paymentMethod)}
                                    </td>
                                    <td className='text-center'>
                                        <S.WrapStatus>
                                            <Badge bg={handleStatusPayment(statusPayment)} text="light">
                                                {ConverterStatusMonthlyFee(statusPayment)}
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