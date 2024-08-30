//Hooks
import { Route, Routes, useLocation } from 'react-router-dom';

// Pages
import { Pages } from '../pages';
import Header from '../components/header';
import Sidebar from '../components/sideBar';

const AppContent = () => {
    //Verifica a url atual 
    const location = useLocation();
    const isLoginPage = location.pathname === "/login" || location.pathname === "/register";


    return (
        <>  
            {
                isLoginPage ?
                    <Routes>
                        <Route 
                            path='/login'
                            element={<Pages.Login />}
                            /> 
                            <Route 
                                    path='/register'
                                    element={<Pages.Register />}
                                /> 
                    </Routes>
                :
                    <>
                        <Header />
                        <Sidebar />
                        <main>
                            <Routes>
                                <Route 
                                    path='/'
                                    element={ < Pages.Home /> }
                                /> 
                                <Route 
                                    path='/students'
                                    element={<Pages.Students />}
                                /> 
                                <Route 
                                    path='/users'
                                    element={<Pages.Users />}
                                /> 
                               
                                <Route 
                                    path='/payments'
                                    element={<Pages.Payments />}
                                /> 
                                <Route 
                                    path='/changePassword'
                                    element={<Pages.ChangePassword />}
                                /> 
                            
                            </Routes>
                        </main>
                    </>

            }
        </>
    );
};

export default AppContent;

/* 
    1 = Criar regra para validar se user tem ou não permissão para o acesso da page;

*/
