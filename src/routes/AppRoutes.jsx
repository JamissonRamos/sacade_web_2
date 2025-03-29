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
    const isLoginPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/splashScreen";

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
                        <Route 
                            path='/splashScreen'
                            element={<Pages.SplashScreen />}
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
                                    // <ProtectedRoute page='Students'>
                                        <Pages.Students /> 
                                    // </ProtectedRoute>
                                } />
                                <Route path="/students/form_create" element={
                                    // <ProtectedRoute page='Students'>
                                        <Pages.FormCreateStudents /> 
                                    // </ProtectedRoute>
                                } />
                                <Route path="/students/form_update/:uid?" element={
                                    // <ProtectedRoute page='Students'>
                                        <Pages.FormUpdateStudents /> 
                                    // </ProtectedRoute>
                                } />
                                <Route path="/user" element={
                                    // <ProtectedRoute page='Users'>
                                        <Pages.FormUpdate /> 
                                    // </ProtectedRoute>
                                } />
                                <Route path="/responsibleStudents" element={
                                    <ProtectedRoute page='ResponsibleStudents'>
                                        <Pages.ResponsibleStudents /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/responsibleStudents/responsibleList/:uid?" element={
                                    // <ProtectedRoute page='ResponsibleStudents'>
                                        <Pages.ResponsibleList /> 
                                    // </ProtectedRoute>
                                } />
                                <Route path="/responsibleStudents/form_create" element={
                                    // <ProtectedRoute page='ResponsibleStudents'>
                                        <Pages.FormCreateResponsible /> 
                                    // </ProtectedRoute>
                                } />
                                <Route path="/responsibleStudents/form_update/:uid?" element={
                                    // <ProtectedRoute page='ResponsibleStudents'>
                                        <Pages.FormUpdateResponsible /> 
                                    // </ProtectedRoute>
                                } />

                                <Route path="/payments" element={
                                    <ProtectedRoute page='Payments'>
                                        {/* <Pages.NotificationsMaintenance /> */}
                                        <Pages.Payments /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/configurationInstallments" element={
                                    <ProtectedRoute page='Payments'>
                                        <Pages.ConfigurationInstallments /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/generateInstallments" element={
                                    <ProtectedRoute page='Payments'>
                                        {/* <Pages.NotificationsMaintenance /> */}
                                        <Pages.GenerateInstallments /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/updateInstallments" element={
                                    <ProtectedRoute page='Payments'>
                                        {/* <Pages.NotificationsMaintenance /> */}
                                        <Pages.UpdateInsllments /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/plotHistory" element={
                                    <ProtectedRoute page='Payments'>
                                        {/* <Pages.NotificationsMaintenance /> */}
                                        <Pages.PlotHistory /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/statusStudents" element={
                                    <ProtectedRoute page='StatusStudents'>
                                        {/* <Pages.NotificationsMaintenance />  */}
                                        <Pages.StatusStudents /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/registerStudent" element={
                                    <ProtectedRoute page='RegisterStudent'>
                                        {/* <Pages.NotificationsMaintenance />  */}
                                        <Pages.RegisterStudent /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/registerStudent/listRegisterStudents/:idStudent?" element={
                                    <ProtectedRoute page='RegisterStudent'>
                                        <Pages.CardListRegisterStudents /> 
                                    </ProtectedRoute>
                                } />
                                <Route path="/registerStudent/formsController/:uid?" element={
                                    <ProtectedRoute page='RegisterStudent'>
                                        <Pages.FormsController /> 
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
                                <Route path="/notifications/create/:url?" element={
                                    <Pages.NotificationsCreate /> 
                                } />
                                <Route path="/notifications/studentCreate/:adult?" element={
                                    <Pages.NotificationsStudentCreate /> 
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
                                <Route path="/notifications/generatedPlots" element={
                                    <Pages.NotificationsGeneratedPlots /> 
                                } />
                                <Route path="/helps" element={
                                    <Pages.Helps /> 
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

