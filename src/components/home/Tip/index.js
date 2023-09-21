import TipsTitle from "./Title";
import TipsContainer from "./Container";
import { styled } from "styled-components/native";
import { View } from "react-native";

export default function ToDayTips() {
  return (
    <Wrapper>
      <TipsTitle />
      <TipsContainer />
    </Wrapper>
  );
}

const Wrapper = styled(View)`
  flex: 5;
  width: 100%;
  margin-top: 5%;
`;
