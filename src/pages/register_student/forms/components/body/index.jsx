import * as S from './styled'
import { Form } from 'react-bootstrap'
import { useEffect } from 'react';
import { FieldRegisterStudent } from '../fields';
import { Validations } from '../../../../validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ApplyChew, ConvertDate, FormatStringNumber, FormattedDate, RecoverUidRanger} from './script';
import { useRegisterStudents }  from '../../../../../hooks/registerStudent';
import DeleteData from '../../../../../components/alert_delete';


const BodyForm = ({handleOnSubmit, 
    handleShowModalDelete, checkForm, loadingCreate, loadingUpdate, loadingDelete,  dataRecovered, showModalDelete, registeredDelete, handleDeleteData}) => {
        
    const navigate = useNavigate();

    //Recuperando as Fichas do aluno;
    const {getDocumentsById, loading: loadingRegisterStudent} = useRegisterStudents.useGetDocumentsByIdRegisterStudent();

    //Atualizar a ficha com a maior faixa
    const {updateData } = useRegisterStudents.usePostDocumentsUpdate()

    const { register, handleSubmit, setValue, watch, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.RegisterStudentSchema),
        defaultValues: {
            studentWeight: 'kg 0,00',
            studentHeight: 'm 0,00',
            degrees: 0, // Valor inicial para degreesRange
        },
    });

    const applyMascara = (fieldName, fieldValue ) => {
        let maskedValue = ApplyChew(fieldName, fieldValue);
        setValue(fieldName, maskedValue);
    }

    const handleApplyChewChange = (e) => {
        let fieldName = e.target.name || false;
        let fieldValue = e.target.value || false;
        
        let maskedValue = ApplyChew(fieldName, fieldValue);   

        setValue(fieldName, maskedValue);
    }

    const updateCurrentHistory = async (uidActual, uidNew) => {
    /*  
        * Função para atualizar o campo currentHistory; 
    */
        //Obj da ficha atual
        const updateActual = {
            currentHistory: false,
            uid: uidActual
        }

        //Obj da ficha que vai ser atual
        const updateNew = {
            currentHistory: true,
            uid: uidNew
        }

        try {
            /* esse bloco so funcionar se uid actual for true caso cntrario não precisa, pois o actual não exixtir foi gerado uma ficha com o campo false  */
            if (uidActual){
                // Atualiza o primeiro uid
                const result1 = await updateData(updateActual);
                if (!result1.success) {
                    console.log('Erro na atualização da ficha atual: ', result1.message);
                    return { success: false, message: result1.message };
                }
            }
            // Atualiza o segundo uid
            const result2 = await updateData(updateNew);
            if (!result2.success) {
                console.log('Erro na atualização da nova ficha atual: ', result2.message);
                return { success: false, message: result2.message };
            }
        } catch (error) {
            console.log('Erro durante a atualização: ', error);
            return { success: false, message: error.message };
        }
    }

    const handleFetchDocuments = async (idStudent) => {
        const result = await getDocumentsById(idStudent);
        const { success, data, message} = result;        
        if(success)
        {    
            //Caso a busca seja sucesso, mas o data seja false, não tem nada cadastrado
            if(data === false) return;

            const result = await RecoverUidRanger(data);
            const {rangerActualUid, highestRankObjUid } = result;

            //Caso os uids seja mesmo não precisa muda a ficha
            if (rangerActualUid === false && highestRankObjUid === false) return
            await updateCurrentHistory(rangerActualUid, highestRankObjUid)
            
        }else
        {
            console.log('error:', message);
        }
    } 

    const handleSubmitBody = async (data) => {
        
        data.dateUpdate = FormattedDate(data.dateUpdate)
        data.studentWeight = FormatStringNumber(data.studentWeight)
        data.studentHeight = FormatStringNumber(data.studentHeight)

        const result = await handleOnSubmit(data)
        //const result = {success: true, message: 'error'}
        const {success, message} = result;
        if(success){
            //Pegando id student caso seja um create 
            const idStudent = data && data.idStudent;
            //Recuperar todos fichas do aluno
            await handleFetchDocuments(idStudent);

            const path = `/registerStudent`;
            //Coloca dinamico a page de notificação, atualiação ou create
            navigate(`/notifications/${checkForm ? 'create' : 'update' } `, {
                state: {
                    url: path,
                    valueButton: {value: 'Ficha do Aluno', icon: 'PiAddressBookFill'},
                    buttonNewRegister: false,
                },
            });
        }else{
            reset()
            navigate('/notifications/error');
            console.log({message: `Deu algum erro na ficha do aluno: ${message}`})
        }
    }

    const handleDeleteBody = async () => {
        /* 
            * Função para chamar a função que deleta o historico do aluno;
            * Retorna se excluir ou se deu erro;
            * Sucess redirecionar para page de notificação;
        */
        const result = await handleDeleteData()
        const {success, message} = result;
        if(success){

            //Pegando id student caso seja um create 
            const idStudent = dataRecovered && dataRecovered.idStudent;
            //Recuperar todos fichas do aluno
            await handleFetchDocuments(idStudent);

            const path = `/registerStudent`;
            navigate(`/notifications/delete`, {
                state: {
                    url: path,
                    valueButton: {value: 'Ficha do Aluno', icon: 'PiAddressBookFill'},
                    buttonNewRegister: false,
                },
            });
        }else{
            navigate('/notifications/error');
            console.log({message: `Deu algum erro na ficha do aluno: ${message}`})
        }

    }

    useEffect(() => {  
        
        if (!checkForm && dataRecovered ) {
            Object.keys(dataRecovered).forEach(key => {
                if (key === 'dateUpdate') {
                    const newDate = ConvertDate( dataRecovered[key]) 
                    setValue(key, newDate);
                }else if (key === 'degrees') {
                    setValue(key, dataRecovered[key]);
                }else if (key === 'studentWeight') {
                    applyMascara(key, dataRecovered[key]);
                }else if (key === 'studentHeight') {
                    applyMascara(key, dataRecovered[key]);
                }else{
                    setValue(key, dataRecovered[key]);
                }
            });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataRecovered])  
    

    return (

        <S.Container>
            <Form onSubmit={handleSubmit(handleSubmitBody)}>
                <S.WrapFields>
                    <FieldRegisterStudent.RegisterStat 
                        register={register} 
                        setValue={setValue}
                        watch={watch}
                        errors={errors}
                        handleApplyChewChange={handleApplyChewChange}
                    />  
                    <FieldRegisterStudent.EndRegister 
                        handleShowModalDelete={handleShowModalDelete}
                        checkForm={checkForm}
                        loadingCreate={loadingCreate}
                        loadingUpdate={loadingUpdate}
                        loadingDelete={loadingDelete}
                    />  
                </S.WrapFields>
            </Form>
            {
                showModalDelete &&
                <DeleteData
                    registeredDelete = {registeredDelete}
                    handleShowDelete = {handleShowModalDelete}
                    handleDeleteData = {handleDeleteBody}
                />
            }
        </S.Container>
    )
}

export default BodyForm