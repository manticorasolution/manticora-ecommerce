import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #fff;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    #root {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;
    }
`;
