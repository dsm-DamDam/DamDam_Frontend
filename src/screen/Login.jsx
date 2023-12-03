import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Alert, Image } from "react-native";
import { useState } from "react";
import styled from "styled-components/native";
import { theme } from "../style/theme";
import TextField from "../components/common/TextField";
import { useInput } from "../hooks/useInput";
import axios from "axios";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function Login({ navigation }) {
  const navi = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const { value: idValue, onChangeText: idOnchangeText } = useInput("");
  const { value: pwValue, onChangeText: pwOnChangeText } = useInput("");

  //userID - dsm0000
  //PW - dsm2310!

  const LoginApi = async () => {
    await axios
      .post(`${BASE_URL}/user/login`, {
        userID: idValue,
        password: pwValue,
      })
      .then(async (response) => {
        const token = response.data.access_token;
        if (token) {
          console.log("토큰 = " + token);
          await AsyncStorage.setItem("access_token", token);
          navi.navigate("TabRouter");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Logo source={require("../assets/images/LoginLogo.png")} />
      <TextField_
        value={idValue}
        onChangeText={idOnchangeText}
        placeholder="아이디"
      />
      <TextField_
        value={pwValue}
        onChangeText={pwOnChangeText}
        placeholder="비밀번호"
        passwordType
      />

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

      <Pressable onPress={LoginApi} disabled={!idValue || !pwValue}>
        <LoginButton>로그인</LoginButton>
      </Pressable>
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

const LoginButton = styled(Text)`
  width: 340px;
  height: 60px;
  text-align: center;
  vertical-align: middle;
  color: ${theme.color.white};
  font-size: 18px;
  font-weight: 600;
  background-color: ${theme.color.brand_color};
  border-radius: 2px;
  margin-bottom: 24px;
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
  color: ${theme.color.balck};
`;

export default Login;
