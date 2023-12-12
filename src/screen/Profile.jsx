import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { theme } from "../style/theme";
import _User_info from "../assets/icons/_user_info";
import _Light_Mode from "../assets/icons/_light_mode";
import _Support from "../assets/icons/_support";
import _Logout from "../assets/icons/_logout";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "@env";
import { useCallback, useContext, useState } from "react";
import { GetUserApi } from "../api/getUser";
import { Image } from "react-native";
import * as Linking from "expo-linking";
import { UserContext } from "../useContext/Context";

function Profile() {
  const navigatioin = useNavigation();

  const { userInfo } = useContext(UserContext);

  // useFocusEffect(
  //   useCallback(() => {
  //     GetUserApi().then((e) => {
  //       setUserInfo(e);
  //     });
  //   }, [])
  // );

  return (
    <Container>
      <Photo
        source={{
          uri: "https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw",
        }}
      />

      <User_namebox>
        <User_naming>{userInfo.nickname}</User_naming>
        <User_mail>@{userInfo.userId.split("@")[0]}</User_mail>
      </User_namebox>
      {/* 
      <User_PD>
        <Point_box>
          <Point_text>포인트</Point_text>
          <Point_number>400</Point_number>
        </Point_box>
        <Center_line />
        <Effort_box>
          <Effort_text>노력중</Effort_text>
          <Effort_number>13일</Effort_number>
        </Effort_box>
      </User_PD> */}

      <Userbox_info
        onPress={() => {
          navigatioin.navigate("InfoPage");
        }}
      >
        <UserCircle>
          <_User_info />
        </UserCircle>
        <TextWraaper>
          <Title>회원 정보</Title>
          <SubTitle>자신의 정보를 확인하거나 수정해요!</SubTitle>
        </TextWraaper>
      </Userbox_info>

      {/* <Userbox>
        <UserCircle>
          <_Light_Mode />
        </UserCircle>
        <TextWraaper>
          <Title>화이트/타크모드</Title>
          <SubTitle>자신의 취향에 맞게 테마를 정해봐요</SubTitle>
        </TextWraaper>
      </Userbox> */}
      {/**https://forms.gle/rwCzyRr1ECmJyGHb8 */}
      <Userbox_sup
        onPress={() => {
          Linking.openURL("https://forms.gle/rwCzyRr1ECmJyGHb8");
        }}
      >
        <UserCircle>
          <_Support />
        </UserCircle>
        <TextWraaper>
          <Title>고객센터</Title>
          <SubTitle>문의사항이나 궁금한 점, 버그를 제보해주세요</SubTitle>
        </TextWraaper>
      </Userbox_sup>

      <Userbox_log onPress={() => {}}>
        <UserCircle>
          <_Logout />
        </UserCircle>
        <TextWraaper>
          <Title>로그아웃</Title>
          <SubTitle>로그아웃해도 언제든지 다시 돌아올 수 있어요</SubTitle>
        </TextWraaper>
      </Userbox_log>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white};
`;

const Photo = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 4%;
  background-color: ${theme.color.gray_400};
  border-width: 1px;
  border-color: #e5e5e5;
`;

const User_namebox = styled(View)`
  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20%;
`;
const User_naming = styled(Text)`
  font-size: 15px;
`;
const User_mail = styled(Text)`
  font-size: 10px;
  color: ${theme.color.gray_600};
`;

const User_PD = styled(View)`
  width: auto;
  height: auto;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 8%;
`;

const Point_box = styled(View)`
  width: auto;
  height: auto;
`;

const Point_text = styled(Text)`
  font-size: 10px;
`;

const Point_number = styled(Text)`
  font-size: 15px;
  color: ${theme.color.black};
`;

const Center_line = styled(View)`
  width: 1px;
  border-width: 100px;
  height: 40px;
  margin-left: 15%;
  margin-right: 15%;
  border: 1px solid ${theme.color.gray_400};
`;

const Effort_box = styled(View)`
  width: auto;
  height: auto;
`;

const Effort_text = styled(Text)`
  font-size: 10px;
`;

const Effort_number = styled(Text)`
  font-size: 15px;
  color: ${theme.color.black};
`;

const Userbox_info = styled(TouchableOpacity)`
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

const Userbox_sup = styled(TouchableOpacity)`
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

const Userbox_log = styled(TouchableOpacity)`
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
