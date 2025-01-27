
import { useLocation } from 'react-router-dom';

const FormsController = () => {
    const location = useLocation();  // Captura o UID da URL
    const { uid } = location.state || {};  // Captura o UID do estado de navegação

    //Verificar se aluno tem ficha;

    return (
        <div> FormsController aluno: {uid} </div>
    )
}

export default FormsController