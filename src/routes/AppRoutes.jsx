//Hooks
import { Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
//Context
// import { useAuth } from '../contexts/authContext/AuthContex'
// Pages
import { Pages } from '../pages';
//Components
import Header from '../components/header';
import Sidebar from '../components/sideBar';

const AppContent = () => {
    // const { currentUser } = useAuth();

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
                                <Route path="/" element={
                                    <ProtectedRoute page='Home'>
                                        <Pages.Home /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/students" element={
                                    <ProtectedRoute page='Students'>
                                        <Pages.Students /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/users" element={
                                    <ProtectedRoute page='Users'>
                                        <Pages.Users /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/payments" element={
                                    <ProtectedRoute page='Payments'>
                                        <Pages.Payments /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/changePassword" element={
                                    <ProtectedRoute page='ChangePassword'>
                                        <Pages.ChangePassword /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/noticeAuthorization" element={
                                    <ProtectedRoute page='NoticeAuthorization'>
                                        <Pages.NoticeAuthorization /> 
                                    </ProtectedRoute>
                                } />
                            </Routes>
                        </main>
                    </> 
            }
        </>
    );
};

export default AppContent;

/* 
    - Ao carregar sistema mesmo sem usuario logado a home esta sendo carregado primeiro e depois da o bloqueio da page 
        ver como melhora isso;

*/

