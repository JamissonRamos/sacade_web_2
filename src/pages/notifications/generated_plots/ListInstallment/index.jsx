import * as S from './styled';
import { TextC } from '../../../../components/Typography'
import { Badge } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useResponsibleStudents } from '../../../../hooks/responsibleStudents';
import { Theme } from '../../../../theme';


const ListInstallment = ({data}) => {
    const [newData, setNewData] = useState('')

    //console.log('data', data);
    
    const handleBadge = (status) => 
        {
            let bg
            switch (status) {
                case 'ativo':
                    bg = "success"
                    break;
                case 'bloqueado':
                    bg = "warning"
                    break;
                case 'inativo':
                    bg = "danger"
                    break;
    
                default:
                    bg = "primary"
                    break;
            }
            return bg 
    }

    useEffect(() => {

        const groupedData = Object.values (

            data.reduce((acc, item) => {

                if (!acc[item.uid]) {
                    acc[item.uid] = {
                        uid: item.uid,
                        name: item.name,
                        dataInstallment: [],
                    };
                }

                acc[item.uid].dataInstallment.push({
                    installmentNumber: item.installmentNumber,
                    dueDate: item.dueDate,
                    value: item.value,
                    error: item.error, // Adicionei um campo de erro como no seu exemplo
                });

                return acc;
            }, {})
        );

        setNewData(groupedData)


    }, [data])

    console.log('newData', newData);
    
    return (
        <S.Container>
            
            <S.Cards>
            {
                newData && newData.map(({uid, name, dataInstallment}, i) => {

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

                                            <S.WrapError
                                                $error={error}
                                            >
                                                {error ? <Theme.Icons.MdClose  /> : <Theme.Icons.MdCheck />}

                                                <TextC.Body level={3}>
                                                    {dueDate}
                                                </TextC.Body>
                                            </S.WrapError>

                                            {/* <S.WrapDtaInstallment> */}
                                                <TextC.Body level={3}>
                                                    {installmentNumber}
                                                </TextC.Body>
                                            {/* </S.WrapDtaInstallment> */}
                                            {/* <S.WrapDtaInstallment> */}
                                                <TextC.Body level={3}>
                                                    {newValue}
                                                </TextC.Body>
                                            {/* </S.WrapDtaInstallment> */}
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