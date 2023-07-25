import { Text, View } from "react-native";
import styled from "styled-components/native";

function Profile({ navigation }) {
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Profile;
