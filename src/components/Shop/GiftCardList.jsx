import { styled } from "styled-components/native";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Card from "./Card";
import { theme } from "../../style/theme";

const test_the_me = ["", "", "", "", "", "", ""];

export default function GiftCardList() {
  return (
    <Warpper>
      {test_the_me.map((_, index) => (
        <Card key={index} id={index} brand_name={""} title={""} price={""} />
      ))}
    </Warpper>
  );
}

const Warpper = styled(ScrollView)`
  flex: 1;
  width: 100%;
  padding: 15px 5%;
  border-top-width: 1px;
  border-top-color: ${theme.color.gray_300};
`;
