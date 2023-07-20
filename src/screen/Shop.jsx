import styled from "styled-components";
import { Text } from "react-native";

function Shop({ navigation }) {
  return (
    <Container>
      <Text>Shop</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Shop;
