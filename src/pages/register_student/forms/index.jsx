
import { useLocation } from 'react-router-dom';

const FormsController = () => {
     const location = useLocation();  // Captura o UID da URL
        const { uid } = location.state || {};  // Captura o UID do estado de navegação
    

    return (
        <div>FormsController Aluno:{uid} </div>
    )
}

export default FormsController