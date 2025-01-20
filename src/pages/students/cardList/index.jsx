import * as S           from './styled';
import { TextC }        from '../../../components/Typography';
import { Badge }        from 'react-bootstrap';
import { useNavigate }  from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useResponsibleStudents } from '../../../hooks/responsibleStudents';


const CardList = ({data}) => {
    // Estado para armazenar os resultados de verificação de responsáveis
    const [responsibleStatus, setResponsibleStatus] = useState({});

    const { getDocumentsByIdStudents } = useResponsibleStudents.useGetDocumentsByIdStudents()
    const navigate = useNavigate();

    const fetchDocuments = async (uid) => {
        const result = await getDocumentsByIdStudents(uid);
        const { success, data } = result;
        if (success) {
            return data || []; // Retorna um array vazio caso não haja dados
        }
        return [];
    }

    const handleBadge = (status) => 
    {
        let bg
        switch (status) {
        case 'inativo':
            bg = "warning"
            break;
        case 'bloqueado ':
            bg = "danger"
            break;
        case 'ativo':
            bg = "success"
            break;
    
        default:
            bg = "primary"
            break;
        }
    
        return bg 
    }

    const handleShowFormUpdate = (uid) => { 
        // handleDeleteLocalStorage();
        navigate('/students/form_update', { state: { uid: uid } });
    };

    // Função para verificar se um estudante menor de idade tem responsável
    const handleResponsible = async (uid, isMinor) => {
        if (!isMinor) {
            // Se não for menor de idade, não precisa verificar
            setResponsibleStatus((prev) => ({ ...prev, [uid]: false }));
            return false;
        }

        const documents = await fetchDocuments(uid);
        const hasResponsible = documents.length > 0; // Verifica se há algum responsável cadastrado
        setResponsibleStatus((prev) => ({ ...prev, [uid]: hasResponsible }));
        return hasResponsible;
    };
        // Dispara a verificação de responsáveis ao montar o componente
        useEffect(() => {
            const checkResponsibles = async () => {
                for (const student of data) {
                    await handleResponsible(student.uid, student.isMinor);
                }
            };
            if (data) checkResponsibles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [data]);

    return (
        <S.Container> 
        {

            data && data.map(({uid, firstName, lastName, status, isMinor}, i) => {
                // Chame a função aqui
                const statusMinor = responsibleStatus[uid] === false && isMinor; // Se for menor e não tiver responsável

                return(
                    <>
                        <S.WrapButton 
                            key={uid}
                            onClick={() => handleShowFormUpdate(uid)}
                            $isMinor={statusMinor}
                        >
                            {statusMinor && 
                                <S.WrapText>
                                    <TextC.Body level={1}>É necessário cadastrar um responsável para este aluno.</TextC.Body>
                                </S.WrapText>
                            }
                            <S.Card>
                                <S.SectionPrime>
                                    <S.WrapIndex>
                                        <TextC.Body level={3}> {i + 1} </TextC.Body>
                                    </S.WrapIndex>

                                    <S.CircleFirstLetterNome>
                                        {firstName && firstName.charAt(0)}
                                    </S.CircleFirstLetterNome>
                                    <S.Name>
                                        {firstName + ' ' + lastName} 
                                    </S.Name>
                                </S.SectionPrime>
                                <S.SectionSecondary>

                                    <S.Status>
                                        <Badge bg={handleBadge(status)} text="light">
                                            {status}
                                        </Badge>
                                    </S.Status>
                                </S.SectionSecondary>
                            </S.Card>
                        </S.WrapButton>
                    </>
                )
            })
        }
        </S.Container>
    )
}

export default CardList