import { styled } from "styled-components/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { theme } from "../../style/theme";
import _Arrow from "../../assets/icons/_arrow";

export default function DetailMyGift() {
  return (
    <Warpper>
      <GiftContainer>
        <GoodsImgContainer></GoodsImgContainer>
        <TitleBarcode>
          <BrandName>DSM</BrandName>
          <Title>공부하기 싫다</Title>
          <BarCode />
        </TitleBarcode>
      </GiftContainer>
      <GoodsInfo>
        <InfoContainer>
          <InfoText>유효기간</InfoText>
          <InfoText>2044년 4월 4일 까지</InfoText>
        </InfoContainer>
        <InfoContainer>
          <InfoText>유의사항</InfoText>
          <ArrowButton>
            <_Arrow />
          </ArrowButton>
        </InfoContainer>
        <InfoContainer>
          <InfoText>안내사항</InfoText>
          <ArrowButton>
            <_Arrow />
          </ArrowButton>
        </InfoContainer>
      </GoodsInfo>
    </Warpper>
  );
}

const Warpper = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const GiftContainer = styled(View)`
  width: 80%;
  flex: 2.5;
  background-color: ${theme.color.white};
  margin: 8% 0 10% 0;
  padding: 8% 8% 3% 8%;
  border-radius: 15px;
  elevation: 5; /* 안드로이드에서 그림자 효과를 주는 속성 */
  shadow-color: #5e5e5e; /* iOS에서 그림자 색상 */
  shadow-offset: 0px 4px; /* iOS에서 그림자 위치 조정 */
  shadow-opacity: 0.1; /* iOS에서 그림자 투명도 */
  shadow-radius: 5px; /* iOS에서 그림자 블러 효과 */
`;

const GoodsInfo = styled(View)`
  width: 100%;
  flex: 1;
  background-color: ${theme.color.white};
  padding-bottom: 30px;
`;

const GoodsImgContainer = styled(View)`
  width: 100%;
  flex: 4;
  background-color: aqua;
`;

const TitleBarcode = styled(View)`
  flex: 3;
  align-items: center;
  padding-top: 10px;
  gap: 5px;
`;
const BrandName = styled(Text)`
  font-size: 16px;
  font-family: "NotoSansKR-Light";
  color: ${theme.color.gray_600};
`;
const Title = styled(Text)`
  font-size: 18px;
  font-family: "NotoSansKR-Bold";
  color: ${theme.color.black};
`;
const BarCode = styled(View)``;

const InfoContainer = styled(TouchableOpacity)`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 10%;
`;
const InfoText = styled(Text)`
  font-size: 16px;
  color: ${theme.color.gray_700};
`;

const ArrowButton = styled(View)`
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
`;
