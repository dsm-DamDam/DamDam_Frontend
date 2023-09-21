import { styled } from "styled-components/native";
import { View, Text } from "react-native";
import { theme } from "../../style/theme";

function Times() {
  return (
    <TimeContainer>
      <DateText>{'오늘'}</DateText>
      <CounterText>{'1회'}</CounterText>
    </TimeContainer>
  );
}

export default function NumberOfTime() {
  return (
    <Container>
      <Times />
      <Contour />
      <Times />
      <Contour />
      <Times />
    </Container>
  );
}

const Container = styled(View)`
  height: 12%;
  width: 75%;
  margin-top: 5%;
  flex-direction: row;
`;

const Contour = styled(View)`
  height: 100%;
  width: 1px;
  background-color: ${theme.color.gray_400};
`;

const TimeContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const DateText = styled(Text)`
  font-size: 13px;
  font-family: "NotoSansKR-Regular";
  color: ${theme.color.gray_600};
`;

const CounterText = styled(Text)`
  font-size: 18px;
  font-family: 'NotoSansKR-Medium';
  color: ${theme.color.gray_900};
`