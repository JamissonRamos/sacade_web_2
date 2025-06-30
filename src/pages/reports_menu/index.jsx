import * as S from './styled'
import { WrapPages } from '../../components/Wrappe/pages'
import Header from './header'
import Body from './body'

import {DataItemMenu} from './dataItem'

const ReportsMenu = () => {

    const itensMenu = DataItemMenu || []

    return (
        <WrapPages>
            <S.Container>
                
                <Header />

                <Body ItemsMenu={itensMenu}/> 
            </S.Container>
        </WrapPages>
    )
}

export default ReportsMenu