import * as S                   from './styled'
import ChangeRegistrationModal  from '../modal'
import ListPrimary              from '../../../components/lists_custom/users/list_primary'
import { useState }             from 'react'

const CardList = ({data, onUserUpdate}) => {
    const [showModal, setShowModal] = useState(false);
    const [dataUserModal, setDataUserModal] = useState(null);

    const handleClose = () => setShowModal(false);

    const handleShow = () => setShowModal(true);

    const handleOnClickCard = (uidUser) => {
        /*
            Função para pegar os dados do user selecionado e passar para o setDataUserModal;
            Abrir o modal para alterar os dados do user;
        */

        const user = data.find((user) => user.uid === uidUser);

        if(user){
            const {uid, firstName, lastName, status, statusActive} = user || false;
            setDataUserModal({uid, firstName, lastName, status, statusActive});
            handleShow();
        }else{
            console.log('Não foi encontrado user com o uid:', uidUser);
        }
    }

    return (    
        <S.Container>

            <ListPrimary 
                data={data}
                navigateOnClick={handleOnClickCard}
            />

            <ChangeRegistrationModal 
                data={dataUserModal} 
                showModal={showModal} 
                handleClose={handleClose} 
                onUserUpdate={onUserUpdate}
            />

        </S.Container>
    )
}

export default CardList