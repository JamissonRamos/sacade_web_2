import * as S from "./styled";
import Table from 'react-bootstrap/Table';
import { FormatToCurrency } from "../../../script";
import { TextC } from "../../../../../../components/Typography";
import { Theme } from "../../../../../../theme";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TableCustom = (props) => {
    const { data, totalItemQuery } = props
    const [totalDueMonetary, setTotalDueMonetary] = useState(0);
    const [clsData] = useState(data || []);
    const navigate = useNavigate();

    useEffect(() => {
        if (!clsData || !Array.isArray(clsData)) return;
        let total = 0

        clsData.forEach((student) =>{
            const {overdueInstallments} = student;
            overdueInstallments.forEach((installment) => {
                const { valueInstallment, feesValueMonetary, interestAnnualValueMonetary, interestDailyValueMonetary, interestMonthlyValueMonetary, } = installment;
                const   totalInterest = 
                        feesValueMonetary +
                        interestAnnualValueMonetary +
                        interestDailyValueMonetary +
                        interestMonthlyValueMonetary;

                const subInstallment = valueInstallment + totalInterest;

                total += subInstallment;
            })
        })

        setTotalDueMonetary(total)

        
    }, [data, clsData]);

    if(totalItemQuery <= 0){
        return (
            <S.WrapNotice>
                <TextC.Title level={4}>Nenhuma Mensalidade</TextC.Title>
                <TextC.Headline level={1}>Não foi indentificdo nenhuma mensalidade em atraso para esse mês.</TextC.Headline>
                <S.WrapButton
                    onClick={() => navigate(-1)}
                >
                    <Theme.Icons.MdArrowBack />
                    <TextC.Label level={5}>Voltar</TextC.Label>
                </S.WrapButton>
            </S.WrapNotice>
        )  
    }

    return (
        <S.Container>
            <Table  hover responsive className='custom-table' >
                <thead>
                    <tr>
                        <th className='text-center hidle-boder-left'>#</th>
                        <th>Nome</th>
                        <th className='text-center'>Vencimento</th>
                        <th className='text-center'>Dias</th>
                        <th className='text-center'>Mensalidade</th>
                        <th className='text-center'>Multa e Juros</th>
                        <th className='text-center'>Total</th>
                    </tr>
                </thead>

                <tbody>
                    { 
                        data && data.map((students, i) => {
                            const {overdueInstallments, firstName, lastName } = students;

                            return overdueInstallments.map((installment) => {
                                const { dueDate, daysDelay, valueInstallment, feesValueMonetary, interestAnnualValueMonetary, interestDailyValueMonetary, interestMonthlyValueMonetary} = installment;
                                
                                const totalInterest = feesValueMonetary + interestAnnualValueMonetary + interestDailyValueMonetary + interestMonthlyValueMonetary
                                const subInstallment = valueInstallment + totalInterest;

                                return (
                                    <tr key={i}>
                                        <td className='text-center'>{i + 1}</td>

                                        <td>
                                            <S.WrapFullName>
                                                <span>{firstName} {lastName}</span>
                                            </S.WrapFullName>
                                        </td>

                                        <td className='text-center'>
                                            {dueDate}
                                        </td>

                                        <td className='text-center'>
                                            {daysDelay}
                                        </td>

                                        <td className='text-center'>
                                            {FormatToCurrency(valueInstallment)}
                                        </td>
                                        <td className='text-center'>
                                            {FormatToCurrency(totalInterest)}
                                        </td>
                                        <td className='text-center'>
                                            {FormatToCurrency(subInstallment)}
                                        </td>
    
                                    </tr>
                                )
                            })  
                        })
                    }
                </tbody>

                {
                    totalItemQuery > 0 &&
                    <tfoot>
                        <tr>
                            <th className='text-center '>Total</th>
                            <th  className='text-end py-3' >{totalItemQuery}</th>
                            <th  className='text-end py-3' ></th>
                            <th  className='text-end py-3' ></th>
                            <th  className='text-end py-3' ></th>
                            <th  className='text-end py-3' ></th>
                            <th  className='text-end py-3' >{FormatToCurrency(totalDueMonetary)}</th>
                        </tr>
                    </tfoot>
                }

            </Table> 
        </S.Container>
            
    )
}

export default TableCustom