import { Text } from "react-native";
import styled from "styled-components";
import { theme } from "../style/theme";
import _User_info from "../assets/icons/_user_info";

function Profile() {
  return (
    <Container>
      <Text>Profile</Text>
      <Userbox>
        <UserCircle>
          <_User_info />
        </UserCircle>
      </Userbox>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Userbox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 85px;
  width: 85%;
  border-radius: 10px;
  background-color: ${theme.color.gray_100};
`;

const UserCircle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid ${theme.color.gray_300};
  align-items: center;
  justify-content: center;
`;

export default Profile;
