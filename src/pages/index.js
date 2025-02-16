import  Home  from './home';
import Students from './students';
import FormCreateStudents from './students/forms/form_create';
import FormUpdateStudents from './students/forms/form_update';
import Users  from './users';
import FormUpdate from './users/form_update';
import Register from './register';
import ResponsibleStudents from './responsible_students';
import ResponsibleList from './responsible_students/responsibleList';
import FormCreateResponsible from './responsible_students/responsibleList/forms/create';
import FormUpdateResponsible from './responsible_students/responsibleList/forms/update';
import Payments from './payments';
import RegisterStudent from './register_student';
import FormsController from './register_student/forms';
import ChangePassword from './changePassword'
import UserLevel from './userLevel';
import Login from './login';
import NoticeAuthorization from './notice_authorization';
import Userblocked from './user_blocked';
import NotificationsCreate from './notifications/create';
import NotificationsError from './notifications/error';
import NotificationsUpdate from './notifications/update';
import NotificationsDelete from './notifications/delete';
import NotificationsStudentCreate from './notifications/students_create';
import NotificationsMaintenance from './notifications/maintenance';
import ConfigurationInstallments from './configuration_installments';
import GenerateInstallments from './generate_installments';
import SplashScreen from './splash_screen';
import CardListRegisterStudents from './register_student/cardListRegisterStudents';



export const Pages = {
    Home,
    Students,
    FormCreateStudents,
    FormUpdateStudents,
    Users,
    FormUpdate,
    Register,
    ResponsibleStudents,
    ResponsibleList,
    FormCreateResponsible,
    FormUpdateResponsible,
    Payments,
    RegisterStudent,
    CardListRegisterStudents,
    FormsController,
    ChangePassword,
    UserLevel,
    Login,
    NoticeAuthorization,
    Userblocked,
    NotificationsCreate,
    NotificationsStudentCreate,
    NotificationsError,
    NotificationsUpdate,
    NotificationsDelete,
    NotificationsMaintenance,
    ConfigurationInstallments,
    GenerateInstallments,
    SplashScreen
}