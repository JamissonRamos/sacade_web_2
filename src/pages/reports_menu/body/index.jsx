import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Link } from 'react-router-dom';

const Body = ({ItemsMenu}) => {
    
    return (
        <S.Container>
            {
                ItemsMenu &&
                ItemsMenu.map(({title, icon, path}, i) =>{
                    return (
                        <Link
                            key={i}
                            to={path}  
                        >
                            <S.CardSvg>
                                {icon}
                            </S.CardSvg>
                            
                            <S.CardName>
                                <TextC.Label level={5}> {title} </TextC.Label>
                            </S.CardName>

                        </Link>

                    )
                })
            }

            {
                ItemsMenu.length === 0 &&
                <S.Empty>
                    <TextC.Display level={2} >
                        Ops! Desculpe!
                    </TextC.Display>
                    <TextC.Body level={2}>
                        Nada foi encontrado com essa palavra. Por favor, entre em contato com o administrador do sistema para obter ajuda.
                    </TextC.Body>
                </S.Empty> 
            }
        </S.Container>
    )
}

export default Body