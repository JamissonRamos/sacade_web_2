//Hooks
import { Route, Routes } from 'react-router-dom';

// Pages
import { Pages } from '../pages';
import Header from '../components/header';

const AppContent = () => {

    return (
    <>  
        <Header />
        <main>
            <Routes>
                <Route 
                    path='/'
                    element={ < Pages.Home /> }
                /> 
                <Route 
                    path='/users'
                    element={<Pages.Users />}
                /> 
            </Routes>
        </main>

        </>
    );
};

export default AppContent;

/* 
    1 = Criar regra para validar se user tem ou não permissão para o acesso da page;

*/
