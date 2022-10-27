import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    
    height: 100vh;
    width: 100vw;
    display: flex;
    padding-top: 2.5rem;
    justify-content: center;
    background-color: var(--body-bg-color);
}


:root {
  --body-bg-color: #FAF7FD;
  --purple: #BB99DD;
}
`;

export const Container = styled.div`
  .image-container {
    text-align: center;
    img {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      border: 4px solid #fff;
      outline: 2px solid var(--purple);
    }
  }

  .instagram {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--purple);
    font-family: "Roboto", sans-serif;
  }

  .list-buttons {
    list-style: none;
    text-align: center;
    padding-top: 33px;

    li {
      width: 326px;
      height: 49px;
      border-radius: 0.25rem;
      border: 2px solid var(--purple);
      color: var(--purple);
      cursor: pointer;
      font-family: "Roboto", sans-serif;

      display: flex;
      align-items: center;
      justify-content: center;

      & + li {
        margin-top: 2rem;
      }
      transition: all 0.7s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .social-media {
    margin-top: 4.25rem;
    display: flex;
    justify-content: center;

    img {
      padding: 0px 6px;

      transition: all 0.7s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
