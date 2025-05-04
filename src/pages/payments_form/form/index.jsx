import React from 'react'
import { useParams } from 'react-router-dom'
import CreateForm from './create';
import UpdateForm from './update';

const FormPay = () => {
    const { typeForm } = useParams() || {};  // Captura o UID do estado de navegação checkForm = true para cadastro false para atualizar

    //Validaçoes dos Campos;
    //Recuperar pagamento caso seja update;
    //onsubmit vai ser aqui;
    

    return (

        <div>
            {
                typeForm === "create"
                ?  <CreateForm />
                :  <UpdateForm />
            }
        </div>
    )
}

export default FormPay