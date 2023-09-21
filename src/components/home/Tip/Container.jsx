import { styled } from "styled-components/native";
import { View, Text } from "react-native";
import { theme } from "../../../style/theme";

export default function TipsContainer() {
  return (
    <Container>
      <Title>제목</Title>
      <Contants>
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
      </Contants>
    </Container>
  );
}

const Container = styled(View)`
  background-color: ${theme.color.blue_100};
  margin: 5% 0;
  border-radius: 5px;
  padding: 5% 7% 8% 7%;
  gap: 10px;
`;

const Title = styled(Text)`
  font-size: 16px;
  font-family: "NotoSansKR-Bold";
  color: ${theme.color.balck};
`;
const Contants = styled(Text)`
  font-size: 14px;
  color: ${theme.color.balck};
`;
