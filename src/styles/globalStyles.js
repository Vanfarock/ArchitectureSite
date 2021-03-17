import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --base-padding: 100px;
        --base-component-distance: 50px;
    }

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
        
        font-family: 'Roboto', Arial, Helvetica, sans-serif;

        color: ${props => props.theme.fontColor};
    }

    html {
        font-size: 100%;
    }

    body {
        min-height: 100vh;
        height: 100%;
        
        background-color: ${props => props.theme.backgroundColor};
    }

    #root {
        display: flex;
        flex-direction: column;

        min-height: 100vh;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;