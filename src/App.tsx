import React from "react";
import { Container, GlobalStyle } from "./styles/styles";

interface DataButtons {
  text: string;
  link: string;
  id: number;
}

const Data: DataButtons[] = [
  { text: "Link 1", link: "", id: 1 },
  { text: "Link 2", link: "", id: 2 },
  { text: "Link 3", link: "", id: 3 },
  { text: "Link 4", link: "", id: 4 },
];

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
          {Data.map(({ text, link, id }) => {
            return (
              <ul key={id}>
                <li>
                  <a href={link}>
                    <p>{text}</p>
                  </a>
                </li>
              </ul>
            );
          })}
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
