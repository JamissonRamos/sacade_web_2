import * as S from './styled';
import { useLocation } from "react-router-dom";
import { WrapPages } from "../../../components/Wrappe/pages";
import HeaderForm from "./components/header";
import { useEffect, useState } from "react";
import { useRegisterStudents } from '../../../hooks/registerStudent';
import { LoadingOverlay } from "../../../components/spinner/global/styled";
import { Spinner } from "react-bootstrap";
import FormCreate from "./form_create";
import FormUpdate from "./form_update";


const FormsController = () => {
   // const [checkForm, setCheckForm] = useState(false) //False Create : True Update
    
    const location = useLocation();  // Captura o UID da URL
    const { idStudent, fullname, checkForm  } = location.state || {};  // Captura o UID do estado de navegação checkForm = true para cadastro false para atualizar

    //Verificar se aluno tem ficha;
    //const {getDocumentsById, loading: loadingRegisterStudent} = useRegisterStudents.useGetDocumentsByIdRegisterStudent();

    // const fetchDocuments = async () => {
    //     const result = await getDocumentsById(uid);
    //     const { success, data, message} = result;

    //     if(success)
    //     {                 
    //         //Verificar se data é diferente de undefined
    //         data ? setCheckForm({check: true, data: data}) : setCheckForm({check: false, data: data});
    //     }else
    //     {
    //         console.log('error:', message);
    //     }
    // }
        
    // useEffect(() => {
    //     fetchDocuments(); //Chama a função ao renderizar o componente
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    
    return (

        <WrapPages>
            <HeaderForm fullname={fullname}  checkForm={checkForm} />

            {/* { 
                loadingRegisterStudent 
                ? <LoadingOverlay>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                        <span >Carregando os dados...</span>
                    </LoadingOverlay> 
                :
                } */}

                <S.WrapForms>
                    { 
                        checkForm
                        ?   <FormCreate idStudent={idStudent} checkForm={checkForm}/>
                        :   'update' //<FormUpdate dataRegister={checkForm.data} checkForm={checkForm}/>

                    }
                </S.WrapForms>
        </WrapPages>
    )
}

export default FormsController