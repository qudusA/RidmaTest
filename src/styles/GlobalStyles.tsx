import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        &,&.light{
            --color-gray-0: #FFFFFF;
            --color-gray-2: #495057;
            --color-gray-50: #f7f7f7;
            --color-gray-input-text: #ACB5BD;
            --color-gray-happy: #F3F2FF;
            --color-gray-900: #12101A;
            





            --color-purple-800: #7165E3;
            --color-light-purple: #7165E333;



            --color-black: #000000;


            --color-red-700: #EB5757;
        }


        &{

        }
    }
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family:  "DM Sans" ,sans-serif;
  color: var(--color-grey-700);

  &::-webkit-scrollbar{
    display: none;
  }
  

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  
}

input{
    outline: none;
    border: none;
    padding: 4px;
}





`;

export default GlobalStyle;
