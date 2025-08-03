import { Button, Spinner } from 'react-bootstrap';
import * as S from './styled';
import { TextC } from '../../../../../components/Typography';
import List from '../list';
import { Theme } from '../../../../../theme';
import { useState } from 'react';
import { usePostDocumentsUpdateIdStudent } from '../../../../../hooks/responsibleStudents/usePostDocumentsUpdateIdStudent';
import { useNavigate } from 'react-router-dom';

const WrapResponsible = ({isRegistered, isLoadingResponsible}) => {
    //Array que vai conter uid selecionado
    const [storesUid, setStoreUid] = useState([]);
    
    const loading = isLoadingResponsible || false;
    const registered = isRegistered || false;
    const navigate = useNavigate();
    
    const { updateResponsibleStudentUidStudent, loading: loadingUpIdStudent  } = usePostDocumentsUpdateIdStudent();

    const getUidStudent = async () => {

        // Recuperar o documento student do localStorage
        const student = localStorage.getItem('student');

        // Verificar se o documento existe
        if (student) {
            // Parse o JSON para um objeto
            const studentData = JSON.parse(student);

            // Recuperar o uid
            const uid = studentData[0].uid;

            if (uid) {
                return {success: true, uid: uid}
            } else {
                return {success: false, message: 'UID não encontrado no documento student.'}
            }

        } else {
            return {success: false, message: 'Documento student não encontrado no localStorage.'}
        }

    }

    const handleOnclick = async () => {

        const result = await getUidStudent();
        const {success, uid, message} = result;        

        if(success){            
            // storesUid.forEach(async (responsible)  =>  {
            const updatePromises = storesUid.map(async (responsible) => {
                const { uidResponsible, relationshipLevel } = responsible;
                const idStudentLevel = { idStudent: uid, relationshipLevel }; // O idStudent é o UID do aluno
                const resultUp = await updateResponsibleStudentUidStudent(uidResponsible, idStudentLevel) //{ success: false, message: 'erro de teste' } 
                const { success, message } = resultUp;
    
                if (!success) {
                    console.log('error ao add responsável ' + responsible.relationshipLevel , message);
                }
            });

            // Aguarda que todas as promessas sejam resolvidas
            await Promise.all(updatePromises);
            //console.log('retirar a comentario de baxo da navegaçõa');
            
            navigate('/responsibleStudents/responsibleList/', { state: { uid: uid} })
            
        }else{
            console.log('message', message)
            navigate('/notifications/error');
        }
    }
    
    return (

        <S.Container>
            {
                loading 
                ?   <>
                        <Spinner
                        variant="warning"
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        <span > Carregando dados... </span>
                    </> 
                :   null
            }

            {
                registered && registered.length > 0 
                ?   <S.WrapContent>

                        <S.WrapTex>
                            <TextC.Body level={2}> 
                                Para adicionar responsáveis ao cadastro do aluno, selecione-os e clique em Adicionar Responsável. 
                                Para alterar o status de grau de parentesco, isso deve ser feito na próxima página ao atualizar o cadastro.   
                            </TextC.Body>
                        </S.WrapTex>
                    
                        <S.WrapList>
                            <List data={registered} setStoreUid={setStoreUid}/>
                        </S.WrapList>

                        <S.WrapButton>
                            <Button
                                variant='outline-warning'
                                disabled={storesUid.length <= 0 || loadingUpIdStudent ? true : false}
                                onClick={() => handleOnclick() } ///responsibleStudents/form_update/:uid?
                            >
                                {
                                    loadingUpIdStudent
                                    ?   <>
                                            <span>Adicionando dados</span>
                                            <Theme.Icons.MdPerson />
                                        </>
                                    :
                                        <>
                                            <span>Adicionar Responsável</span>
                                            <Theme.Icons.MdPerson />
                                        </>
                                }
                            </Button>
                        </S.WrapButton>

                    </S.WrapContent>
                : null
            }
            
        </S.Container>
    )
}

export default WrapResponsible