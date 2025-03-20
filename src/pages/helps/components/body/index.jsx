import { TextC } from '../../../../components/Typography';

import * as S from './styled';

const Body = ({ItemsMenu}) => {
    
    return (
        <S.Container>
            {
                ItemsMenu &&
                ItemsMenu.map(({title, icon, path}, i) =>{
                    return (
                        <S.Card
                            key={i}
                            href={path}
                            target={path === "#" ? "_self" : "_blank" }    
                        >
                            <S.CardSvg>
                                {icon}
                            </S.CardSvg>
                            
                            <S.CardName>
                                <TextC.Label level={5}> {title} </TextC.Label>
                            </S.CardName>

                        </S.Card>

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