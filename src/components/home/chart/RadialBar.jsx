import { ProgressCircle } from "react-native-svg-charts";
import { theme } from "../../../style/theme";
import styled from "styled-components/native";
import { Text, View } from "react-native";

export default function ProgressCircleComponent({ currentValue, maxValue }) {
  return (
    <Wrapper>
      <ProgressWrapper>
        <CurrentValueText>
          {currentValue}
          <MaxValueText>{" /" + maxValue}</MaxValueText>
        </CurrentValueText>
        <Coments>잘하고 있어요!</Coments>
      </ProgressWrapper>
      <ProgressCircle
        style={{ height: 200, width: 200 }}
        progress={currentValue / maxValue}
        progressColor={theme.color.green_500}
        backgroundColor={theme.color.gray_300}
        strokeWidth={20}
      />
    </Wrapper>
  );
}

const Wrapper = styled(View)`
  position: relative;
`;
const ProgressWrapper = styled(View)`
  width: 200px;
  height: 200px;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding-bottom: 8px;
`;
const CurrentValueText = styled(Text)`
  color: ${theme.color.balck};
  font-family: "Roboto-Bold";
  font-size: 45px;
  margin-left: 5%;
`;
const MaxValueText = styled(Text)`
  color: ${theme.color.gray_600};
  font-family: "Roboto-Light";
  font-size: 20px;
`;
const Coments = styled(Text)`
  color: ${theme.color.balck};
  font-size: 15px;
  line-height: 18px;
`;
