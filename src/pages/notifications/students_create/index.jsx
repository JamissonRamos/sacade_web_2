import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResponsibleStudents } from '../../../hooks/responsibleStudents';
import { useEffect, useState } from 'react';
import Title from './component/title';
import WrapAdult from './component/wrap_adult';
import WrapResponsible from './component/wrap_responsible';

const NotificationsStudentCreate = () => {
    const [registered, setRegistered] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();  // Captura o UID da URL
    const { uid, adult } = location.state || {};  // Captura o UID do estado de navegação

    const { getDocuments, loading: loadingResponsible } = useResponsibleStudents.useGetDocuments()

    const handleGetUidResponsible = async () => { 
        // 1. Recuperar o array
        let responsibleStudent = await JSON.parse(localStorage.getItem("uidsResponsibleStudent"));        
        return responsibleStudent
    }

    const handleGetdResponsible = async () => { 

        const uidResponsible = await handleGetUidResponsible();

        const result  = await getDocuments();
        const {success, data, message} = result;

        if (success){
            const filteredData = data && data.filter(item => uidResponsible.includes(item.uid));
            setRegistered(filteredData)
        }else{
            console.log(message);
            navigate('/notifications/error');
        }
    };
    
    useEffect(() => {
        handleGetdResponsible();  // Chama a função ao renderizar o componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (

        <S.Container>
            <S.Content>
                <S.Header>
                    <Theme.Icons.MdCheckCircleOutline />
                    <TextC.Title level={2}> Sucesso </TextC.Title>
                </S.Header>
                <S.Body>
                    {/* Informativo da tela */}
                    <Title />

                    {/* Informativo de text de menor ou maior de idade */}
                    <WrapAdult isAdult={adult}/>

                    <S.WrapButton>

                        <S.ButtonResponsible
                            onClick={() =>  navigate('/responsibleStudents/responsibleList/', { state: { uid: uid} })} ///responsibleStudents/form_update/:uid?
                        >
                            { 
                                adult 
                                ? <span>Sim, quero cadastrar novos Responsáveis</span>
                                : <span>Vamos cadastrar Responsáveis</span>
                            }
                            <Theme.Icons.MdPerson />
                        </S.ButtonResponsible>
                        
                        {
                            adult 
                            ?    <S.ButtonListStudent
                                    onClick={() =>  navigate('/students')}
                                >
                                    <span>Não, quero volta para lista de alunos</span>
                                    <Theme.Icons.MdList />
                                </S.ButtonListStudent>
                            : null
                        }
                    </S.WrapButton> 
                    
                    <WrapResponsible isRegistered={registered} isLoadingResponsible={loadingResponsible}/>

                </S.Body>
                
            </S.Content>
        </S.Container>
    )
}

export default NotificationsStudentCreate