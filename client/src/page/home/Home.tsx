/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /home 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import HmBook from "./area/HmBook";
import HmCarousel from "./area/HmCarousel";
import HmDream from "./area/HmDream";
import HmMove from "./area/HmMove";
import HmPreview from "./area/HmPreview";

const Home = () => {
  return (
    <GlobalWrapper height={"4200px"}>
      <HmCarousel />
      <HmMove />
      <HmBook />
      <HmPreview />
      <HmDream />
    </GlobalWrapper>
  );
};

export default Home;
