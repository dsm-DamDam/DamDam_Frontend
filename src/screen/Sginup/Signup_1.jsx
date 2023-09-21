import styled from "styled-components/native";
import TextField from "../../components/common/TextField";
import { Text, View, Pressable, Image } from "react-native";
import { theme } from "../../style/theme";
import { useNavigation } from "@react-navigation/core";
import { useInput } from "../../hooks/useInput";

function Signup_1({ navigation }) {
  const navi = useNavigation();
  const { value, onChangeText } = useInput("");

  return (
    <Container>
      <Pressable onPress={() => navi.navigate("Login")}>
        <PalletBox>
          <BackImg source={require("../../assets/images/back.png")} />
          <PalletTown>로그인</PalletTown>
        </PalletBox>
      </Pressable>
      <Title>인증코드 입력</Title>
      <Sub>제품 하단에 인증코드가 표기되어있어요</Sub>
      <TextField_
        value={value}
        onChangeText={onChangeText}
        placeholder="인증코드"
      />
      <NextBox>
        <Pressable
          onPress={() => {
            navi.navigate("Signup_2");
          }}
          disabled={!value}
        >
          <Next>다음</Next>
        </Pressable>
      </NextBox>
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

const NextBox = styled(View)`
  margin-top: 380px;
  margin-left: auto;
`;

const Next = styled(Text)`
  font-size: 16px;
  color: ${theme.color.gray_600};
`;

export default Signup_1;
