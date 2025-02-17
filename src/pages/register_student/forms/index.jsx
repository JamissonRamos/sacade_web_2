import * as S                   from './styled';
import { WrapPages }            from "../../../components/Wrappe/pages";
import HeaderForm               from "./components/header";
import { LoadingOverlay }       from "../../../components/spinner/global/styled";
import { Spinner }              from "react-bootstrap";
import { useLocation }          from "react-router-dom";
import { useEffect, useState }  from "react";
import { useRegisterStudents }  from '../../../hooks/registerStudent';
import FormCreate               from "./form_create";
import FormUpdate               from "./form_update";


const FormsController = () => {
    const [registered, setRegistered] = useState(null);
    
    const location = useLocation();  // Captura o UID da URL
    const { idRegister, idStudent, fullname, checkForm  } = location.state || {};  // Captura o UID do estado de navegação checkForm = true para cadastro false para atualizar

    //Recuperar a ficha que foi selecionada na lista de hitorico de aluno
    const {documentsID, loading: loadingRegisterStudent} = useRegisterStudents.useGetDocumentsID();

    const fetchDocuments = async () => {
        const result = await documentsID(idRegister);
        const { success, data, message} = result;

        if(success)
        {                 
            //Verificar se data é diferente de undefined
            data ? setRegistered(data) : setRegistered(false)
        }else
        {
            console.log('error:', message);
        }
    }
        
    useEffect(() => {
        ! checkForm && fetchDocuments(); //Chama a função ao renderizar o componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (

        <WrapPages>
            <HeaderForm fullname={fullname}  checkForm={checkForm} />

            { 
                loadingRegisterStudent &&
                <LoadingOverlay>
                    <Spinner
                        as="span"
                        animation="border"
                        role="status"
                        aria-hidden="true"
                    />
                    <span >Carregando os dados...</span>
                </LoadingOverlay> 
            }

            <S.WrapForms>
                { 
                    checkForm
                    ?   <FormCreate idStudent={idStudent} checkForm={checkForm}/>
                    :   <FormUpdate dataRegister={registered} checkForm={checkForm}/>
                }
            </S.WrapForms>
        </WrapPages>
    )
}

export default FormsController