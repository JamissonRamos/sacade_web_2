import { Spinner } from 'react-bootstrap'
import { TextC } from '../../../../../../components/Typography'

const StatisticsRegisterStudentsRangerList = ({loading}) => {

    return (

        <div>
            { 
                loading 
                ?   <Spinner
                        variant='success'
                        size="sm"
                        as="span"
                        animation="border"
                        role="status"
                        aria-hidden="true"
                    />
                :   <TextC.Label level={4}>555</TextC.Label>
            }
        </div>
    )
}

export default StatisticsRegisterStudentsRangerList