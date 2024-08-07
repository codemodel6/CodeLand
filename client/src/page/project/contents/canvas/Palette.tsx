import React from "react";
import styled from "styled-components";
import { MainColor } from "../../../../components/CSS/Color/ColorNote";
import eraser from "../../../../components/CSS/image/eraser.png";

const PaletteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 15%;
  height: 85%;
  border: 1px solid ${MainColor.Main100};
  border-radius: 10px;
  padding: 50px 30px 180px 30px;
  margin-right: 30px;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const ColorButton = styled.div<{ color: string }>`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  border: 1px solid black;
  cursor: pointer;
`;

interface PaletteProps {
  setLineColor: React.Dispatch<React.SetStateAction<string>>;
}

const colorList = [
  { color: "black" },
  { color: "white" },
  { color: "red" },
  { color: "orange" },
  { color: "yellow" },
  { color: "green" },
  { color: "blue" },
  { color: "purple" },
  { color: "pink" },
];

const Palette: React.FC<PaletteProps> = ({ setLineColor }) => {
  return (
    <PaletteWrapper>
      {colorList.map((it, idx) => (
        <ColorButton color={it.color} onClick={() => setLineColor(it.color)} />
      ))}
      <img
        src={eraser}
        alt="지우개"
        onClick={() => setLineColor("white")}
      ></img>
    </PaletteWrapper>
  );
};

export default Palette;
