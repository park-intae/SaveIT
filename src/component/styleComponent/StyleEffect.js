import { keyframes } from "styled-components";

export const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgb(247, 247, 255);
  }
  50% {
    box-shadow: 0 0 0 3px rgb(247, 247, 255);
  }
  0% {
    box-shadow: 0 0 0 0 rgb(247, 247, 255);
  }
`;