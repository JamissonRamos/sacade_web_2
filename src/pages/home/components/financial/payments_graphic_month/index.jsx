import * as S from './styled';
import { Bar, ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Legend, LabelList } from 'recharts';
import { Theme } from '../../../../../theme';
import { FormatToCurrency } from '../../../script';
import { Tooltip } from 'react-bootstrap';

const PaymentsGraphicMonth = (props) => {
    const { resultAllPaymentsPerYear } = props;
    const { allPaymentsPerMonth: data } = resultAllPaymentsPerYear;

    return (
        <S.Container> 
            <ResponsiveContainer width="100%" height={600} >
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        bottom: 20,
                        left: 30,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey='month' type="category" scale="auto" /> 
                    <Tooltip />
                    <Legend />
                    <Bar 
                        dataKey="total"
                        barSize={26} 
                        fill="#413ea0" 
                        radius={[0, 4, 4, 0]}
                    >
                        <LabelList 
                            dataKey="total" 
                            position="centerTop" 
                            formatter={(value) => value > 0 ? FormatToCurrency(value) : '' }
                            style={{
                                fill: Theme.Colors.grey100,
                                fontSize: 10,
                            }}
                            
                        />
                    </Bar>
                </ComposedChart>
            </ResponsiveContainer>
        </S.Container>
    )       
}

export default PaymentsGraphicMonth