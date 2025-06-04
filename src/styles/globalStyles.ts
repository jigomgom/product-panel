import { css } from "@emotion/react";

const globalStyles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    color: #191f28;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    background-color: none;
    border: none;
    font: inherit;
    outline: none;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  input,
  textarea {
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #c1c9cf;
    }
  }

  ul,
  ol {
    list-style: none;
  }
`;

export default globalStyles;
