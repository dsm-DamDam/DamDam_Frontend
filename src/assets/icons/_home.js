import Svg, { Path } from "react-native-svg";
import { theme } from "../../style/theme";

function _Home({ isPress = false }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.7778 9.77778V20.1197C19.7778 20.6184 19.5729 21.0966 19.2083 21.4493C18.8436 21.8019 18.349 22 17.8333 22H6.16667C5.65097 22 5.15639 21.8019 4.79174 21.4493C4.42708 21.0966 4.22222 20.6184 4.22222 20.1197V9.77778M9 22V14H15V22M2 10.6L12 2L22 10.6"
        stroke={isPress ? theme.color.brand_color : theme.color.gray_800}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default _Home;
