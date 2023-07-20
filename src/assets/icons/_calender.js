import Svg, { Path } from "react-native-svg";
import { theme } from "../../style/theme";

function _Calender({ isPress = false }) {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 6V3H16V4H14V3H6V4H4V3H2V6H18ZM18 8H2V18H18V8ZM16 1H18C19.1046 1 20 1.89543 20 3V18C20 19.1046 19.1046 20 18 20H2C0.89543 20 0 19.1046 0 18V3C0 1.89543 0.89543 1 2 1H4V0H6V1H14V0H16V1ZM9 13.5858L13.2929 9.29289L14.7071 10.7071L9 16.4142L5.29289 12.7071L6.70711 11.2929L9 13.5858Z"
        fill={isPress ? theme.color.brand_color : theme.color.gray_800}
      />
    </Svg>
  );
}

export default _Calender;
