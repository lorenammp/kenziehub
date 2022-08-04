import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --black: #121214;
        --light-grey: #F8F9FA;
        --medium-grey: #868E96;
        --pink: #FF577F;
    }

    body {
        background: var(--black);
        color: var(--ligth-grey);
    }

    a {
        text-decoration: none;
    }
`;
