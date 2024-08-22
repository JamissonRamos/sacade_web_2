import { createGlobalStyle } from "styled-components";


const Reset =  createGlobalStyle `
	*{
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
		overflow: hidden;
		font-family: "Roboto", sans-serif;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        font-weight: 400;
        font-style: normal;
	}
`

export default Reset;
