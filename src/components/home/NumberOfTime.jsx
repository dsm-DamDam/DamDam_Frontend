import { styled } from "styled-components/native";
import { View, Text } from "react-native";
import { theme } from "../../style/theme";

function Times({ total_count, day }) {
  return (
    <TimeContainer>
      <DateText>{day}</DateText>
      <CounterText>{total_count}회</CounterText>
    </TimeContainer>
  );
}

export default function NumberOfTime({ currentValue }) {
  return (
    <Container>
      <Times total_count={currentValue} day="오늘" />
      <Contour />
      <Times total_count={3} day="이번주" />
      <Contour />
      <Times total_count={15} day="이번달" />
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
  color: ${theme.color.gray_900};
`;
