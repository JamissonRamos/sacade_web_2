import * as S           from './styled';
import { useNavigate }  from 'react-router-dom';
import ListPrimary from '../../../components/lists_custom/students/list_primary';

const CardList = ({data}) => {
    const navigate = useNavigate();

    const handleShowFormUpdate = (uid) => { 
        navigate('/students/form_update', { state: { uid: uid } });
    };

    return (
        <S.Container> 
        {
            data && 
                <ListPrimary 
                    data={data} 
                    navigateOnClick={handleShowFormUpdate}
                />
        }
        </S.Container>
    )
}

export default CardList