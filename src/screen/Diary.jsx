import styled from "styled-components";
import { Text } from "react-native";

function Diary({ navigation }) {
  return (
    <Container>
      <Text>Diary</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Diary;
