import * as S from './styled'
import { Spinner } from 'react-bootstrap'
import GraphicRangeList from './components/graphic_range_list'

const StatisticsRegisterStudentsRangerList = ({data, loading}) => {

    // Soma todos os valores
    const total = Object.values(data).reduce((acc, value) => acc + value, 0);
    const countRanger = Object.keys(data).length;
    
    // Transformar o objeto em um array de objetos com label e value
    const formattedData = Object.entries(data).map(([label, value]) => ({
        label,
        value
    }));

    return (

        <S.Container>
            { 
                loading &&
                    <Spinner
                        variant='success'
                        size="sm"
                        as="span"
                        animation="border"
                        role="status"
                        aria-hidden="true"
                    />
            }

            <S.GraphicBar> 
                <GraphicRangeList 
                    data={formattedData}
                    countRanger={countRanger}
                /> 
            </S.GraphicBar>
            
            <S.GraphicPizza> Grafico de pizza </S.GraphicPizza>

        </S.Container>
    )
}

export default StatisticsRegisterStudentsRangerList