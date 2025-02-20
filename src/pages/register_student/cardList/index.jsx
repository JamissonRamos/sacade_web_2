import * as S                       from './styled';
import { TextC }                    from '../../../components/Typography';
import { useNavigate }              from 'react-router-dom';
import { useEffect, useState }      from 'react';
import { useResponsibleStudents }   from '../../../hooks/responsibleStudents';
import ListPrimary from '../../../components/lists_custom/students/list_primary';


const CardList = ({data}) => {
    // Estado para armazenar os resultados de verificação de responsáveis, se tem ou não 
    const [storesStudent, setStoresStudent] = useState({});
    const navigate = useNavigate();

    const { getDocumentsByIdStudents } = useResponsibleStudents.useGetDocumentsByIdStudents()

    //Buscar os responsavel pelo aluno
    const fetchDocuments = async (uid) => {
        const result = await getDocumentsByIdStudents(uid);
        const { success, data } = result;
        if (success) {
            return data || []; // Retorna um array vazio caso não haja dados
        }
        return [];
    }

    // Função para verificar se um estudante menor de idade tem responsável
    const checkResponsibleStudent = async (uid, isMinor) => {
        if (!isMinor) {
            // Se não for menor de idade, não precisa verificar
            setStoresStudent((prev) => ({ ...prev, [uid]: false }));
            return false;
        }
        const documents = await fetchDocuments(uid);
        const hasResponsible = documents.length > 0; // Verifica se há algum responsável cadastrado
        setStoresStudent((prev) => ({ ...prev, [uid]: hasResponsible }));
        return hasResponsible;
    };

    const handleShowFormUpdate = (uid, fullname) => { 
        navigate('/registerStudent/listRegisterStudents', { state: { idStudent: uid, fullname: fullname } });
    };

    // Dispara a verificação de responsáveis ao montar o componente
    useEffect(() => {
        const checkResponsibles = async () => {
            for (const student of data) {
                await checkResponsibleStudent(student.uid, student.isMinor);
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
                    const statusMinor = storesStudent[uid] === false && isMinor; // Se for menor e não tiver responsável

                    return(
                        <S.WrapButton 
                            key={uid}
                            onClick={() => handleShowFormUpdate(uid,  firstName + ' ' + lastName )}
                            $isMinor={statusMinor}
                        >
                            {statusMinor && 
                                <S.WrapText>
                                    <TextC.Body level={1}>É necessário cadastrar um responsável para este aluno.</TextC.Body>
                                </S.WrapText>
                            }
                            <ListPrimary 
                                index={i}
                                firstName={firstName}
                                lastName={lastName}
                                status={status}
                            />
                        </S.WrapButton>
                    )
                })
            }
        </S.Container>
    )
}

export default CardList