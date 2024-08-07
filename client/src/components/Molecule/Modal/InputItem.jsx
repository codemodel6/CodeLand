/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 모달을 보여주기 위한 버튼과 모달이 있는 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useState } from "react";
import styled from "styled-components";
import { GlobalModal, GlobalModalButton } from "../../GlobalCss/GlobalItem";
import ScrollModal from "./ScrollModal";

const InputItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 2px;
`;

const InputItem = ({ modalData, setModalData, type, ArrItem }) => {
  const [modalstate, setModalstate] = useState(false);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 모달을 끈다
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleOnOff = () => {
    setModalstate(!modalstate);
  };

  return (
    <InputItemDiv>
      <GlobalModal value={modalData} readOnly>
        {modalData.map((it, idx) => (
          <div className="modalResult" key={idx}>
            {it}
          </div>
        ))}
      </GlobalModal>
      <GlobalModalButton onClick={handleOnOff}>등록</GlobalModalButton>
      {/* 모달 컴포넌트 */}
      <ScrollModal
        modalstate={modalstate}
        handleOnOff={handleOnOff}
        modalData={modalData}
        setModalData={setModalData}
        type={type}
        ArrItem={ArrItem}
      />
    </InputItemDiv>
  );
};

export default InputItem;
