import styled from "styled-components";
import { Text } from "react-native";

function Home() {

  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Home;
