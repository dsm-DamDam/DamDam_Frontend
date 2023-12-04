import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { setCustomText } from "react-native-global-props";
import LoginRouter from "./src/Router/LoginRouter";
import { TapContext } from "./src/useContext/Context";
import { Text } from "react-native";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // const [fontsLoaded, error] = Font.useFonts({
  //   "Roboto-Black": require("./src/assets/fonts/Roboto/Roboto-Black.ttf"),
  //   "Roboto-Bold": require("./src/assets/fonts/Roboto/Roboto-Bold.ttf"),
  //   "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto-Medium.ttf"),
  //   "Roboto-Regular": require("./src/assets/fonts/Roboto/Roboto-Regular.ttf"),
  //   "Roboto-Light": require("./src/assets/fonts/Roboto/Roboto-Light.ttf"),
  //   "NotoSansKR-Black": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Black.otf"),
  //   "NotoSansKR-Bold": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Bold.otf"),
  //   "NotoSansKR-Medium": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Medium.otf"),
  //   "NotoSansKR-Regular": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Regular.otf"),
  //   "NotoSansKR-Light": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Light.otf"),
  // });

  const loadFonts = async () => {
    await Font.loadAsync({
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
    setIsReady(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  useEffect(() => {
    if (isReady) {
      const customTextProps = {
        style: {
          fontFamily: "NotoSansKR-Medium",
        },
      };
      setCustomText(customTextProps);
    }
  }, [isReady]);

  const [moveTapState, setMoveTapState] = useState("Home");

  if (!isReady) {
    return (
      <>
        <StatusBar style="auto" />
        <Text>로딩중</Text>
      </>
    );
  }
  return (
    <TapContext.Provider value={{ moveTapState, setMoveTapState }}>
      <LoginRouter />
    </TapContext.Provider>
  );
}
