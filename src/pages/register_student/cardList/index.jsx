import * as S           from './styled';
import ListPrimary      from '../../../components/lists_custom/students/list_primary';
import { useNavigate }  from 'react-router-dom';

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