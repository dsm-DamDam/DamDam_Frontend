import { styled } from "styled-components/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { theme } from "../../style/theme";

const img_url = "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927";

export default function DetailGoods() {
  const route = useRoute();

  return (
    <Warpper>
      <ImageBox source={{ url: img_url }} />
      <Goodsinfo>
        <Title>
          {`"명품 비타민" 오쏘몰 이뮨 멀티비타민&미네랄 7입 (동아제약 공식 직수입)`}
        </Title>
        <BrandName>{"동아제약"}</BrandName>
        <Price>{"38,000"}원</Price>
      </Goodsinfo>
      <Hr />
      <BuyBtn>
        <Text
          style={{
            fontSize: 20,
            color: theme.color.white,
            fontFamily: "NotoSansKR-Bold",
          }}
        >
          구매하기
        </Text>
      </BuyBtn>
    </Warpper>
  );
}

const Warpper = styled(View)`
  flex: 1;
  background-color: ${theme.color.white};
  align-items: center;
`;

const ImageBox = styled(Image)`
  width: 100%;
  height: 50%;
`;

const Goodsinfo = styled(View)`
  width: 100%;
  padding: 5% 6%;
  gap: 10px;

`;

const Title = styled(Text)`
  font-size: 24px;
  font-family: "NotoSansKR-Regular";
  line-height: 30px;
  color: ${theme.color.gray_900};
`;
const BrandName = styled(Text)`
  font-size: 18px;
  color: ${theme.color.gray_600};
`;
const Price = styled(Text)`
  font-size: 24px;
  font-family: "NotoSansKR-Black";
  color: ${theme.color.balck};
`;

const Hr = styled(View)`
  width: 90%;
  flex: 1;
  border-top-width: 1px;
  border-top-color: ${theme.color.gray_300};
`

const BuyBtn = styled(TouchableOpacity)`
  margin: 20px 0;
  width: 90%;
  height: 55px;
  background-color: ${theme.color.green_500};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
