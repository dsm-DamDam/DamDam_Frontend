import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import { GetUserApi } from "../../api/getUser";
import TextField from "../../components/common/TextField";
import { theme } from "../../style/theme";
import { UserContext } from "../../useContext/Context";
import { Image } from "react-native";

function Profile() {
  // const { userInfo, setUserInfo } = useContext(UserContext);

  const initState = {
    nickname: "",
    userId: "",
    email: "",
    password: "",
  };

  const navigation = useNavigation();
  const [baseState, setBaseState] = useState(initState);

  const [inputState, setInputState] = useState(initState);

  const [disable, setDisable] = useState(false);

  const SaveDataApi = async () => {
    const token = await AsyncStorage.getItem("access_token");
    axios
      .patch(
        `${BASE_URL}/user/updateInfo`,
        {
          new_nickname: inputState.nickname,
          new_userID: inputState.userID,
          // password: inputState.password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));

    setDisable(false);
  };

  // const SaveDataApi = () => {
  //   console.log("inputState" + inputState.nickname, inputState.userId);
  //   setUserInfo((prev) => ({
  //     ...prev,
  //     nickname: inputState.nickname,
  //     userId: inputState.userId,
  //   }));
  //   navigation.navigate("ProfilePage");
  //   Alert.alert("수정완료", "유저정보가 성공적으로 변경되었습니다.");
  // };

  const onChange = (text, value) => {
    setInputState((prevstate) => ({ ...prevstate, [text]: value }));
  };

  useFocusEffect(
    useCallback(() => {
      GetUserApi().then((e) => {
        setInputState(e);
        setBaseState(e);
      });
    }, [])
  );

  useEffect(() => {
    if (
      inputState.nickname !== baseState.nickname ||
      inputState.userId !== baseState.userId
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [inputState, baseState]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <InfoContainer>
        <TextFileds>
          {!!disable && (
            <ActoContainer>
              <ActionToast>변경사항을 저장할까요?</ActionToast>
              <ActoBtnContainer>
                <ActoBtnCancel onPress={() => setInputState(baseState)}>
                  <ActoTextCancel>취소</ActoTextCancel>
                </ActoBtnCancel>
                <ActoBtnSave onPress={() => SaveDataApi()}>
                  <ActoTextSave>저장</ActoTextSave>
                </ActoBtnSave>
              </ActoBtnContainer>
            </ActoContainer>
          )}

          <InfoTitle>
            <MainName>회원정보</MainName>
          </InfoTitle>
          <InfoPhoto
            source={{
              uri: "https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw",
            }}
          />
          <InfoNameBox>
            <TitleName>닉네임</TitleName>
            <TextField
              value={inputState ? inputState.nickname : ""}
              onChangeText={(value) => {
                onChange("nickname", value);
              }}
            ></TextField>
          </InfoNameBox>
          <InfoNameBox>
            <TitleName>아이디</TitleName>
            <TextField
              value={inputState ? inputState.userId : ""}
              onChangeText={(value) => {
                onChange("userId", value);
              }}
            ></TextField>
          </InfoNameBox>
          <InfoNameBox>
            <TitleName>이메일</TitleName>
            <TextField
              value={inputState ? inputState.email : ""}
              disable={true}
            ></TextField>
          </InfoNameBox>
          <InfoNameBox>
            <TitleName>비밀번호</TitleName>
            <TextField
              disable={true}
              value={"*".repeat(
                inputState && inputState.password
                  ? inputState.password.length
                  : 0
              )}
            >
              <PassChangeBox
                onPress={() => {
                  navigation.navigate("PassChangePage");
                }}
              >
                <PassChangeText>수정</PassChangeText>
              </PassChangeBox>
            </TextField>
          </InfoNameBox>
        </TextFileds>
      </InfoContainer>
    </KeyboardAvoidingView>
  );
}

const InfoContainer = styled(View)`
  flex: 1;
  padding-top: 60px;
  align-items: center;
  background-color: ${theme.color.white};
`;

const TextFileds = styled(View)`
  width: 320px;
`;

const ActoContainer = styled(View)`
  width: 340px;
  height: 60px;
  border-width: 1px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${theme.color.white};
  border-color: ${theme.color.gray_300};
  shadow-offset: 0px 10px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 4;
  position: absolute;
  top: 30px;
  z-index: 1000;
`;

const ActionToast = styled(Text)`
  font-size: 14px;
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

const InfoPhoto = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 10%;
  background-color: ${theme.color.gray_400};
  border-color: #e5e5e5;
  border-width: 1px;
`;

const InfoNameBox = styled(View)`
  width: auto;
  height: auto;
  gap: 5px;
`;

const TitleName = styled(Text)`
  font-size: 14px;
  color: #7f7f7f;
`;

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
