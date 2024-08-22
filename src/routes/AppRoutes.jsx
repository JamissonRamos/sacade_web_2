//Hooks
import { Route, Routes } from 'react-router-dom';

// Pages
import { Pages } from '../pages';

const AppContent = () => {

    return (
    <>
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

        </>
    );
};

export default AppContent;

/* 
    1 = Criar regra para validar se user tem ou não permissão para o acesso da page;

*/
