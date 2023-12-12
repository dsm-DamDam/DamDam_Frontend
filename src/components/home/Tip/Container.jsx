import { styled } from "styled-components/native";
import { View, Text } from "react-native";
import { theme } from "../../../style/theme";

export default function TipsContainer() {
  return (
    <Container>
      <Title>😀 금연 사실을 주변에 알리기</Title>
      <Contants>
        금연을 마음먹으면, 다른 사람들에게 자신의 금연 사실을 알려 의지가 약해질
        경우 주변의 가족과 동료의 도움을 받으면 도움이 됩니다. 또, 일반
        가정의학과나 호흡기 내과, 금연 클리닉 같은 기관에서 상담이나 프로그램을
        통해 금연에 도움을 주는 사람들을 만나는 것 또한 도움이 됩니다.
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
  color: ${theme.color.black};
`;
const Contants = styled(Text)`
  font-size: 14px;
  color: ${theme.color.black};
`;
