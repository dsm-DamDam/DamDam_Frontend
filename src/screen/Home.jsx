import { BASE_URL } from "@env";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { Image, Text, View } from "react-native";
import { styled } from "styled-components/native";
import { GetUserApi } from "../api/getUser";
import ConnectionStatusIndicator from "../components/home/ConnectionStatusIndicator";
import NumberOfTime from "../components/home/NumberOfTime";
import Promotion from "../components/home/Promotion";
import { theme } from "../style/theme";
import ProgressCircleComponent from "../components/chart/ProgressCircleComponent";
import ToDayTips from "../components/home/Tip/index";
import { Pressable, TouchableOpacity } from "react-native";
import { UserContext } from "../useContext/Context";

function Home() {
  const navi = useNavigation();
  const [total_count, setTotal_count] = useState("");
  const [today, setToday] = useState("");

  // useFocusEffect(
  //   useCallback(() => {
  //     GetUserApi().then((e) => {
  //       setUserInfo(e);
  //     });
  //   }, [])
  // );

  const { userInfo } = useContext(UserContext);

  const [count, setCount] = useState(0);
  const [time, setTime] = useState(5000);
  const [loop, setLoop] = useState(0);

  const [state, setState] = useState({
    count: 0,
    time: 6500,
    loop: 0,
  });

  setTimeout(() => {
    console.log(state.loop);
    if (state.loop === 0) {
      setState({
        count: 1,
        time: 7000,
        loop: 1,
      });
    }
    if (state.loop === 1) {
      setState({
        count: 3,
        time: 7000,
        loop: 2,
      });
    }
  }, state.time);

  return (
    <Container>
      <Header>
        <Profile
          onPress={() => {
            navi.navigate("Profile");
          }}
        >
          <ProfileImgWrapper>
            <ProfileImg
              source={{
                uri: "https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw",
              }}
            />
          </ProfileImgWrapper>
          <UserName>
            <Text>{userInfo.nickname}</Text>님, 안녕하세요
          </UserName>
        </Profile>
        {/* <PointText>400P</PointText> */}
      </Header>
      <Main>
        <DayCountAndID>
          <DayCountText>
            {/* <DayValue>{13}</DayValue> 일째 노력 중 */}
          </DayCountText>
          {/* <ConnectionStatusIndicator /> */}
        </DayCountAndID>
        <ProgressCircleComponent currentValue={state.count} maxValue={25} />
        <NumberOfTime currentValue={state.count} />
      </Main>
      <Body>
        <ToDayTips />
        <Promotion />
      </Body>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Header = styled(View)`
  width: 100%;
  flex: 1.3;
  background-color: ${theme.color.white};
  align-items: center;
  flex-direction: row;
  padding: 0 5%;
`;
const Profile = styled(TouchableOpacity)`
  height: 100%;
  align-items: center;
  flex-direction: row;
  flex: 1;
  gap: 15px;
`;
const ProfileImgWrapper = styled(View)`
  width: 40px;
  height: 40px;
  border-width: 1px;
  border-color: ${theme.color.gray_300};
  border-radius: 100px;
  overflow: hidden;
`;
const ProfileImg = styled(Image)`
  width: 100%;
  height: 100%;
`;
const UserName = styled(Text)`
  font-family: "NotoSansKR-Light";
  font-size: 20px;
`;
const PointText = styled(Text)`
  font-size: 20px;
  font-family: "Roboto-Light";
  color: ${theme.color.gray_600};
`;
const Main = styled(View)`
  width: 100%;
  flex: 5;
  background-color: ${theme.color.gray_100};
  padding: 2% 5%;
  align-items: center;
  gap: 20px;
`;
const DayCountAndID = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`;
const DayValue = styled(Text)`
  color: ${theme.color.green_700};
  font-family: "Roboto-Bold";
  font-size: 20px;
`;
const DayCountText = styled(Text)`
  color: ${theme.color.gray_800};
  font-family: "NotoSansKR-Regular";
  font-size: 14px;
`;
const Body = styled(View)`
  width: 100%;
  flex: 3;
  padding: 2% 5%;
  background-color: ${theme.color.white};
`;

export default Home;
