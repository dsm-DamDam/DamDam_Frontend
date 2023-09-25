import { styled } from "styled-components/native";
import { View, ScrollView } from "react-native";
import { theme } from "../../style/theme";
import Card from "../../components/Shop/Card";
import { useRoute } from "@react-navigation/native";

export default function MyGift() {
  const route = useRoute();
  return (
    <Container>
      <MyGiftList>
        <Card isMine deadline={"2024.05.05"} />
        <Card isMine deadline={"2024.05.05"} />
        <Card isMine deadline={"2024.05.05"} />
        <Card isMine deadline={"2024.05.05"} />
      </MyGiftList>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white};
`;

const MyGiftList = styled(ScrollView)`
  flex: 1;
  width: 100%;
  padding: 15px 5%;
`;
