import { styled, css } from "styled-components/native";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../../style/theme";
import { _SmallLogo } from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function ShopHeader() {
  const navi = useNavigation();
  const route = useRoute();

  return (
    <Container>
      <ASiad>
        <MyPoint>400P</MyPoint>
        <Image
          style={{ height: 45 }}
          source={_SmallLogo}
          resizeMode="contain"
        />
      </ASiad>
      <MenuContainer>
        <MenuBtn
          route={route.name === "Buy"}
          onPress={() => {
            navi.navigate("BuyList");
          }}
        >
          <BtnText route={route.name === "Buy"}>구매하기</BtnText>
        </MenuBtn>
        <MenuBtn
          route={route.name === "MyGift"}
          onPress={() => {
            navi.navigate("MyGift");
          }}
        >
          <BtnText route={route.name === "MyGift"}>내 상품권</BtnText>
        </MenuBtn>
      </MenuContainer>
    </Container>
  );
}

const Container = styled(View)`
  background-color: ${theme.color.white};
  align-items: center;
  padding-top: 45px;
  elevation: 5; /* 안드로이드에서 그림자 효과를 주는 속성 */
  shadow-color: #5e5e5e; /* iOS에서 그림자 색상 */
  shadow-offset: 0px 4px; /* iOS에서 그림자 위치 조정 */
  shadow-opacity: 0.1; /* iOS에서 그림자 투명도 */
  shadow-radius: 5px; /* iOS에서 그림자 블러 효과 */
`;

const ASiad = styled(View)`
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 10px 0;
`;

const MyPoint = styled(Text)`
  font-family: "Roboto-Medium";
  font-size: 18px;
  position: absolute;
  top: 15px;
  right: 30px;
`;

const MenuContainer = styled(View)`
  width: 100%;
  flex-direction: row;
`;

const MenuBtn = styled(TouchableOpacity)`
  width: 50%;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${theme.color.green_500};
  border-bottom-width: 0px;
  ${(props) =>
    props.route &&
    css`
      border-bottom-width: 1px;
    `}
`;
const BtnText = styled(Text)`
  color: ${theme.color.balck};
  font-size: 16px;
  ${(props) =>
    props.route &&
    css`
      color: ${theme.color.green_500};
      font-family: "NotoSansKR-Bold";
    `}
`;
