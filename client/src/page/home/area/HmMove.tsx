import React, { useEffect, useRef, useState } from "react";
import { GlobalBlock } from "../../../components/CSS/Global/GlobalBlock";
import styled from "styled-components";
import codeLand from "../../../components/CSS/image/FooterImg/github.png";
import computer from "../../../components/CSS/image/HomeImg/computer.png";
import cat from "../../../components/CSS/image/HomeImg/cat.png";
import dog from "../../../components/CSS/image/MusicImg/random.png";
import { handleScrollAnimation } from "../../../components/Function/scroll";
import jersey from "../../../components/CSS/image/HomeImg/jersey.jpg";
import { GrayColor } from "../../../components/CSS/Color/ColorNote";

const MoveWrapper = styled.section<{
  topAnimation: string;
  bottomAnimation: string;
  imgAnimation: string;
  img2Animation: string;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  color: ${GrayColor.Gray100};

  .photo {
    position: absolute;
    top: 100px;
    right: 200px;
  }

  .topText {
    width: 100px;
    position: absolute;
    font-size: 30px;
    width: 500px;
    top: 150px;
    left: 200px;
    opacity: 0;
    animation: ${(props) => props.topAnimation} 1s ease-out forwards;
  }

  .bottomText {
    width: 200px;
    position: absolute;
    font-size: 30px;
    width: 500px;
    bottom: 200px;
    right: 100px;
    opacity: 1;
    font-weight: bold;
    animation: ${(props) => props.bottomAnimation} 1s ease-out forwards;
  }

  .codelandImg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${(props) => props.imgAnimation} 1s ease-out forwards;
    opacity: 0;
  }

  .computerImg {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 20%;
    right: 30%;
    animation: ${(props) => props.img2Animation} 1s ease-out forwards;
    animation-delay: 0.2s;
    opacity: 0;
  }

  .catImg {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 20%;
    right: 20%;
    animation: ${(props) => props.img2Animation} 1s ease-out forwards;
    animation-delay: 0.4s;
    opacity: 0;
  }

  .dogImg {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 20%;
    right: 10%;
    animation: ${(props) => props.img2Animation} 1s ease-out forwards;
    animation-delay: 0.6s;
    opacity: 0;
  }

  .dragonImg {
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: 20%;
    animation: ${(props) => props.topAnimation} 1s ease-out forwards;
    animation-delay: 0.6s;
    opacity: 0;
  }

  //--- 상단 글자 애니메이션 ---
  @keyframes topAppear {
    0% {
      left: -100px;
      opacity: 0;
    }
    100% {
      left: 200px;
      opacity: 1;
    }
  }

  @keyframes topDisAppear {
    0% {
      left: 200px;
      opacity: 1;
    }

    100% {
      left: -100px;
      opacity: 0;
    }
  }

  //--- 하단 글자 애니메이션 ---
  @keyframes bottomAppear {
    0% {
      right: -100px;
      opacity: 0;
    }
    100% {
      right: 30px;
      opacity: 1;
    }
  }

  @keyframes bottomDisAppear {
    0% {
      right: 30px;
      opacity: 1;
    }

    100% {
      right: -100px;
      opacity: 0;
    }
  }

  //--- 중앙 이미지 애니메이션 ---
  @keyframes imgAppear {
    0% {
      width: 1px;
      height: 1px;
      opacity: 0;
    }

    100% {
      width: 300px;
      height: 300px;
      opacity: 1;
    }
  }

  @keyframes imgDisAppear {
    0% {
      width: 300px;
      height: 300px;
      opacity: 1;
    }

    100% {
      width: 1px;
      height: 1px;
      opacity: 0;
    }
  }

  //--- 중앙 이미지 애니메이션 ---
  @keyframes img2Appear {
    0% {
      top: 0;
      opacity: 0;
    }

    100% {
      top: 15%;
      opacity: 1;
    }
  }

  @keyframes img2DisAppear {
    0% {
      top: 15%;
      opacity: 1;
    }

    100% {
      top: 0;
      opacity: 0;
    }
  }
`;

const HmMove = () => {
  const [topAnimation, setTopAnimation] = useState<string>("");
  const [topCheck, setTopCheck] = useState<string>("");

  const [bottomAnimation, setBottomAnimation] = useState<string>("");
  const [bottomCheck, setBottomCheck] = useState<string>("");

  const [imgAnimation, setImgAnimation] = useState<string>("");
  const [imgCheck, setImgCheck] = useState<string>("");

  const [img2Animation, setImg2Animation] = useState<string>("");
  const [img2Check, setImg2Check] = useState<string>("");

  useEffect(() => {
    // top 관련 함수 정의
    const topFn = () =>
      handleScrollAnimation(
        300,
        1400,
        150,
        "topAppear",
        "topDisAppear",
        topCheck,
        setTopCheck,
        setTopAnimation
      );
    // bottom 관련 함수 정의
    const bottomFn = () =>
      handleScrollAnimation(
        700,
        1400,
        150,
        "bottomAppear",
        "bottomDisAppear",
        bottomCheck,
        setBottomCheck,
        setBottomAnimation
      );

    const imgFn = () =>
      handleScrollAnimation(
        500,
        1200,
        150,
        "imgAppear",
        "imgDisAppear",
        imgCheck,
        setImgCheck,
        setImgAnimation
      );

    const img2Fn = () =>
      handleScrollAnimation(
        300,
        1100,
        150,
        "img2Appear",
        "img2DisAppear",
        img2Check,
        setImg2Check,
        setImg2Animation
      );

    // 스크롤 이벤트 발생 시 실행
    window.addEventListener("scroll", topFn);
    window.addEventListener("scroll", bottomFn);
    window.addEventListener("scroll", imgFn);
    window.addEventListener("scroll", img2Fn);

    return () => {
      window.removeEventListener("scroll", topFn);
      window.removeEventListener("scroll", bottomFn);
      window.removeEventListener("scroll", imgFn);
      window.removeEventListener("scroll", img2Fn);
    };
  }, [
    topAnimation,
    topCheck,
    bottomAnimation,
    bottomCheck,
    imgAnimation,
    imgCheck,
    img2Animation,
    img2Check,
  ]);

  return (
    <GlobalBlock>
      <MoveWrapper
        topAnimation={topAnimation}
        bottomAnimation={bottomAnimation}
        imgAnimation={imgAnimation}
        img2Animation={img2Animation}
      >
        <h1 className="topText">
          개발자를 위한
          <br />
          쉽게 접근 가능한
        </h1>

        <img className="codelandImg" src={codeLand} alt="메인화면이미지" />
        <img className="computerImg" src={computer} alt="컴퓨터이미지" />
        <img className="catImg" src={cat} alt="고양이이미지" />
        <img className="dogImg" src={dog} alt="강아지이미지" />
        <img className="dragonImg" src={codeLand} alt="드래곤이미지" />
        <h1 className="bottomText">
          코드랜드에 오신것을
          <br />
          환영합니다!
        </h1>
      </MoveWrapper>
    </GlobalBlock>
  );
};

export default HmMove;
