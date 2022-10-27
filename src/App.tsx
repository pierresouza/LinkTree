import React from "react";
import { Container, GlobalStyle } from "./styles/styles";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="image-container">
          <img src="https://github.com/pierresouza.png" alt="" />
        </div>
        <div className="instagram">
          <p>@Pierre.souza</p>
        </div>
        <div className="list-buttons">
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </div>
        <div className="social-media">
          <a href="">
            <img src="../src/assets/twitter.svg" alt="" />
          </a>
          <a href="">
            <img src="../src/assets/twitch.svg" alt="" />
          </a>
          <a href="">
            <img src="../src/assets/instagram.svg" alt="" />
          </a>
          <a href="">
            <img src="../src/assets/linkedin.svg" alt="" />
          </a>
          <a href="">
            <img src="../src/assets/github.svg" alt="" />
          </a>
        </div>
      </Container>
    </>
  );
}
