import { TextC } from '../../../../../components/Typography'
import * as S from './styled'

const WrapAdult = ({isAdult}) => {

    const adult = isAdult || false

    return (

        <S.Container>
            {
                //False menor de idade, True Maior de idade
                adult 
                ? <TextC.Body level={2}> 
                        É possível adicionar responsáveis para este aluno. Assim, em caso de emergência, poderemos entrar em contato com essas pessoas.  
                    </TextC.Body>

                : <TextC.Body level={2}> 
                        O sistema identificou que o aluno cadastrado é menor de idade. Por isso, solicitamos o cadastro de responsável(is) pelo aluno, para que, em caso de emergência, possamos entrar em contato.  
                    </TextC.Body>
            }

        </S.Container>
    )
}

export default WrapAdult