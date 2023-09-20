import styled from "styled-components/native";
import TextField from "../../components/common/TextField";
import { Text, View, Pressable, Image, Alert } from "react-native";
import { theme } from "../../style/theme";
import { useNavigation } from "@react-navigation/core";

function Signup_finish({ navigation }) {
  const navi = useNavigation();

  return (
    <Container>
      <Title>환영합니다!</Title>
      <Sub>
        <SubT>회원가입이 끝났어요</SubT>
        <SubT>이제 서비스를 마음껏 이용하실 수 있어요</SubT>
      </Sub>
      <Cong source={require("../../assets/images/Congratulations.png")} />
      <Pressable onPress={() => navi.navigate("Login")}>
        <UseDam>
          <UseDamT>서비스 이용하기</UseDamT>
        </UseDam>
      </Pressable>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  padding: 43px 25px;
  background-color: ${theme.color.white};
`;

const Title = styled(Text)`
  margin-top: 200px;
  margin-bottom: 22px;
  font-size: 36px;
  font-weight: 600;
`;

const Sub = styled(View)`
  align-items: center;
  margin-bottom: 24px;
`;

const SubT = styled(Text)`
  font-size: 16px;
  color: ${theme.color.gray_600};
`;

const Cong = styled(Image)``;

const UseDam = styled(View)`
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 60px;
  background-color: ${theme.color.brand_color};
  border-radius: 2px;
  margin-top: 200px;
`;

const UseDamT = styled(Text)`
  color: ${theme.color.white};
  font-size: 18px;
  font-weight: 600;
`;

export default Signup_finish;
