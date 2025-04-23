import * as S from './styled'
import Body from './body'
import Header from './header'

const ModalPayments = (props) => {
    const { showModal, handleClose } = props


    return (
        <S.Container>
            <S.Content>
                <Header /> 
                <Body />
                <div>Footer</div>
            </S.Content>
        </S.Container>
    )
}

export default ModalPayments