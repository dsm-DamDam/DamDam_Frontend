import styled from "styled-components/native";
import { Text, View } from "react-native";

function Shop({ navigation }) {
  return (
    <Container>
      <Text>Shop</Text>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Shop;
