
import { useLocation } from 'react-router-dom';
import { useRegisterStudents } from '../../../hooks/registerStudent';
import { useEffect, useState } from 'react';
import HeaderForm from './header';

const FormsController = () => {
    const location = useLocation();  // Captura o UID da URL
    const { uid, fullname } = location.state || {};  // Captura o UID do estado de navegação
    const [checkForm, setCheckForm] = useState(false) //False Create : True Update
    
    //Verificar se aluno tem ficha;
    const {getDocumentsById, loading} = useRegisterStudents.useGetDocumentsByIdRegisterStudent();

    const fetchDocuments = async () => {
        const result = await getDocumentsById(uid);
        const { success, data, message} = result;

        if(success)
        {            
            //Verificar se data é diferente de undefined
            data ? setCheckForm({check: true, data: data}) : setCheckForm({check: false, data: false});

            console.log(data);

        }else
        {
            console.log('error:', message);
            
        }
    }
        
    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log('checkForm', checkForm.check);
    
    return (
        <> 
            <HeaderForm FullName={fullname} />
            
            FormsController aluno: {uid}

            {
                checkForm.check
                ? <div>update  </div>
                : <div>create</div>
            }

        </>

    )
}

export default FormsController