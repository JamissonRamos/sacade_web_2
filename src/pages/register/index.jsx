import { ButtonsC } from '../../components/buttons'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
        <ButtonsC.ButtonCustom onClick={() => navigate(`/login`)}> Fazer Login </ButtonsC.ButtonCustom>
      Register</div>
  )
}

export default Register