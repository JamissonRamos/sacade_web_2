import { StyledBadgeColor } from '../script';
import * as S from './styled';
import Chart from 'react-apexcharts';
import { Theme } from "../../../../../theme";

const GraphicPizza = ({data}) => {

    console.log('data', data);
     // Transformar o objeto em um array de objetos com label e value
    const formattedData = Object.entries(data).map(([label, value]) => ({
        label,
        value
    }));

    const labels = formattedData.map(item => item.label.replace(/_/g, ' e ')); // Extrai as labels
    const series = formattedData.map(item => item.value); // Extrai os valores
    const colors = formattedData.map(item => item.label === 'branca' ? Theme.Colors.grey100 : StyledBadgeColor(item.label).bg); // StyledBadgeColor(label) // Obter cores para o badge

    console.log('labels', labels);
    console.log('colors', colors);
    
      // Configurações do gráfico
    const options = {
        chart: {
            type: 'pie',
        },
        labels: labels, 
        colors: colors, 
        responsive: [{
            breakpoint: 1440,
            options: {
                chart: {
                    width: 400
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    return (
        <S.Container>
            {/* <h4>Gráfico de Faixas</h4> */}
            <Chart
                options={options}
                series={series}
                type="pie"
                width="300"
                height="300"
            />
        </S.Container>
    );
}

export default GraphicPizza