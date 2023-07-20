import styled, { css } from "styled-components";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { TapContext } from "../../useContext/tapContext";
import { theme } from "../../style/theme";
import { tabbar_info_list } from "../../constants/tabBar";
import { useNavigation } from "@react-navigation/native";

function TabBar() {
  const { moveTapState, setMoveTapState } = useContext(TapContext);
  const navigatioin = useNavigation();

  return (
    <Container>
      {tabbar_info_list.map((item, index) => (
        <TabBox
          key={index}
          onPress={() => {
            setMoveTapState(item.id);
            navigatioin.navigate(item.id);
          }}
        >
          <IconBox style={style.onPrassIconBox}>
            {item.icon(moveTapState === item.id)}
          </IconBox>
          <Name isPress={moveTapState === item.id}>{item.name}</Name>
        </TabBox>
      ))}
    </Container>
  );
}

const style = StyleSheet.create({
  onPrassIconBox: {
    marginBottom: 5,
  },
});

const Container = styled.View`
  background-color: white;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
`;

const TabBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  gap: 2px;
  height: 60px;
  width: 15%;
`;

const IconBox = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const Name = styled.Text`
  font-size: 12px;
  ${(props) =>
    props.isPress &&
    css`
      color: ${theme.color.brand_color};
    `}
`;

export default TabBar;
