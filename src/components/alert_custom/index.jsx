import AlertDanger from "./danger";
import AlertSuccess from "./success";

export const AlertCustom = ({variant, children, handleCloseAlert}) => {

switch (variant) {
    
    case 'success':
        return <AlertSuccess handleCloseAlert={handleCloseAlert}> {children} </AlertSuccess>;
    // case 'primary':
    //     return Primary;
    // case 'warning':
    //     return Warning;
    case 'danger':
        return <AlertDanger  handleCloseAlert={handleCloseAlert}> {children} </AlertDanger>
    // case 'info':
    //     return Danger;
    // case 'light':
    //     return Danger;
    // case 'dark':
    //     return Danger;
    default:
        return <AlertSuccess handleCloseAlert={handleCloseAlert}> {children} </AlertSuccess>;

}
}