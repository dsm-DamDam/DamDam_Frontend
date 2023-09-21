import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../style/theme";
import TextField from "../../components/common/TextField";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function Profile() {
  const [inputState, setInputState] = useState({
    nickname: "",
    id: "",
    email: "",
  });

  const onChange = (text) => (value) => {
    setInputState((prevstate) => ({ ...prevstate, [text]: value }));
    // console.log(inputState);
  };

  // const MyComponent = () => {
  //   const [isVisible, setIsVisible] = useState(false);
  // };
  const navigatioin = useNavigation();
  return (
    <InfoContainer>
      {false && (
        <ActoContainer>
          <ActionToast>변경사항을 저장할까요?</ActionToast>
          <ActoBtnContainer>
            <ActoBtnCancel>
              <ActoTextCancel>취소</ActoTextCancel>
            </ActoBtnCancel>
            <ActoBtnSave>
              <ActoTextSave>저장</ActoTextSave>
            </ActoBtnSave>
          </ActoBtnContainer>
        </ActoContainer>
      )}

      <InfoTitle>
        <MainName>회원정보</MainName>
      </InfoTitle>
      <InfoPhoto />
      <InfoNameBox>
        <TitleName>닉네임</TitleName>
        <TextField
          value={inputState.nickname}
          onChangeText={onChange("nickname")}
        ></TextField>
      </InfoNameBox>
      <InfoNameBox>
        <TitleName>아이디</TitleName>
        <TextField
          value={inputState.id}
          onChangeText={onChange("id")}
        ></TextField>
      </InfoNameBox>
      <InfoNameBox>
        <TitleName>이메일</TitleName>
        <TextField
          value={inputState.email}
          onChangeText={onChange("email")}
          disable={true}
        ></TextField>
      </InfoNameBox>
      <InfoNameBox>
        <TitleName>비밀번호</TitleName>
        {/* <InfoPassBox></InfoPassBox> */}
        <TextField disable={true}>
          <PassChangeBox
            onPress={() => {
              navigatioin.navigate("PassChangePage");
            }}
          >
            <PassChangeText>수정</PassChangeText>
          </PassChangeBox>
        </TextField>
      </InfoNameBox>
    </InfoContainer>
  );
}

// const TextFieldChange = () =>
//   Alert.alert("변경사항을 저장할까요?", [
//     {
//       text: "취소",
//       onPress: () => console.log("취소한다"),
//       style: "cancel",
//     },
//     { text: "저장", onPress: () => console.log("저장한다") },
//   ]);

const InfoContainer = styled(View)`
  flex: 1;
  padding-top: 5%;
  align-items: center;
  background-color: ${theme.color.white};
`;

const ActoContainer = styled(View)`
  width: 340px;
  height: 50px;
  border-width: 1px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${theme.color.white};
  border-color: ${theme.color.gray_300};
`;

const ActionToast = styled(Text)`
  font-size: 12px;
`;

const ActoBtnContainer = styled(View)`
  width: auto;
  height: auto;
  flex-direction: row;
  margin-left: 10px;
`;

const ActoBtnCancel = styled(TouchableOpacity)`
  width: 50px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

const ActoTextCancel = styled(Text)`
  font-size: 13px;
`;

const ActoBtnSave = styled(TouchableOpacity)`
  width: 50px;
  height: 35px;
  margin-left: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.brand_color};
`;

const ActoTextSave = styled(Text)`
  font-size: 13px;
  color: ${theme.color.white};
`;

const InfoTitle = styled(View)`
  width: 85%;
  height: auto;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10%;
`;

const MainName = styled(Text)`
  font-size: 18px;
  color: ${theme.color.gray_700};
`;

const InfoPhoto = styled(TouchableOpacity)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 10%;
  background-color: ${theme.color.gray_400};
`;

const InfoNameBox = styled(View)`
  width: auto;
  height: auto;
`;

const TitleName = styled(Text)`
  font-size: 10px;
`;

// const InfoPassBox = styled(TouchableOpacity)`
//   align-items: center;
//   justify-content: space-between;
//   height: auto;
//   width: auto;
//   background-color: ${theme.color.gray_300};
//   flex-direction: row;
// `;

const PassChangeBox = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 70%;
  float: right;
  border-radius: 2px;
  background-color: ${theme.color.brand_color};
`;
const PassChangeText = styled(Text)`
  font-size: 15px;
  color: ${theme.color.white};
`;

export default Profile;
