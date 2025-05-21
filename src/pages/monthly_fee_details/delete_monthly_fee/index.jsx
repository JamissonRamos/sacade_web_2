import * as S from './styled'
import { TextC } from '../../../components/Typography'
import { Theme } from '../../../theme'
import { Button, Spinner } from 'react-bootstrap'
import { useMonthlyFee } from '../../../hooks/monthlyFee'
import { useInstallments } from '../../../hooks/installments'
import { useNavigate } from 'react-router-dom'

const DeleteMonthlyFee = (props) => {
    const { showModalDelete, uidPay, uidParcel } = props;

    const uidPayments = uidPay || false;
    const uidInstallments = uidParcel || false;

    const navigate = useNavigate();

    const {deleteInsllments, loading: loadingDelete } = useMonthlyFee.usePostDocumentsDelete();
    const {updateInstallments, loading: loadingInstallmentsUpdate} = useInstallments.usePostDocumentsUpdate();

    const updateInstallmentsData = async () => {
        const dataToChange = {
            uid: uidInstallments,
            statusPayment: false,
            dataPayment: "",
        }

        const result = await updateInstallments(dataToChange);
        const {success, message} = result;

        if(!success){
            console.log('Atualização da parcela não foi concluida', message);
            return false
        }

        return true
    }
    
    const handleDeleteItem = async () => {
        const result = await deleteInsllments(uidPayments);
        const { success, message} = result; 
        if(success){
            const resultUpdate = await updateInstallmentsData();
            if(resultUpdate){
                showModalDelete();
                const path = (-2)
                navigate('/notifications/delete', {
                    state: {
                        url: path,
                        valueButton: {value: 'Voltar Mensalidades', icon: 'MdPayments'},
                    },
                })
            }else{
                navigate('/notifications/error');
            }

        }else{
            console.log('Deu erro: ', message);
            navigate('/notifications/error');
        }
    }
    
    return (
        <S.Container>
            <S.Header>
                <TextC.Title level={1}>Excluir Mensalidade</TextC.Title>
            </S.Header>

            <S.Body>
                <S.WrapIcon>
                    <Theme.Icons.MdDelete/>
                </S.WrapIcon>

                <S.WrapTitles>
                    <TextC.Body level={4} >Você Tem Certeza ?</TextC.Body>
                    <TextC.Body level={2}>
                        Você realmente deseja excluir esta mensalidade? Esta ação não pode ser desfeita.
                    </TextC.Body>
                </S.WrapTitles>

                <S.WrapButtons>
                    <S.WrapButton>
                        <Button 
                            variant={'outline-danger'}
                            onClick={showModalDelete}
                        >
                            <span>Não, Cancelar</span>
                            <Theme.Icons.MdClose/>
                        </Button>
                    </S.WrapButton>
            
                    <S.WrapButton>
                        <Button  
                            variant="success"
                            disabled={loadingDelete || loadingInstallmentsUpdate}
                            onClick={handleDeleteItem}
                        >
                            {
                                loadingDelete || loadingInstallmentsUpdate
                                ?   <>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        <span>Excluindo...</span>
                                        <Theme.Icons.MdDelete/>
                                    
                                    </>
                                :   <>
                                        <span>Sim, Excluir</span>
                                        <Theme.Icons.MdDelete/>
                                    </>
                            }
                            
                        </Button>
                    </S.WrapButton>
            </S.WrapButtons>

            </S.Body>
        </S.Container>
    )
}

export default DeleteMonthlyFee