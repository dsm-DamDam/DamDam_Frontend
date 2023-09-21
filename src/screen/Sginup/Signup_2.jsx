import styled from "styled-components/native";
import TextField from "../../components/common/TextField";
import { Text, View, Pressable, Image } from "react-native";
import { theme } from "../../style/theme";
import { useNavigation } from "@react-navigation/core";
import { useInput } from "../../hooks/useInput";

function Signup_2({ navigation }) {
  const navi = useNavigation();
  const { value: emailValue, onChangeText: emailOnChangeText } = useInput("");
  const { value: numValue, onChangeText: numOnchangeText } = useInput("");

  return (
    <Container>
      <Pressable onPress={() => navi.navigate("Login")}>
        <PalletBox>
          <BackImg source={require("../../assets/images/back.png")} />
          <PalletTown>로그인</PalletTown>
        </PalletBox>
      </Pressable>
      <Title>이메일 인증</Title>
      <Sub>계정 보호를 위해 이메일 인증이 필요해요</Sub>
      <TextField_
        value={emailValue}
        onChangeText={emailOnChangeText}
        placeholder="이메일"
      >
        <Pressable
          onPress={() => {
            console.log("눌림");
          }}
          disabled={!emailValue}
        >
          <Send>
            <SendT>발송</SendT>
          </Send>
        </Pressable>
      </TextField_>
      <TextField_
        value={numValue}
        onChangeText={numOnchangeText}
        placeholder="인증번호"
      />
      <MoveBox>
        <BackBox>
          <Pressable onPress={() => navi.navigate("Signup_1")}>
            <Back>이전</Back>
          </Pressable>
        </BackBox>
        <NextBox>
          <Pressable
            onPress={() => {
              navi.navigate("Signup_3");
            }}
            disabled={!emailValue || !numValue}
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

const Send = styled(View)`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 36px;
  border-radius: 2px;
  background-color: ${theme.color.gray_300};
  font-size: 16px;
  background-color: ${(props) =>
    props.disabled ? theme.color.gray_300 : theme.color.brand_color};
`;

const SendT = styled(Text)`
  color: ${theme.color.white};
`;

const MoveBox = styled(View)`
  flex-direction: row;
  margin-top: 310px;
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

export default Signup_2;
