import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { styled } from "styled-components/native";
import ConnectionStatusIndicator from "../components/home/ConnectionStatusIndicator";
import NumberOfTime from "../components/home/NumberOfTime";
import Promotion from "../components/home/Promotion";
import ToDayTips from "../components/home/Tip";
import ProgressCircleComponent from "../components/home/chart/RadialBar";
import { theme } from "../style/theme";

function Home() {
  const [total_count, setTotal_count] = useState("");
  const [today, setToday] = useState("");

  const GetData = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/item/daily-total-cnt`,
    })
      .then((res) => {
        setTotal_count(res.data.total_count);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Container>
      <Header>
        <Profile>
          <ProfileImgWrapper>
            <ProfileImg
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/%ED%94%84%EB%A1%9C%ED%95%84%28%EC%A0%95%EB%A9%B4%29.jpg",
              }}
            />
          </ProfileImgWrapper>
          <UserName>
            <Text>마재영님,</Text> 안녕하세요
          </UserName>
        </Profile>
        <PointText>400P</PointText>
      </Header>
      <Main>
        <DayCountAndID>
          <DayCountText>
            <DayValue>{13}</DayValue> 일째 노력 중
          </DayCountText>
          <ConnectionStatusIndicator />
        </DayCountAndID>
        <ProgressCircleComponent currentValue={total_count} maxValue={25} />
        <NumberOfTime currentValue={total_count} />
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
`;
const Header = styled(View)`
  width: 100%;
  flex: 1.3;
  background-color: ${theme.color.white};
  align-items: center;
  flex-direction: row;
  padding: 0 5%;
`;
const Profile = styled(View)`
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
