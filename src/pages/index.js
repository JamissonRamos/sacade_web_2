import  Home  from './home';
import Students from './students';
import FormCreateStudents from './students/forms/form_create';
import FormUpdateStudents from './students/forms/form_update';
import FormUpdate from './user';
import Register from './register';
import ResponsibleStudents from './responsible_students';
import ResponsibleList from './responsible_students/responsibleList';
import FormCreateResponsible from './responsible_students/responsibleList/forms/create';
import FormUpdateResponsible from './responsible_students/responsibleList/forms/update';

import MonthlyFees from './monthly_fees';
import MonthlyFeeDetails from './monthly_fee_details';

import ConfigurationInstallments from './configuration_installments';
import GenerateInstallments from './generate_installments';
import UpdateInsllments from './update_installments';
import FormUpdateInstallment from './update_installments/form_update';
import PlotHistory from './plot_history';
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
import NotificationsGeneratedPlots from './notifications/generated_plots';
import NotificationsMonthlyPayment from './notifications/monthly_payment';
import SplashScreen from './splash_screen';
import CardListRegisterStudents from './register_student/cardListRegisterStudents';
import StatusStudents from './status_students';
import Helps from './helps';
import MonthlyPayment from './monthly_payment';
import ReportStudents from './reports/students';
import ReportCurrentStudentTracks from './reports/tracks/current_student_tracks';
import ReportsMenu from './reports_menu';
import FinancialPaymentMonth from './reports/financial/financial_payment_month';

export const Pages = {
    Home,
    Students,
    FormCreateStudents,
    FormUpdateStudents,
    FormUpdate,
    Register,
    ResponsibleStudents,
    ResponsibleList,
    FormCreateResponsible,
    FormUpdateResponsible,
    MonthlyFees,
    MonthlyFeeDetails,
    MonthlyPayment,
    ConfigurationInstallments,
    GenerateInstallments,
    UpdateInsllments,
    FormUpdateInstallment,
    PlotHistory,
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
    NotificationsGeneratedPlots,
    NotificationsMonthlyPayment,
    SplashScreen,
    StatusStudents,
    Helps,
    ReportStudents,
    ReportsMenu,
    ReportCurrentStudentTracks,
    FinancialPaymentMonth
}