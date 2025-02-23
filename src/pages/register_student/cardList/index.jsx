import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import ListPrimary from '../../../components/lists_custom/students/list_primary';

const CardList = ({data}) => {
    const navigate = useNavigate();

    const handleShowFormUpdate = (uid) => { 
        const filteredArray = data.find(item => item.uid === uid);
        const {firstName, lastName} = filteredArray;

        navigate(
            '/registerStudent/listRegisterStudents', 
            { 
                state: { idStudent: uid, 
                fullname: firstName + " " + lastName } 
            });
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