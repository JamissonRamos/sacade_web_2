import * as S from './styled';

import { WrapPages } from "../../components/Wrappe/pages"
import ListPrimary from "../../components/lists_custom/students/list_primary";
import Header from './header';
import { LoadingOverlay } from "../../components/spinner/global/styled";
import { Spinner } from "react-bootstrap";

import { useEffect, useState } from "react";
import { useStudents } from "../../hooks/students";
import { FetchDocuments } from "./scripts";
import { useNavigate } from 'react-router-dom';

const UpdateInsllments = () => {
    const [registered, setRegistered] = useState(null);
    const navigate = useNavigate();
    const { getDocuments, loading} = useStudents.useGetDocuments()

    useEffect(() => {
        const fetch = async () => {
            const result = await FetchDocuments(getDocuments);
            const { newData  } = result;
            setRegistered(newData)
        }
        fetch();
    }, []);


    const handleNavegation = (uid) =>{

        //Recuperar nome compleo to aluno
        const foundStudent = registered.find((item) => item.uid === uid);
        const {firstName, lastName } = foundStudent;

        navigate('/plotHistory', { state: { uid: uid, fullName: `${firstName} ${lastName} `} });
    }

    return (
        
        <WrapPages>
            <Header />
            {
                loading &&
                    <LoadingOverlay>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Carregando os dados...</span>
                        </LoadingOverlay> 
            }
            <S.WrapList>
                <ListPrimary data={registered} navigateOnClick={handleNavegation} />
            </S.WrapList>
        </WrapPages>
    )
}

export default UpdateInsllments