import { styled } from "styled-components/native";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import _Food from "../../assets/images/foods";
import { theme } from "../../style/theme";
import { ShopFilterContext } from "../../useContext/Context";
import { useContext } from "react";

export default function Filter() {
  const { filterState: select, setFilterState: setSelect } =
    useContext(ShopFilterContext);

  const food_type = [
    { id: "coffee", name: "카페" },
    { id: "chicken", name: "치킨" },
    { id: "pizza", name: "피자" },
    { id: "hamburger", name: "햄버거" },
    { id: "dessert", name: "디저트" },
    { id: "out_food", name: "외식" },
    { id: "convenience_store", name: "편의점" },
  ];

  const OnPressMenu = (id) => {
    setSelect((prev) => {
      if (prev === id) {
        return "all";
      } else return id;
    });
  };

  return (
    <View style={{ flex: 0 }}>
      <Warpper horizontal>
        {food_type.map((item, index) => (
          <MenuWarpper
            key={index}
            onPress={() => {
              OnPressMenu(item.id);
            }}
          >
            <_Food
              type={item.id}
              selected={select === "all" || select === item.id ? "on" : "off"}
              size={40}
            />
            <Text>{item.name}</Text>
          </MenuWarpper>
        ))}
      </Warpper>
    </View>
  );
}

const Warpper = styled(ScrollView)`
  flex-grow: 0;
  padding: 0 20px;
  margin: 20px 0;
`;

const MenuWarpper = styled(TouchableOpacity)`
  margin-right: 30px;
  align-items: center;
  gap: 5px;
`;
