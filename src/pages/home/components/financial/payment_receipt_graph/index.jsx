import { useState } from 'react';
import * as S from './styled';
import ReactApexChart from 'react-apexcharts';
import { TextC } from '../../../../../components/Typography';

const PaymentReceiptGraph = () => {
    let labelParaReceber = 'Total Receber';
    let valorParaReceber = 'R$ 300,00';
    const [state, setState] = useState({
        series: [2, 30],
        options: {
            labels: ['Pagamentos', 'Receber'],
            chart: {
                type: 'donut',
            },
            responsive: [
                {
                    breakpoint: 925,
                    options: {
                        chart: {
                            width: 450,
                            height: 450,
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                },
                {
                    breakpoint: 768,
                    options: {
                        chart: {
                            width: 400,
                            height: 350,
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                },
                {
                    breakpoint: 575,
                    options: {
                        chart: {
                            width: 250,
                            height: 300,
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ],
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: labelParaReceber,
                                formatter: function () {
                                    return valorParaReceber;
                                }
                            }
                        }
                    }
                }
            }
        },
    });

    return (

        <S.Container>
            <S.WrapTitle>
                <TextC.Title level={1}> Informações de Pagamentos  </TextC.Title>
            </S.WrapTitle>
            <ReactApexChart 
                options={state.options} 
                series={state.series} 
                type="donut" 
                width='580'
                height='450'
            />
        </S.Container>
    )
}

export default PaymentReceiptGraph