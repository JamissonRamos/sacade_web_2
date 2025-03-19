import { WrapPages } from '../../components/Wrappe/pages';
import Body from './components/body';
import Header from './components/header';
import * as S from './styled';

const Helps = () => {
    return (
        <WrapPages>
            <S.Container>

                <Header />

                <Body />

                <div>footer</div>
            
            </S.Container>
        </WrapPages>
    )
}

export default Helps

