import * as S from './styled';
import { TextC } from '../../../../../components/Typography';
import { BarChart, Bar, ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Legend, Area, Line, Label, LabelList } from 'recharts';
import { Theme } from '../../../../../theme';
import { FormatToCurrency } from '../../../script';
import { Tooltip } from 'react-bootstrap';

const PaymentsGraphicMonth = (props) => {

    const data = [
        { name: "Janeiro", recebido: 670 },
        { name: "Fevereiro", recebido: 850 },
        { name: "Março", recebido: 920 },
        { name: "Abril", recebido: 1100 },
        { name: "Maio", recebido: 1300 },
        { name: "Junho", recebido: 1450 },
        { name: "Julho", recebido: 1600 },
        { name: "Agosto", recebido: 1750 },
        { name: "Setembro", recebido: 1800 },
        { name: "Outubro", recebido: 750 },
        { name: "Novembro", recebido: 900 },
        { name: "Dezembro", recebido: 1000 }
    ];

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
                    <YAxis dataKey="name" type="category" scale="auto" /> 
                    <Tooltip />
                    <Legend />
                    <Bar 
                        dataKey="recebido" 
                        barSize={26} 
                        fill="#413ea0" 
                        radius={[0, 4, 4, 0]}
                        >
                        <LabelList 
                            dataKey="recebido" 
                            position="centerTop" 
                            formatter={(value) => `${FormatToCurrency(value)}`}
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