import { Button, Spinner } from 'react-bootstrap';
import * as S from './styled';
import { TextC } from '../../../../../components/Typography';
import List from '../list';
import { Theme } from '../../../../../theme';
import { useState } from 'react';

const WrapResponsible = ({isRegistered, isLoadingResponsible}) => {
    //Array que vai conter uid selecionado
    const [storesUid, setStoreUid] = useState([]);
    
    const loading = isLoadingResponsible || false;
    const registered = isRegistered || false;

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
                            <TextC.Body level={1}> 
                                Foram realizados cadastros anteriores de responsáveis. Para adicionar esses responsáveis ao cadastro do aluno, basta selecioná-los e clicar em "Adicionar Responsável".   
                            </TextC.Body>
                        </S.WrapTex>
                    
                        <S.WrapList>
                            <List data={registered} setStoreUid={setStoreUid}/>
                        </S.WrapList>

                        <S.WrapButton>
                            <Button
                                variant='outline-warning'
                                disabled={storesUid.length <= 0 ? true : false}
                                //onClick={() =>  navigate('/responsibleStudents/responsibleList/', { state: { uid: uid} })} ///responsibleStudents/form_update/:uid?
                            >
                                <span>Adicionar Responsável</span>
                                <Theme.Icons.MdPerson />
                            </Button>
                        </S.WrapButton>

                    </S.WrapContent>
                : null
            }
            
        </S.Container>
    )
}

export default WrapResponsible