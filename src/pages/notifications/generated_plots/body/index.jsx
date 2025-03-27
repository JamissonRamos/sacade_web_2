import * as S from './styled';

import ListInstallment from '../ListInstallment';

import { useEffect, useState } from 'react';


const Body = ({allInstallments}) => {
    const [newData, setNewData] = useState('')

    useEffect(() => {
        const groupedData = Object.values (
            allInstallments.reduce((acc, item) => {
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
    }, [allInstallments])

    return (
        <S.Body>
            <S.WrapCards>
                <ListInstallment 
                    data={newData && newData}
                />
            </S.WrapCards>
        </S.Body>
    )
}

export default Body