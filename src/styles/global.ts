import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;
        
        --blue-light: #6933FF;

        --text-title: #363FF;
        --text-body: #969CB3;

        --shape: #FFFFFF;

    }
    
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (min-width: 720px) {
            font-size: 87.5%; // 15px
        }
    }
    body{
        background:var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
    }
    button {
        cursor:pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor:not-allowed;
    }

`