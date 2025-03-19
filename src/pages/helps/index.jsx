import { WrapPages } from '../../components/Wrappe/pages';
import Body from './components/body';
import Header from './components/header';
import * as S from './styled';
import {DataItemMenu } from './dataItem';
import { useState } from 'react';

const Helps = () => {
    const [dataSearch, setDataSearch] = useState(DataItemMenu);

    const handleSearch = (value) => {
        if (!value) return setDataSearch(DataItemMenu);

        const newDataItem = DataItemMenu.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setDataSearch(newDataItem)
        return newDataItem;
    }

    
    return (
        <WrapPages>
            <S.Container>

                <Header handleSearch={handleSearch}/>

                <Body ItemsMenu={dataSearch}/>

            </S.Container>
        </WrapPages>
    )
}

export default Helps

