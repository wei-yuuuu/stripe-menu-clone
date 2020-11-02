import { css } from "styled-components";

const h3 = css`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #32325d;
`;

const p = css`
  color: #6b7c93;
`;

const hover = css`
  cursor: pointer;
  transition: opacity 0.1s ease-in;
  &:hover {
    opacity: 0.7;
  }
`;

export { h3, p, hover };
