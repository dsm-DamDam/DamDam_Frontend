import { styled } from "styled-components/native";
import { Text, View } from "react-native";
import Filter from "../../components/Shop/Filter";
import { theme } from "../../style/theme";
import { ShopFilterContext } from "../../useContext/Context";
import { useState } from "react";
import GiftCardList from "../../components/Shop/GiftCardList";

export default function Buy() {
  const [filterState, setFilterState] = useState("all");

  return (
    <ShopFilterContext.Provider value={{ filterState, setFilterState }}>
      <Container>
        <Filter />
        <GiftCardList />
      </Container>
    </ShopFilterContext.Provider>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white};
`;
