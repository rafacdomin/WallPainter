import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --blue-dark: #004276;
    --blue-light: #6EC6F4;
    --darker: #011D3B;
    --white: #ffffff;
    --orange: #E97126;
    --black: #000000;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: linear-gradient(to right, var(--blue-dark) 70%, var(--blue-light) 30%);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, button, input{
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  @media (min-width: 1100px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
