import * as S from './styled'
import { MenuItem } from '../../../../constants/menuItem'
import Menu from '../../menu';
import { useState } from 'react';
import { ButtonsC } from '../../../buttons';
import { Theme } from '../../../../theme';

const Footer = ({showSidebar}) => {
    const [ showModalLogout, setShowModalLogout] = useState(false);
    // const { logout } = useAuth(); // Acessa a função logout
    // const navigate = useNavigate();

    const handleShowModal = () => {
        setShowModalLogout((prev) => !prev)
    }
    //Filtrando somente o sair
    const itemSair = MenuItem.find(item => item.title === "Sair");

    return (
        <S.Container>
        {
            itemSair &&
                <Menu
                    item={itemSair}
                    showSidebar={showSidebar}
                    handleShowModal={handleShowModal}
                />
        }

        {
            showModalLogout &&
                <S.Modal>
                    <S.WrapButtonModal>
                        <ButtonsC.ButtonCustom 
                            // $variant="outline" 
                            color={Theme.Colors.green800}
                            
                            onClick={() => console.log('Certo')}
                        >
                            <Theme.Icons.MdCancel /> 
                            Cancelar 
                        </ButtonsC.ButtonCustom>
                    </S.WrapButtonModal>
                </S.Modal>
        }
        </S.Container>
    )
}

export default Footer