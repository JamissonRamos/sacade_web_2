import { Spinner } from 'react-bootstrap';
import Fields from '../components/fields';
import TableCustom from '../components/tabel';
import * as S from './styled';
import { LoadingOverlay } from '../../../../../components/spinner/global/styled';

const Body = (props) => {
    const {loading, data} = props;
    const totalStudents = data.length || 0

    return (
        <S.Container>
            <Fields />

            {
                loading
                ?
                    <LoadingOverlay>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                        <span>Carregando os dados...</span>
                    </LoadingOverlay>
                :
                    <TableCustom 
                        data={data} 
                        totalStudents={totalStudents}
                    />
                
            }


        </S.Container>
    )
}

export default Body