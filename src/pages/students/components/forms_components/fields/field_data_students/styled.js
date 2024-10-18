import styled from "styled-components";

export const Container = styled.div`

    /* border: 1px solid red; */
    & .was-validated .form-control:invalid, .form-control.is-invalid{
        //Regras para os controles de inputs
        margin-bottom: .2rem;
    }
    & .invalid-feedback{
        //Controle de msg de error
        position: static;
        padding: 0;
        margin-top: .2rem;
        margin-bottom: 0;
    }
    

`;