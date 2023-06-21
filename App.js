import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { setCustomText } from "react-native-global-props";
import TextField from "./src/components/common/Input/TextField";
import { useInput } from "./src/hooks/useInput";
import styled from "styled-components";
import Eye from "./src/assets/icons/eyes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./src/assets/fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Light": require("./src/assets/fonts/Roboto/Roboto-Light.ttf"),
    "NotoSansKR-Black": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Black.otf"),
    "NotoSansKR-Bold": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Bold.otf"),
    "NotoSansKR-Medium": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Medium.otf"),
    "NotoSansKR-Regular": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Regular.otf"),
    "NotoSansKR-Light": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Light.otf"),
  });
  const name = useInput("");

  const customTextProps = {
    style: {
      fontFamily: "NotoSansKR-Medium",
    },
  };
  setCustomText(customTextProps);

  if (!fontsLoaded) {
    return <StatusBar />;
  }
  return (
    <View>
      <StatusBar style="auto" />
      <TextField
        placeholder="아이디"
        helpText="도움말"
        icon="eyes"
        isError={false}
        errorText="에러"
        passwordType
        {...name}
      >
        <Hi />
      </TextField>
    </View>
  );
}

const Hi = styled.View`
  width: 30px;
  height: 30px;
  background-color: #000;
`;
