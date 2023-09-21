import { styled } from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { theme } from "../../style/theme";

export default function MyCard() {
  return (
    <Container>
      <></>
    </Container>
  );
}

const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 100px;
  background-color: ${theme.color.white};
  flex-direction: row;
  gap: 10px;
  margin-bottom: 15px;
`;


