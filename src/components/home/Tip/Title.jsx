import { styled } from "styled-components/native";
import { View, Text } from "react-native";
import { theme } from "../../../style/theme";

export default function TipsTitle() {
  return (
    <Wrapper>
      <DefText>오늘의</DefText>
      <MainText>Tip</MainText>
    </Wrapper>
  );
}

const Wrapper = styled(View)`
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

const DefText = styled(Text)`
  font-size: 16px;
  font-family: "NotoSansKR-Bold";
  color: ${theme.color.black};
`;
const MainText = styled(Text)`
  color: ${theme.color.green_700};
  font-size: 22px;
  font-family: "Roboto-Bold";
`;
