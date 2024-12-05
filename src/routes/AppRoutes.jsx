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
                                <Route path="/students/form_create" element={
                                    <ProtectedRoute page='Students'>
                                        <Pages.FormCreateStudents /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/students/form_update/:uid?" element={
                                    <ProtectedRoute page='Students'>
                                        <Pages.FormUpdateStudents /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/users" element={
                                    <ProtectedRoute page='Users'>
                                        <Pages.Users /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/users/form_update/:uid?" element={
                                    <ProtectedRoute page='Users'>
                                        <Pages.FormUpdate /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/responsibleStudents" element={
                                    <ProtectedRoute page='ResponsibleStudents'>
                                        <Pages.ResponsibleStudents /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/responsibleStudents/responsibleList/:uid?" element={
                                    <ProtectedRoute page='ResponsibleStudents'>
                                        <Pages.ResponsibleList /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/responsibleStudents/form_create" element={
                                    <ProtectedRoute page='ResponsibleStudents'>
                                        <Pages.FormCreateResponsible /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/responsibleStudents/form_update/:uid?" element={
                                    <ProtectedRoute page='ResponsibleStudents'>
                                        <Pages.FormUpdateResponsible /> 
                                    </ProtectedRoute>
                                } />

                                <Route path="/payments" element={
                                    <ProtectedRoute page='Payments'>
                                        <Pages.Payments /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/configurationInstallments" element={
                                    <ProtectedRoute page='ConfigurationInstallments'>
                                        <Pages.ConfigurationInstallments /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/generateInstallments" element={
                                    <ProtectedRoute page='GenerateInstallments'>
                                        <Pages.GenerateInstallments /> 
                                    </ProtectedRoute>
                                } />

                                
                                <Route path="/changePassword" element={
                                    <ProtectedRoute page='ChangePassword'>
                                        <Pages.ChangePassword /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/userLevel" element={
                                    <ProtectedRoute page='UserLevel'>
                                        <Pages.UserLevel /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/noticeAuthorization" element={
                                    <Pages.NoticeAuthorization /> 
                                } />
                                <Route path="/userblocked" element={
                                    <Pages.Userblocked /> 
                                } />
                                <Route path="/notifications/create" element={
                                    <Pages.NotificationsCreate /> 
                                } />
                                <Route path="/notifications/error" element={
                                    <Pages.NotificationsError /> 
                                } />
                                <Route path="/notifications/update" element={
                                    <Pages.NotificationsUpdate /> 
                                } />
                                <Route path="/notifications/delete" element={
                                    <Pages.NotificationsDelete /> 
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

