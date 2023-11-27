import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import _Left_Arrow from "../../assets/icons/_left_arrow";
import TextField from "../../components/common/TextField";
import { useInput } from "../../hooks/useInput";
import { theme } from "../../style/theme";

function PassChangePage() {
  const { value, onChangeText } = useInput({
    previous: "",
    newPass: "",
    checkPass: "",
  });

  const navigatioin = useNavigation();
  return (
    <PassContainer>
      <PassTitle
        onPress={() => {
          navigatioin.goBack();
        }}
      >
        <PassCircle>
          <_Left_Arrow />
        </PassCircle>

        <PassMainName>회원정보</PassMainName>
      </PassTitle>

      <PassMainContainer>
        <Title>
          <TitleName>비밀번호 변경</TitleName>
          <TitleNameHelp>비밀번호를 변경하세요</TitleNameHelp>
        </Title>

        <TextFieldContainer>
          <TextField
            value={value.previous}
            onChangeText={(text) => onChangeText("previous", text)}
            helpText="도움말"
            placeholder="기존비밀번호"
            passwordType={true}
          ></TextField>
          <TextField
            value={value.newPass}
            onChangeText={(text) => onChangeText("newPass", text)}
            helpText="도움말"
            placeholder="변경할 비밀번호"
            passwordType={true}
          ></TextField>
          <TextField
            value={value.checkPass}
            onChangeText={(text) => onChangeText("checkPass", text)}
            helpText="도움말"
            placeholder="비밀번호 확인"
            passwordType={true}
          ></TextField>
        </TextFieldContainer>

        <CompletionContainer>
          <CompletionBox
            onPress={() => {
              navigatioin.navigate("ProfilePage");
            }}
          >
            완료
          </CompletionBox>
        </CompletionContainer>
      </PassMainContainer>
    </PassContainer>
  );
}

const PassContainer = styled(View)`
  flex: 1;
  padding: 20px;
  background-color: ${theme.color.white};
`;

const PassTitle = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
`;

const PassCircle = styled(View)`
  float: left;
  justify-content: center;
  align-items: center;
`;

const PassMainName = styled(Text)`
  font-size: 18px;
  color: ${theme.color.gray_700};
`;

const PassMainContainer = styled(View)`
  flex: 1;
`;

const Title = styled(View)`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 60px;
`;

const TitleName = styled(Text)`
  font-size: 25px;
`;

const TitleNameHelp = styled(Text)`
  font-size: 12px;
  color: ${theme.color.gray_600};
`;

const TextFieldContainer = styled(View)``;

const CompletionContainer = styled(TouchableOpacity)`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

const CompletionBox = styled(Text)`
  font-size: 18px;
  color: ${theme.color.gray_700};
`;

export default PassChangePage;
