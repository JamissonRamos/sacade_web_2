import * as S from './styled'
import HeaderForm from "../../components/forms_components/header"
import BodyForm from '../../components/forms_components/body'
import { WrapPages } from '../../../../components/Wrappe/pages'

const FormCreateStudents = () => {

    return (
        <WrapPages>
            <S.Container> 
                <HeaderForm />
                <BodyForm />
            </S.Container>
        </WrapPages>
    )
}

export default FormCreateStudents