import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../style/theme";
import TextField from "../../components/common/TextField";
import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { useNavigation } from "@react-navigation/native";
import _Left_Arrow from "../../assets/icons/_left_arrow";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env"; 


function PassChangePage() {
  const navigatioin = useNavigation();
  const [inputState, setInputState] = useState({
    password: "",
    change_password: "",
    confirm_change_password: "",
  });

  const SavePassApi = async () => {
    const token = await AsyncStorage.getItem("access_token");
    axios
      .patch(`${BASE_URL}/user/updatePW`, inputState, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => console.error(err));
  };

  const onChange = (text) => (value) => {
    setInputState((prevstate) => ({ ...prevstate, [text]: value }));
  };

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
            value={inputState.password}
            onChangeText={onChange("password")}
            helpText="도움말"
            placeholder="기존비밀번호"
            passwordType={true}
          ></TextField>
          <TextField
            value={inputState.change_password}
            onChangeText={onChange("change_password")}
            helpText="도움말"
            placeholder="변경할 비밀번호"
            passwordType={true}
          ></TextField>
          <TextField
            value={inputState.confirm_change_password}
            onChangeText={onChange("confirm_change_password")}
            helpText="도움말"
            placeholder="비밀번호 확인"
            passwordType={true}
          ></TextField>
        </TextFieldContainer>

        <CompletionContainer>
          <CompletionBox
            onPress={() => {
              SavePassApi();
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
