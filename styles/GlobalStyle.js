import { createGlobalStyle } from "styled-components";

export const standard = {
  mainColor: "#eaeaea",
  secondaryColor: "#fff",

  borderColor: "#c1c1c1",

  mainText: "black",
  secondaryText: "#4b5156",

  themeDotBorder: "#24292e",

  previewBg: "#fbf9f3",

  previewShadow: "#f0ead6",

  buttonColor: "black",
};

export const blue = {
  mainColor: "#15202b",
  secondaryColor: "#192734",

  borderColor: "#164d56",

  mainText: "#fff",
  secondaryText: "#eee",

  themeDotBorder: "#fff",

  previewBg: "#192734",

  previewShadow: "#111921",

  buttonColor: "#1782b8",
};

export const GlobalStyle = createGlobalStyle`
    
        @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Russo+One&display=swap");
        :root {
           
    }
   html,
    body * {
    transition: 0.4s;
    }

    body {
    margin: 0;
    padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
    color: ${({ theme }) => theme.mainText};
    font-family: "Russo One", sans-serif;
    font-weight: 500;
    }

    p,
    li,
    span,
    label,
    input,
    textarea {
    color:  ${({ theme }) => theme.secondaryText};
    font-family: "Roboto Mono", monospace;
    }

    .s1 {
    background-color:  ${({ theme }) => theme.mainColor};
    border-bottom: 1px solid  ${({ theme }) => theme.borderColor};
    overflow: auto;
    }

    .s2 {
    background-color:  ${({ theme }) => theme.secondaryColor};
    border-bottom: 1px solid  ${({ theme }) => theme.borderColor};
    overflow: auto;
    }

    a,
    span {
    text-decoration: none;
    color: #17a2b8;
    }

    ul {
    list-style: none;
    }

    h1 {
    font-size: 56px;
    }
    h2 {
    font-size: 36px;
    }
    h3 {
    font-size: 28px;
    }
    h4 {
    font-size: 24px;
    }
    h5 {
    font-size: 20px;
    }
    h6 {
    font-size: 16px;
    }

    .main-container {
    width: 1200px;
    margin: 0 auto;
    }

    .greeting-wrapper {
    display: grid;
    text-align: center;
    align-content: center;
    min-height: 0em;
    }

    .intro-wrapper {
    background-color:  ${({ theme }) => theme.secondaryColor};
    border: 1px solid  ${({ theme }) => theme.borderColor};
    border-radius: 5px 5px 0 0;

    -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 90.75);
    -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 90.75);
    box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 90.75);

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "nav-wrapper nav-wrapper"
        "left-column right-column";
    }

    .nav-wrapper {
    grid-area: nav-wrapper;
    border-bottom: 1px solid  ${({ theme }) => theme.borderColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  ${({ theme }) => theme.mainColor};

    border-radius: 5px 5px 0 0;
    }

    #navigation {
    display: flex;
    margin: 0;
    padding: 10px;
    }

    #navigation li {
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
    }

    #navigation a {
    color:  ${({ theme }) => theme.mainText};
    }

    .dots-wrapper {
    display: flex;
    padding: 10px;
    }

    .browser-dot {
    background-color: black;
    height: 15px;
    width: 15px;
    border-radius: 50%;

    -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 90.75);
    -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 90.75);
    box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 90.75);

    margin: 5px;
    }

    .dots-wrapper div:nth-child(1) {
    background-color: #fc6057;
    }

    .dots-wrapper div:nth-child(2) {
    background-color: #fec02f;
    }

    .dots-wrapper div:nth-child(3) {
    background-color: #2aca3e;
    }

    .left-column {
    grid-area: left-column;
    padding-top: 50px;
    padding-bottom: 50px;
    }

    .profile_pic {
    display: block;
    margin: 0 auto;

    width: 200px;
    height: 200px;
    object-fit: cover;
    border: 2px solid  ${({ theme }) => theme.borderColor};
    }
    #theme-options-wrapper {
    display: flex;
    justify-content: center;

    height: 3em;
    }

    .theme-dot {
    height: 30px;
    width: 30px;
    border-radius: 50%;

    margin: 5px;
    border: 2px solid  ${({ theme }) => theme.themeDotBorder};

    -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 90.75);
    -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 90.75);
    box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 90.75);

    cursor: pointer;
    }

    .theme-dot:hover {
    border-width: 5px;
    }

    #light-mode {
    background-color: #fff;
    }

    #blue-mode {
    background-color: #192734;
    }

    #green-mode {
    background-color: #78866b;
    }

    #purple-mode {
    background-color: #7e4c74;
    }

    #settings-note {
    font-size: 12px;
    font-style: italic;
    text-align: center;
    }

    .right-column {
    grid-area: right-column;
    display: grid;
    align-content: center;

    padding-top: 50px;
    padding-bottom: 50px;
    }

    .preview-shadow {
    background-color:  ${({ theme }) => theme.previewShadow};

    width: 300px;
    height: 180px;
    padding-left: 30px;
    padding-top: 30px;
    }

    .preview {
    width: 300px;
    border: 1.5px solid #17a2b8;
    background-color:  ${({ theme }) => theme.previewBg};
    opacity: 0.8;
    padding: 15px;

    position: relative;
    }

    .corner {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1.5px solid #17a2b8;
    background-color: #fff;
    position: absolute;
    }

    .corner-tl {
    top: -5px;
    left: -5px;
    }

    .corner-tr {
    top: -5px;
    right: -5px;
    }

    .corner-bl {
    bottom: -5px;
    left: -5px;
    }

    .corner-br {
    bottom: -5px;
    right: -5px;
    }

    .about-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    }

    #skills {
    display: flex;
    justify-content: space-evenly;
    background-color:  ${({ theme }) => theme.previewShadow};
    }

    .social-label {
    font-weight: bold;
    }

    .social-links {
    display: grid;
    text-align: center;
    }

    .social-img {
    width: 70%;
    max-width: 350px;
    object-fit: cover;
    border: 2px solid  ${({ theme }) => theme.borderColor};
    margin-bottom: 0;
    }

    .social-img:hover {
    transform: scale(1.02);
    }

    .post-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, 320px);
    grid-gap: 20px;
    justify-content: center;
    padding-bottom: 50px;
    }

    .post {
    border: 1px solid  ${({ theme }) => theme.borderColor};

    -webkit-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 90.75);
    -moz-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 90.75);
    box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 90.75);
    }

    .thumbnail {
    width: 100%;
    height: 180px;
    display: block;
    object-fit: cover;
    }

    .post-preview {
    background-color: #fff;
    padding: 15px;
    }

    .post-title {
    color: black;
    margin: 0;
    }

    .post-intro {
    color: #4b5156;
    font-size: 14px;
    }

    #contact-form {
    display: block;
    max-width: 600px;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid  ${({ theme }) => theme.borderColor};
    border-radius: 5px;
    background-color:  ${({ theme }) => theme.mainColor};
    margin-bottom: 50px;
    }

    #contact-form label {
    line-height: 2.7em;
    }

    #contact-form textarea {
    height: fit-content;
    min-height: 100px;
    font-size: 14px;
    }

    .input-field {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color:  ${({ theme }) => theme.secondaryColor};
    border-radius: 5px;
    border: 1px solid  ${({ theme }) => theme.borderColor};
    font-size: 14px;
    }

    #submit-btn {
    margin-top: 10px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    background-color:  ${({ theme }) => theme.buttonColor};
    border: none;
    }

    @media screen and (max-width: 1200px) {
    .main-container {
        width: 95%;
    }
    }

    @media screen and (max-width: 800px) {
    .intro-wrapper {
        grid-template-columns: 1fr;
        grid-template-areas:
        "nav-wrapper"
        "left-column"
        "right-column";
        padding-bottom: 20px;
    }

    .right-column {
        justify-content: center;
    }
    }

    @media screen and (max-width: 450px) {
    .preview,
    .preview-shadow {
        width: 220px;
    }
    .right-column {
        justify-content: center;
        padding: 20px;
        padding-bottom: 90px;
    }
    }
`;
