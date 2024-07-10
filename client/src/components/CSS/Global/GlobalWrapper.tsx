/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 컴포넌트를 감싸는 css
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import { aroundRow, betweenRow, centerColumn } from "./GlobalDisplay";
import { FontSize, GrayColor, MainColor, WhiteColor } from "../Color/ColorNote";

export const GlobalWrapper = styled.div<{ height: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
`;

export const AsideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: pink;
`;

export const GlobalTabWrapper = styled.div<{ $scrollAction: boolean }>`
  ${centerColumn}
  width: 100%;
  height: 80px;
  position: sticky;
  // 스크롤에 따라 위치 변경
  top: ${(props) => (props.$scrollAction ? "0" : "80px")};
  transition: top 0.8s ease; // 속성, 지속시간, 타이밍함수
  background-color: ${WhiteColor.White100};
  z-index: 99;
  border-bottom: 1px solid ${GrayColor.Gray000};

  ul {
    ${aroundRow}
    width: 80%;
    height: 100%;

    li {
      ${centerColumn}
      height: 80%;
      font-size: 20px;
      color: ${GrayColor.Gray100};
      font-weight: bold;
      cursor: pointer;
      border-radius: 50%;

      &.here {
        background-color: ${MainColor.Main100};
        color: white;
      }
    }

    .move {
      width: 50px;
    }
  }
`;

// 수정 요망
export const GlobalSecondTabWrapper = styled.div<{ $scrollAction: boolean }>`
  display: flex;
  width: 100%;
  height: 80px;
  position: sticky;
  background-color: ${WhiteColor.White100};
  border-bottom: 1px solid ${GrayColor.Gray000};
  transition: opacity 0.8s ease, top 0.8s ease; // 속성, 지속시간, 타이밍함수
  transition-delay: ${(props) => (props.$scrollAction ? "0s" : "0.2s")};
  z-index: 98;
  top: ${(props) => (props.$scrollAction ? "0" : "137px")};
  opacity: ${(props) => (props.$scrollAction ? "0" : "1")};
  padding: 0 15% 0 15%;

  .input-wrapper {
    ${betweenRow}
    width: 70%;
    height: 100%;

    input {
      font-size: ${FontSize.large};
      width: 94%;
      height: 100%;
      padding: 0 20px 0 20px;

      &:focus-within {
        outline: none;
      }
    }

    button {
      background-color: ${MainColor.Main100};
      width: 6%;
      height: 100%;

      img {
        width: 50%;
        height: 50%;
      }
    }

    &:focus-within {
      border: 5px solid ${MainColor.Main300};
    }
  }
`;
