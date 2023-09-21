import styled from "styled-components/native";
import TextField from "../../components/common/TextField";
import { Text, View, Pressable, Image } from "react-native";
import { theme } from "../../style/theme";
import { useNavigation } from "@react-navigation/core";
import { useInput } from "../../hooks/useInput";

function Signup_4({ navigation }) {
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
      <Title>닉네임 설정</Title>
      <Sub>담담에서 사용하실 닉네임을 정해주세요</Sub>
      <TextField_
        value={value}
        onChangeText={onChangeText}
        placeholder="닉네임"
      />
      <MoveBox>
        <BackBox>
          <Pressable onPress={() => navi.navigate("Signup_3")}>
            <Back>이전</Back>
          </Pressable>
        </BackBox>
        <NextBox>
          <Pressable
            onPress={() => {
              navi.navigate("Signup_finish");
            }}
            disabled={!value}
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
  margin-top: 380px;
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

export default Signup_4;
