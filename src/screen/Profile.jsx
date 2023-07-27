import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { theme } from "../style/theme";
import _User_info from "../assets/icons/_user_info";
import _Light_Mode from "../assets/icons/_light_mode";
import _Support from "../assets/icons/_support";
import _Logout from "../assets/icons/_logout";

function Profile() {
  return (
    <Container>

      <Userbox>
        <UserCircle>
          <_User_info />
        </UserCircle>
        <TextWraaper>
          <Title>회원 정보</Title>
          <SubTitle>자신의 정보를 확인하거나 수정해요!</SubTitle>
        </TextWraaper>
      </Userbox>

      <Userbox>
        <UserCircle>
          <_Light_Mode />
        </UserCircle>
        <TextWraaper>
          <Title>화이트/타크모드</Title>
          <SubTitle>자신의 취향에 맞게 테마를 정해봐요</SubTitle>
        </TextWraaper>
      </Userbox>

      <Userbox>
        <UserCircle>
          <_Support />
        </UserCircle>
        <TextWraaper>
          <Title>고객센터</Title>
          <SubTitle>문의사항이나 궁금한 점, 버그를 제보해주세요</SubTitle>
        </TextWraaper>
      </Userbox>

      <Userbox>
        <UserCircle>
          <_Logout />
        </UserCircle>
        <TextWraaper>
          <Title>로그아웃</Title>
          <SubTitle>로그아웃해도 언제든지 다시 돌아올 수 있어요</SubTitle>
        </TextWraaper>
      </Userbox>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Userbox = styled(TouchableOpacity)`
  align-items: center;
  justify-content: flex-start;
  height: 85px;
  width: 85%;
  padding-left: 5%;
  margin-bottom: 4%;
  border-radius: 10px;
  background-color: ${theme.color.gray_100};
  flex-direction: row;
`;

const UserCircle = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid ${theme.color.gray_300};
  float: left;
  justify-content: center;
  align-items: center;
`;

const TextWraaper = styled(View)`
  width: auto;
  height: auto;
  align-items: flex-start;
  justify-content: center;
  padding-left: 3%;
`;

const Title = styled(Text)`
  font-size: 15px;
`;

const SubTitle = styled(Text)`
  font-size: 10px;
  color: ${theme.color.gray_600};
`;

export default Profile;
