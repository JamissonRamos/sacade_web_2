import { ButtonsC } from '../../components/buttons'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      login
      <ButtonsC.ButtonCustom onClick={() => navigate(`/register`)}> Novo Users </ButtonsC.ButtonCustom>
    </div>
  )
}

export default Login