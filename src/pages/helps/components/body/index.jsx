import { TextC } from '../../../../components/Typography';
import { Theme } from '../../../../theme';
import { DataItemMenu } from './dataItem';
import * as S from './styled';

const Body = () => {

    return (

        <S.Container>
            {
                DataItemMenu &&
                DataItemMenu.map(({title, icon, path}, i) =>{
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




        </S.Container>
    )
}

export default Body