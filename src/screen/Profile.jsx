import { Text } from "react-native";
import styled from "styled-components";

function Profile({ navigation }) {
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Profile;
