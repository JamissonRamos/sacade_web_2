import * as S from './styled';
import { TextC } from '../../../../../components/Typography';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Theme } from '../../../../../theme';
import { FormatToCurrency } from '../../../script';

const PaymentReceiptGraph = (props) => {
    const { resultsDelaysMonth, resultsPaymentReceiptGraph } = props;
    const { totalAmountDue } = resultsDelaysMonth;
    const { totalMonthlyFeesPaid, totalMonthlyFeesOutstanding } = resultsPaymentReceiptGraph;

    const valorTotalReceberMes = FormatToCurrency(totalAmountDue);

    const renderCustomizedLabel = ({cx,cy,midAngle,innerRadius,outerRadius,percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontSize: '14px', fontWeight: 'bold' }}
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const data = [
        { name: 'Pagamentos', value: totalMonthlyFeesPaid },
        { name: 'Receber', value: totalMonthlyFeesOutstanding },
    ];
    const COLORS = [Theme.Colors.green800, Theme.Colors.red600];
    
    return (

        <S.Container >
            <S.WrapTitle>
                <TextC.Title level={1}> Análise das Mensalidades do Mês </TextC.Title>
            </S.WrapTitle>
                <ResponsiveContainer width="100%" height={400} >
                    <PieChart 
                    >
                        <Pie
                            data={data}
                            cx={'50%'}
                            cy={'50%'}
                            innerRadius={'64%'}
                            outerRadius={'90%'}
                            paddingAngle={4}
                            dataKey="value"
                            label={renderCustomizedLabel}
                            labelLine={false} // Remove a linha que liga o label à fatia
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}

                        </Pie>
                        <Legend 
                            payload={data.map((item, index) => ({
                                value: `${item.name} (${item.value})`,
                                type: 'circle',
                                color: COLORS[index % COLORS.length],
                            }))}
                            formatter={(value, entry, index) => (
                                <span style={{ color: Theme.Colors.grey500, fontSize: '12px' }}>
                                    {index + 1}  {value}
                                </span>
                            )}
                        />

                        {/* Texto no centro do primeiro Pie */}
                        <text 
                            x={'50%'} 
                            y={'45%'} 
                            textAnchor="middle" 
                            dominantBaseline="middle" 
                            fill={Theme.Colors.grey500} 
                            style={{ fontSize: '14px', fontWeight: 'bold' }}
                            >
                                Total Receber {valorTotalReceberMes}
                        </text>
                    </PieChart>
                
                </ResponsiveContainer>
        </S.Container>
    )
}

export default PaymentReceiptGraph