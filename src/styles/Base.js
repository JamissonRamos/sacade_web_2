import { createGlobalStyle } from "styled-components";  


/* 
    -Alterar seletores ou components que vão mudar de acordo a necessidade do projeto;

*/
const Base = createGlobalStyle`

    body, html {
        /* border: 1px solid red; */
        width: 100vw;
        height: 100vh;
    }

    main {
        /* border: 1px solid green; */
        width: calc(100vw - 240px);
        height: calc(100vh - 60.8px);
        padding: 1rem ;
        margin-left: 240px;
        overflow: auto;
        transition: margin 0.4s; 
        @media (max-width: 768px) {
            width: calc(100vw - 80px);
            height: calc(100vh - 41.6px); //Header com essa altura
            padding: .8rem ;
            margin-left: 80px;
        }
        @media (max-width: 425px) {
            width: 100vw;
            height: calc(100vh - 118px);
            padding: 0;
            margin: 0 ;
        }
    }

    

`;


export default Base;
