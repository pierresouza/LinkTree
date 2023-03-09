import { Container, GlobalStyle } from "./styles/styles";
import Twitter from "./assets/twitter.svg";
import Twitch from "./assets/twitch.svg";
import Instagram from "./assets/instagram.svg";
import Linkedin from "./assets/linkedin.svg";
import Github from "./assets/github.svg";
import React from "./assets/react.svg";

interface DataButtons {
  text: string;
  link: string;
  id: number;
}

interface SocialButtons {
  link: string;
  img: string;
  id: number;
}

const FooterImages: SocialButtons[] = [
  { img: Twitter, link: "", id: 1 },
  { img: Twitch, link: "", id: 2 },
  { img: Instagram, link: "", id: 3 },
  { img: Linkedin, link: "", id: 4 },
  { img: Github, link: "https://github.com/pierresouza", id: 5 },
  { img: React, link: "https://beta.reactjs.org/", id: 6 },
];

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
          <a href="https://github.com/pierresouza" target={"_blank"}>
            <img src="https://github.com/pierresouza.png" alt="" />
          </a>
        </div>
        <div className="instagram">
          <p>Pierre.souza</p>
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
          {FooterImages.map(({ img, link, id }) => {
            return (
              <a href={link} key={id}>
                <img src={img} alt="" />
              </a>
            );
          })}
        </div>
      </Container>
    </>
  );
}
