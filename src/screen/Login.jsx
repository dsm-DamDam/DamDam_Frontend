import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styled from "styled-components/native";
import { theme } from "../style/theme";
import TextField from "../components/common/TextField";
import { useInput } from "../hooks/useInput";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const navi = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const { value: inputValue, onChangeText: setInputValue } = useInput({
    id: "",
    pw: "",
  });

  //userID - dsm0000
  //PW - dsm2310!

  // const LoginApi = async () => {
  //   navi.navigate("TabRouter");
  //   await axios
  //     .post(`${BASE_URL}/user/login`, {
  //       userID: inputValue.id,
  //       password: inputValue.pw,
  //     })
  //     .then(async (response) => {
  //       const token = response.data.access_token;
  //       if (token) {
  //         console.log("토큰 = " + token);
  //         await AsyncStorage.setItem("access_token", token);
  //         navi.navigate("TabRouter");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const LoginApi = () => {
    navi.navigate("TapRouter");
  };

  return (
    <Container>
      <Logo source={require("../assets/images/LoginLogo.png")} />
      <TextFields>
        <TextField_
          value={inputValue.id}
          onChangeText={(text) => {
            setInputValue("id", text);
          }}
          placeholder="아이디"
        />
        <TextField_
          value={inputValue.pw}
          onChangeText={(text) => {
            setInputValue("pw", text);
          }}
          placeholder="비밀번호"
          passwordType
        />
      </TextFields>
      <CheckboxContainer>
        <Pressable
          onPress={() => {
            setSelection(!isSelected);
          }}
        >
          <AutoButton color={isSelected} />
        </Pressable>
        <AutoText>자동 로그인</AutoText>
      </CheckboxContainer>

      <LoginButton
        onPress={LoginApi}
        disabled={!inputValue.id || !inputValue.pw}
      >
        <LoginText>로그인</LoginText>
      </LoginButton>
      <SUBox>
        <NotMember>아직 회원이 아니신가요?</NotMember>
        <SignUp onPress={() => navi.navigate("Signup_1")}>회원가입</SignUp>
      </SUBox>
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  padding: 71px 0 63px;
  align-items: center;
  background-color: ${theme.color.white};
`;

const TextFields = styled(View)`
  width: 340px;
`;

const Logo = styled(Image)`
  margin-bottom: 83px;
`;

const TextField_ = styled(TextField)`
  margin-bottom: 14px;
`;

const CheckboxContainer = styled(View)`
  flex-direction: row;
  margin-bottom: 36px;
  margin-right: 240px;
`;

const AutoButton = styled(View)`
  width: 20px;
  height: 20px;
  border: 1px solid ${theme.color.gray_300};
  border-radius: 50px;
  background-color: ${(props) =>
    props.color ? theme.color.brand_color : theme.color.white};
`;

const AutoText = styled(Text)`
  margin-left: 6px;
  color: ${theme.color.gray_600};
`;

const LoginButton = styled(Pressable)`
  width: 340px;
  height: 60px;
  vertical-align: middle;
  background-color: ${theme.color.brand_color};
  border-radius: 2px;
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;
`;

const LoginText = styled(Text)`
  color: ${theme.color.white};
  font-size: 20px;
  font-weight: 900;
  text-align: center;
`;

const SUBox = styled(View)`
  flex-direction: row;
  margin-top: 24px;
`;

const NotMember = styled(Text)`
  color: ${theme.color.gray_600};
  margin-right: 5px;
`;

const SignUp = styled(Text)`
  color: ${theme.color.black};
`;

export default Login;
