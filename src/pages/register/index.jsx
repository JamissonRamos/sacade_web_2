import * as S from './styled'
import { ButtonsC } from '../../components/buttons'
import { useNavigate } from 'react-router-dom';
import { WrapPages } from '../../components/Wrappe/pages';


const Register = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <WrapPages>
          Register
          <ButtonsC.ButtonCustom onClick={() => navigate(`/login`)}> Fazer Login </ButtonsC.ButtonCustom>
      </WrapPages>
    </S.Container>
  )
}

export default Register