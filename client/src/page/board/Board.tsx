/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /board 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useState } from "react";
import styled from "styled-components";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import towers from "../../components/CSS/image/towers.jpg";
import WriteModal from "../../components/Molecule/Modal/WriteModal";
import OrTab from "../../components/Organism/ScrollTab";
import GlobalTitle from "../../components/Organism/GlobalTitle";
import { boardTabArr } from "../../components/dummy/TabArr";
import BoardContent from "./area/BoardContent";
import BoardList from "./area/BoardList";
import BoardTopic from "./area/BoardTopic";
import { handleModal } from "../../components/Function/modal";

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90%;

  .boardListWrapper {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
    position: relative;
  }
`;

interface ToggleFun {
  (): void;
}

const Board = () => {
  // 게시판을 보여주는 state
  const [toggle, setToggle] = useState<boolean>(false);
  // DB에서 가져온 BoardList State
  const [myContent, setMyContent] = useState<{}>({});
  // 모달 state
  const [modalState, setModalState] = useState<boolean>(false);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 - 함수 기능 : 게시판을 불러오는 기능
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleToggle: ToggleFun = () => {
    setToggle(true);
    // 데이터 불러오면 될듯?
  };

  return (
    <GlobalWrapper height="2700px">
      <GlobalTitle
        imageUrl={towers}
        mainText="게시판을 만들껍니다"
        subText="Board"
      />
      <OrTab tabArr={boardTabArr} />
      <BoardWrapper>
        <div className="boardListWrapper">
          <BoardList
            modalState={modalState}
            setModalState={setModalState}
            toggle={toggle}
            handleToggle={handleToggle}
          />
          <BoardContent toggle={toggle} setToggle={setToggle} />
        </div>
        <div className="boardListWrapper">
          <BoardTopic />
        </div>
      </BoardWrapper>
      <WriteModal modalState={modalState} setModalState={setModalState} />
    </GlobalWrapper>
  );
};

export default Board;
