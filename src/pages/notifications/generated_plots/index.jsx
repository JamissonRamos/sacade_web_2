import * as S from './styled';
import { useLocation } from 'react-router-dom';
import Header from './header';
import Body from './body';
import Footer from './footer';
import { useEffect, useState } from 'react';


const NotificationsGeneratedPlots = () => {
    const [allInstallments, setAllInstallments] = useState([])
    const location = useLocation();
    const { url = '/', uid = '', valueButton = { value: 'Home', icon: 'MdHome' }, buttonNewRegister = true } = location.state || {};
    const { value: buttonValue = 'Default Value', icon: buttonIcon = 'Default Icon' } = valueButton;

    // Função para buscar dados do localStorage
    const getStoredInstallments = () => {
        const generatedInstallments = JSON.parse(localStorage.getItem("generatedInstallments")) || [];
        setAllInstallments([...generatedInstallments]);
    };

    // Função para limpar os dados do localStorage ao sair da página
    const clearStoredInstallments = () => {
        localStorage.removeItem("generatedInstallments");
        localStorage.removeItem("uisStudents");
        setAllInstallments([]);
    };


    useEffect(() => {
        getStoredInstallments();
    }, []);


    return (
        <S.Container>

            <S.Content>

                <Header />

                <Body allInstallments={allInstallments}/>

                <Footer 
                    url={url}
                    uid={uid}
                    buttonValue={buttonValue}
                    buttonIcon={buttonIcon}
                    buttonNewRegister={buttonNewRegister}
                    clearStoredInstallments={clearStoredInstallments}
                />
                
            </S.Content>

        </S.Container>
    )
}

export default NotificationsGeneratedPlots