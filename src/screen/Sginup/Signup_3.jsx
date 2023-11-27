import { useNavigation } from "@react-navigation/core";
import { Image, Pressable, Text, View } from "react-native";
import styled from "styled-components/native";
import TextField from "../../components/common/TextField";
import { useInput } from "../../hooks/useInput";
import { theme } from "../../style/theme";

function Signup_3() {
  const navi = useNavigation();
  const { value, onChangeText } = useInput({
    id: "",
    pw: "",
    ok: "",
  });

  return (
    <Container>
      <Pressable onPress={() => navi.navigate("Login")}>
        <PalletBox>
          <BackImg source={require("../../assets/images/back.png")} />
          <PalletTown>로그인</PalletTown>
        </PalletBox>
      </Pressable>
      <Title>아이디/비밀번호 설정</Title>
      <Sub>안전한 계정을 만들기위한 설정이에요</Sub>
      <TextField_
        value={value.id}
        onChangeText={(text) => onChangeText("id", text)}
        placeholder="아이디"
        helpText="사용하실 아이디를 입력해주세요"
      />
      <TextField_
        value={value.pw}
        onChangeText={(text) => onChangeText("pw", text)}
        placeholder="비밀번호"
        helpText="8자 이상, 특수문자(@, $, !, %, *, #, ?, &)를 포함해야 합니다"
        passwordType
      />
      <TextField_
        value={value.ok}
        onChangeText={(text) => onChangeText("ok", text)}
        placeholder="비밀번호 확인"
        helpText="비밀번호를 한번 더 입력해주세요"
        passwordType
      />
      <MoveBox>
        <BackBox>
          <Pressable onPress={() => navi.navigate("Signup_2")}>
            <Back>이전</Back>
          </Pressable>
        </BackBox>
        <NextBox>
          <Pressable
            onPress={() => {
              navi.navigate("Signup_4");
            }}
            disabled={!value.id || !value.pw || !value.ok}
          >
            <Next>다음</Next>
          </Pressable>
        </NextBox>
      </MoveBox>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  padding: 43px 25px;
  background-color: ${theme.color.white};
`;

const PalletBox = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 88px;
`;

const BackImg = styled(Image)`
  margin-right: 10px;
`;

const PalletTown = styled(Text)`
  color: ${theme.color.gray_600};
  font-size: 16px;
`;

const Title = styled(Text)`
  margin-bottom: 14px;
  font-size: 30px;
  font-weight: 600;
`;

const Sub = styled(Text)`
  font-size: 16px;
  color: ${theme.color.gray_600};
  margin-bottom: 70px;
`;

const TextField_ = styled(TextField)``;

const MoveBox = styled(View)`
  flex-direction: row;
  margin-top: 160px;
`;

const BackBox = styled(View)`
  margin-right: auto;
`;

const Back = styled(Text)`
  font-size: 16px;
  color: ${theme.color.gray_600};
`;

const NextBox = styled(View)`
  margin-left: auto;
`;

const Next = styled(Text)`
  font-size: 16px;
  color: ${theme.color.gray_600};
`;

export default Signup_3;
