import * as S from './styled'
import { WrapPages } from "../../../../../components/Wrappe/pages"
import HeaderForm from './components/heade'
import BodyForm from './components/body'

const FormCreateResponsible = () => {

    return (
        <WrapPages>
            <S.Container> 
                <HeaderForm />
                <BodyForm />
            </S.Container>
        </WrapPages>
    )
}

export default FormCreateResponsible