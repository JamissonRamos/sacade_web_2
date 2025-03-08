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

    // const labels = formattedData.map(item => item.label.replace(/_/g, ' e ') // Extrai as labels
    //                                             .replace(' e ', '\n')); // Quebra a linha em " e "

    const labels = formattedData.map((item) => 
        item.label.replace(/_/g, ' e ') // Substitui "_" por " e "
                    .replace(' e ', '\n') // Quebra a linha em " e "
    );

    const series = formattedData.map(item => item.value); // Extrai os valores
    const colors = formattedData.map(item => item.label === 'branca' ? Theme.Colors.grey100 : StyledBadgeColor(item.label).bg); // StyledBadgeColor(label) // Obter cores para o badge
    
    console.log('labels',labels);
    
      // Configurações do gráfico
    const options = {
        series: [{
            data: series
        }],
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function(chart, w, e) {
                // console.log(chart, w, e)
                }
            }
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '35%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: labels,
            
            labels: {
                style: {
                    colors: Theme.Colors.grey500,
                    fontSize: '8px'
                }
            }
        }
    };

    return (
        <S.Container>
            {/* <h4>Gráfico de Faixas</h4> */}
            <Chart
                options={options}
                series={options.series}
                type="bar"
                height={350}
                width='100%'
            />
        </S.Container>
    );
}

export default GraphicPizza