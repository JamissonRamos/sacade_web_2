import { WrapPages } from '../../components/Wrappe/pages'
import Header from './components/header'
import Body from './components/body'
// import { useGetDocumentsID } from '../../hooks/users/useGetDocumentsID'
// import { useEffect, useState } from 'react'
// import { LoadingOverlay } from '../../components/spinner/global/styled'
// import { Alert, Spinner } from 'react-bootstrap'
// import { useAuth } from '../../contexts/authContext/AuthContex';


/* retirar os useAuth ja que os dados estão no storage so pega no form */


const ChangePassword = () => {
  // const [ registered, setRegistered] = useState({})
  // const [ error, setError] = useState(null)
  // const { currentUser } = useAuth();
  //const {documentsID, isLoading: loadingById} = useGetDocumentsID()

  // const { id: uid, email, firstName, lastName } = currentUser;

  // const storesUserData = () => {
  //   //Armazena os dados do user em um so lugar
  //   setRegistered({
  //       uid: uid, email: email, firstName: firstName, lastName: lastName
  //     })
  // }

  // const fetchDocuments = async () => {
  //   const result = await documentsID(uid);
  //   const { success, data, message} = result;
  //   if(success)
  //   {
  //     setRegistered( data )
  //   }else{
  //     setError(message);
  //   };

  // }

  // useEffect(() => {
  //   // storesUserData();  // Chama a função ao renderizar o componente
  // }, []);


  return (
    <WrapPages>
      {/* {
        error && <Alert variant={'danger'}> {error} </Alert>
      } */}

      <Header />

      {/* {
        loadingById &&
          <LoadingOverlay>
            <Spinner
              as="span"
              animation="border"
              role="status"
              aria-hidden="true"
            />
            <span className="sr-only">Carregando os dados...</span>
        </LoadingOverlay>
      } */}

      <Body />

    </WrapPages>
  )
}

export default ChangePassword