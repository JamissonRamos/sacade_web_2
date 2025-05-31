/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "./styled"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../validations'
import { ConvertDate, ConvertNumberToCurrency, FormatNumberPercentage, FormattedDate } from "../scripts";
import { useNavigate } from "react-router-dom";
import { FormatMoneyNumber, FormatPercentageNumber } from "../../../configuration_installments/scripts";
import { useInstallments } from "../../../../hooks/installments";
import { useMonthlyFee } from "../../../../hooks/monthlyFee";

import Fields from "./fields"
import { LoadingOverlay } from "../../../../components/spinner/global/styled";
import { Spinner } from "react-bootstrap";
import Buttons from "./buttons";
import DeleteData from "../../../../components/alert_delete";

const Form = ({registered}) => {
    const [showModalDelete, setShowModalDelete] = useState(false); // Status para abrir ou fechar o modal de deletar
    const [loading, setLoading] = useState(false); // Carregando os dados
    const [idDocument, setIdDocument] = useState(false);
    const [fieldDisabled, setFieldDisabled] = useState(true); // Habilitar e desabilitar campos
    const fields = ['fees', 'interestDaily', 'interestMonthly', 'interestAnnual']; //Nomes dos meu campos
    const navigate = useNavigate();

    const { updateInstallments, loading: loadingUpdate} = useInstallments.usePostDocumentsUpdate()
    const { deleteInsllments, loading: loadingDelete } = useInstallments.usePostDocumentsDelete();
    const { getDocuments, loading: loadingDocument } = useMonthlyFee.useGetDocuments();
    const { deleteInsllments: deleteMonthlyFee , loading: loadingDeleteInsllments } = useMonthlyFee.usePostDocumentsDelete();
    

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.UpdateInstallmentsSchema)
    });
    
    //Função para retornar a page de historico de parcelas
    const handleCancel = () => navigate(-1);

    // função para abrir o modal de deletar
    const handleShowModalDelete = () => setShowModalDelete((prevState) => !prevState);
    
    //Função para deletar o registro
    const handleDeleteItem = async () => {
        const uid = registered[0].id;

        //- recupere todos os pagamento feitos
        const resultDocument = await getDocuments();
        
        if (!resultDocument.success){
            console.log('Algo deu errado na busca dos pagamentos', resultDocument.message);
            navigate('/notifications/error');
            return
        }
        //- filtrar todos os pagamentos que tem relação com uid a ser excluidos
        const newDataPay = resultDocument.data.filter(item => item.uidMonthlyFee === uid)
                                                .map(item => ({ id: item.id, uidMonthlyFee: item.uidMonthlyFee }));
        const result =  await deleteInsllments(uid) //{ success: true, message: 'error de teste'}
        const { success, message} = result; 
        if(success){
            newDataPay.map(async ({id}) => {
                console.log('Excluir id ', id);
                await deleteMonthlyFee(id)
            })

            handleShowModalDelete()
            
            const path = `/updateInstallments`
            navigate('/notifications/delete', {
                state: {
                    url: path,
                    valueButton: {value: 'Lista Alunos', icon: 'MdPerson'},
                },
            });

        }else{
            reset()
            navigate('/notifications/error');
            console.log({message: `Deu algum erro: ${message}`})
        }
    }

    const handleOnSubmit = async (data) => {
        data.dueDate = FormattedDate(data.dueDate);
        data.fees = FormatPercentageNumber(data.fees);
        data.interestAnnual = FormatPercentageNumber(data.interestAnnual);
        data.interestDaily = FormatPercentageNumber(data.interestDaily);
        data.interestMonthly = FormatPercentageNumber(data.interestMonthly);
        data.valueInstallment = FormatMoneyNumber(data.valueInstallment);
        data.uid = idDocument;

        const result = await updateInstallments(data);
        const { success, message} = result;

        if(success){
            reset()
            const path = `/updateInstallments`
            navigate('/notifications/update', {
                state: {
                    url: path,
                    valueButton: {value: 'Lista Alunos', icon: 'MdPerson'},
                },
            });

        }else{
            reset()
            navigate('/notifications/error');
            console.log({message: `Deu algum erro: ${message}`})
        }
    }

    //Loading
    useEffect(() => {
        const firstItem = registered[0];
        let maskedValue = 0;
        if (firstItem) {
            Object.entries(firstItem).forEach(([key, value]) => {
                if (key === 'dueDate'){
                    setValue(key, ConvertDate(value));
                }else if (key === 'valueInstallment'){
                    setValue(key, ConvertNumberToCurrency(value));
                }else if (fields.includes(key)){
                    maskedValue = FormatNumberPercentage(value);
                    setValue(key,  maskedValue);
                }
            });
            setIdDocument(firstItem.id)
            setLoading(true); // dados carregados
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [registered])
    
    // Condicione a renderização do seu componente
    if (!loading ) {
        return (
            <LoadingOverlay>
                <Spinner
                    as="span"
                    animation="border"
                    role="status"
                />
                <span> Carregando os dados... </span>
            </LoadingOverlay> // Ou qualquer outro indicador de carregamento
        )
    }

    return (

        <S.Container>
            <S.Form onSubmit={handleSubmit(handleOnSubmit)} >
                <Fields
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                    errors={errors}
                    fieldDisabled={fieldDisabled}
                    setFieldDisabled={setFieldDisabled}
                    data={registered}
                />
                <Buttons 
                    loadingUpdate={loadingUpdate}
                    loadingDelete={loadingDelete || loadingDocument || loadingDeleteInsllments}
                    buttonCancel={handleCancel}
                    handleShowModalDelete={handleShowModalDelete}
                />
            </S.Form>
            {
                showModalDelete &&
                    <DeleteData
                        handleShowDelete = {handleShowModalDelete}
                        handleDeleteData = {handleDeleteItem}
                    />
            }
        </S.Container>
    )
}

export default Form