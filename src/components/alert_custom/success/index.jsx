import { useEffect, useState } from 'react'
import * as S from './styled'
import { TextC } from '../../../components/Typography'
import { Theme } from '../../../theme'

const AlertSuccess = ({children, handleCloseAlert}) => {
    const [showAlert, setShowAlert] = useState(true)
    
    const handleOnclick = () => {
        handleCloseAlert();
        setShowAlert(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 5000); // Esconde o alerta após 5 segundos

        return () => {
            clearTimeout(timer)  
        } // Limpa o timer ao desmontar
    }, [showAlert]); // Executa sempre que showAlert mudar

    return (
    <>
        {
            showAlert && 
                <S.AlertCustom>
                    <S.Closse onClick={handleOnclick}>
                        { <Theme.Icons.MdClose  />}
                    </S.Closse>
                    <S.WrapContent>
                        <Theme.Icons.MdCheckCircleOutline/>
                        <TextC.Body level={2}>
                            {children}
                        </TextC.Body>  

                    </S.WrapContent>
                </S.AlertCustom>
        }
    </>
    )
}

export default AlertSuccess