import * as S from './styled'
import { Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext/AuthContex';
import { useEffect, useState } from 'react';
// import ChangeRegistrationModal from '../modal'

const CardList = ({data}) => {
    const [filteredData, setFilteredData] = useState([]);
    //Recuperando o user logado para verificar 
    const { currentUser } = useAuth()
    
    const navigate = useNavigate();
    
    useEffect(() => {
    // Recuperar uidStudentPermanently do localStorage
    const storedUids  = JSON.parse(localStorage.getItem("uidStudentPermanently")) || [];

    console.log('storedUids', storedUids);
    
    // Filtra os dados
    const filtered = data && data.filter(obj => storedUids.includes(obj.uid));

    // Atualiza o estado com os dados filtrados
    setFilteredData(filtered);

    // recoverUidStudentsLocalStoragePermanently();
    }, [data]);
    
    const handleBadge = (status) => 
    {
        let bg
        switch (status) {
        case 'inativo':
            bg = "warning"
            break;
        case 'bloqueado ':
            bg = "danger"
            break;
        case 'ativo':
            bg = "success"
            break;
    
        default:
            bg = "primary"
            break;
        }
    
        return bg 
    }

    // Exclui os dados do localStorage
    const handleDeleteLocalStorage = () => {
        localStorage.removeItem('studentResponsible');
    }

    const handleShowFormUpdate = (uid) => { 
        handleDeleteLocalStorage();
        navigate('/students/form_update', { state: { uid: uid } });
    };

    return (
        <S.Container>
            
            {
                filteredData && filteredData.map(({uid, firstName, lastName, status}) => (

                    <S.WrapButton 
                        key={uid}
                        onClick={() => handleShowFormUpdate(uid)}>
                            
                            <S.Card>
                                <S.CircleFirstLetterNome>
                                    {firstName && firstName.charAt(0)}
                                </S.CircleFirstLetterNome>

                                <S.Name>
                                    {firstName + ' ' + lastName}
                                </S.Name>
                                <S.Status>
                                    <Badge bg={handleBadge(status)} text="light">
                                        {status}
                                    </Badge>
                                </S.Status>
                            </S.Card>

                    </S.WrapButton>


                ))
            }
        </S.Container>
    )
}

export default CardList