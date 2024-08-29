import * as S from './styled'
import { MenuItem } from '../../../../constants/menuItem'
import Menu from '../../menu';
import { useState } from 'react';
import { ButtonsC } from '../../../buttons';
import { Theme } from '../../../../theme';
import { TextC } from '../../../Typography';

const Footer = ({showSidebar}) => {
    const [ showModalLogout, setShowModalLogout] = useState(false);
    const [loading, setLoading] = useState(false);
    // const { logout } = useAuth(); // Acessa a função logout
    // const navigate = useNavigate();

    const handleShowModal = () => {
        setShowModalLogout((prev) => !prev)
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            // Executa o logout
            //await logout();
           //setShowModal(false);
            // Limpa o localStorage
            //localStorage.clear();
            // Redireciona o usuário para a página de login
            //navigate("/login");

            setLoading(false)
            handleShowModal()
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
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
                    <S.WrapButtonModal $showSidebar={showSidebar}>
                        <ButtonsC.ButtonCustom 
                            $variant="outline"
                            color={Theme.Colors.red800}
                            onClick={() => handleShowModal()}
                        >
                            <Theme.Icons.MdCancel /> 
                            <TextC.Label level={2}>Cancelar</TextC.Label>
                        </ButtonsC.ButtonCustom>

                        <ButtonsC.ButtonCustom 
                            color={Theme.Colors.green800}
                            onClick={() => handleLogout()}
                            disabled={loading ? true : false}
                        >
                            <Theme.Icons.ImSwitch /> 
                            <TextC.Label level={2}>Quero siar</TextC.Label> 
                        </ButtonsC.ButtonCustom>
                    </S.WrapButtonModal>
                </S.Modal>
        }
        </S.Container>
    )
}

export default Footer