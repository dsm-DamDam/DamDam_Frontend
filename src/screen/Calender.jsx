import styled from "styled-components";
import { Text } from "react-native";

function Calender({ navigation }) {
  return (
    <Container>
      <Text>Calender</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Calender;
