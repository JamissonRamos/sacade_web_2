import * as S from './styled';

import { TextC } from '../../../../components/Typography'

import { Theme } from '../../../../theme';


const ListInstallment = ({data}) => {

    return (
        <S.Container>
            
            <S.Cards>
            {
                data && data.map(({uid, name, dataInstallment}, i) => {

                    return (

                        <S.Card
                            key={uid}
                            $alternate={ i % 2 !== 0}
                        >
                            <S.SectionFirst>

                                <S.WrapIndex>
                                    <TextC.Label level={5}>{i + 1}</TextC.Label>    
                                </S.WrapIndex>

                                <S.WrapName>
                                    <TextC.Title level={1}>{name}</TextC.Title>
                                </S.WrapName>

                            </S.SectionFirst>

                            <S.SectionSecond>
                            {
                                dataInstallment && dataInstallment.map(({dueDate, error, installmentNumber, value}, index) =>{
                                    const newValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
                                        
                                    return(
                                        <S.CarddDtaInstallment  key={index}>

                                            <S.WrapError $error={error} >
                                                {error ? <Theme.Icons.MdClose  /> : <Theme.Icons.MdCheck /> }
                                                <TextC.Body level={3}> {dueDate} </TextC.Body>
                                            </S.WrapError>

                                            <TextC.Body level={3}>
                                                {installmentNumber}
                                            </TextC.Body>

                                            <TextC.Body level={3}>
                                                {newValue}
                                            </TextC.Body>

                                        </S.CarddDtaInstallment>   
                                    )})
                                }
                            </S.SectionSecond>

                        </S.Card>
                    )
                })
            }

            </S.Cards>
        </S.Container>
    )
}

export default ListInstallment