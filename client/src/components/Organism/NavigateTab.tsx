import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalTabWrapper } from "../CSS/Global/GlobalWrapper";
import { handleScroll } from "../Function/scroll";

export interface NavigateTabInterface {
  tabArr: { title: string; moveURL: string }[];
}

const NavigateTab: React.FC<NavigateTabInterface> = ({ tabArr }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // url의 쿼리스트링을 가져온다
  const queryString = new URLSearchParams(location.search);
  const queryDay = queryString.get("updateDay");
  // 스크롤 위치 값
  const [scrollData, setScrollData] = useState<number>(0);
  // 스크롤이 진행중인지 확인
  const [scrollAction, setScrollAction] = useState<boolean>(false);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 스크롤이 위, 아래로 이동함에 따라 tabDiv 위치 변경
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    const scrollCallback = () => {
      handleScroll(scrollData, setScrollData, setScrollAction, 0);
    };

    window.addEventListener("scroll", scrollCallback);
    console.log(scrollData);

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [scrollData]);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 요일 변경 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleNavigate = (moveURL: string) => {
    // 쿼리스트링 객체 세팅
    queryString.set("updateDay", moveURL);
    queryString.set("page", "1");
    queryString.delete("keyword");
    // 변경된 쿼리스트링으로 이동
    navigate(`${location.pathname}?${queryString.toString()}`);
  };

  return (
    <GlobalTabWrapper $scrollAction={scrollAction}>
      <ul className="between-ul">
        {tabArr.map((it, idx) => (
          <li
            key={idx}
            className={"move" + (queryDay === it.moveURL ? " here" : "")}
            onClick={() => handleNavigate(it.moveURL)}
          >
            {it.title}
          </li>
        ))}
      </ul>
    </GlobalTabWrapper>
  );
};

export default NavigateTab;
