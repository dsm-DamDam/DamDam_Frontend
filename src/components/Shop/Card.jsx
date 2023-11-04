import { styled } from "styled-components/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { theme } from "../../style/theme";
import { useNavigation } from "@react-navigation/native";

const img_url = "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927";

export default function Card({
  id,
  brand_name,
  title,
  price,
  isMine = false,
  deadline,
}) {
  const navi = useNavigation();
  const GotoDetailPage = () => {
    if (!isMine) {
      navi.navigate("DetailGoods", id);
    } else {
      navi.navigate("DetailMyGift");
    }
  };
  return (
    <Container onPress={GotoDetailPage}>
      <ImageBox source={{ url: img_url }} />
      <GoodsInfo>
        <BrandText>{"동아제약"}</BrandText>
        <GoodsTitle numberOfLines={2}>
          {`"명품 비타민" 오쏘몰 이뮨 멀티비타민&미네랄 7입 (동아제약 공식 ...)`}
        </GoodsTitle>
        {!isMine ? (
          <Price>{"38,000"}원</Price>
        ) : (
          <DeadLine>~{deadline} 까지</DeadLine>
        )}
      </GoodsInfo>
    </Container>
  );
}

const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 100px;
  background-color: ${theme.color.white};
  flex-direction: row;
  gap: 10px;
  margin-bottom: 15px;
`;

const ImageBox = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const GoodsInfo = styled(View)`
  flex: 1;
  gap: 6px;
`;
const BrandText = styled(Text)`
  font-size: 16px;
  color: ${theme.color.gray_600};
`;
const GoodsTitle = styled(Text)`
  font-size: 18px;
  color: ${theme.color.balck};
  line-height: 24px;
`;
const Price = styled(Text)`
  font-size: 22px;
  color: ${theme.color.balck};
  font-family: "Roboto-Bold";
`;

const DeadLine = styled(Text)``;
