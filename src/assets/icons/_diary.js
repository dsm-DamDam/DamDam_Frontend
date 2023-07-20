import Svg, { Path } from "react-native-svg";
import {theme} from '../../style/theme'

function _Diary({isPress = false}) {
  return (
    <Svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10 12H0V14H10V12ZM16 4H0V6H16V4ZM0 10H16V8H0V10ZM0 0V2H16V0H0Z"
        fill={isPress ? theme.color.brand_color : theme.color.gray_800}
      />
    </Svg>
  );
}

export default _Diary;
