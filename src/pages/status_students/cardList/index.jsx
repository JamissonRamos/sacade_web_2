import * as S from './styled';
import { useState } from 'react';

import {ListsStudent} from '../../../components/lists_custom/students';
import ChangeRegistrationModal from './modal';

const CardList = ({data, onUserUpdate}) => {
    const [showModal, setShowModal] = useState(false);
    const [dataUserModal, setDataUserModal] = useState(null);

    //Component de Lista
    const { ListPrimary } = ListsStudent;
    
    const handleShow = () => setShowModal(true);

    const handleClose = () => setShowModal(false);


    const handlePassDataModal = (uid) => {
        const filteredArray = data.find(item => item.uid === uid);
        const {firstName, lastName, status} = filteredArray;

        setDataUserModal({
            uid,
            fillName: firstName + " " + lastName,
            status
        })
        handleShow()
    }

    return (
        <S.Container> 
            {
                data && 
                    <ListPrimary 
                        data={data} 
                        navigateOnClick={handlePassDataModal}
                />
            }

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
