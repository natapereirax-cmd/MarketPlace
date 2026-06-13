import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Story+Script&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Story Script", sans-serif;
    }

    body {
        height: 100vh;
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
