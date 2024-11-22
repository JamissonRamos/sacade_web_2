import * as S from './styled'
import { WrapPages } from "../../../../../components/Wrappe/pages"
import { useLocation } from 'react-router-dom';
// import HeaderForm from './components/heade'
// import BodyForm from './components/body'

const FormUpdateResponsible = () => {
    const location = useLocation();  // Captura o UID da URL
    const { uid } = location.state || {};  // Captura o UID do estado de navegação

    console.log('uid', uid);
    
    return (
        <WrapPages>
            <S.Container>
                FormUpdateResponsible 
                {/* <HeaderForm /> */}
                {/* <BodyForm /> */}
            </S.Container>
        </WrapPages>
    )
}

export default FormUpdateResponsible