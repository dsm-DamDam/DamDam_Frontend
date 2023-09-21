import Svg, { Path } from "react-native-svg";
import { theme } from "../../style/theme";

function _Left_Arrow() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.025 18.0002L8 11.9752L14.025 5.9502L15.1 7.0252L10.15 11.9752L15.1 16.9252L14.025 18.0002Z"
        fill={theme.color.gray_700}
        fill-opacity="0.5"
      />
    </Svg>
  );
}

export default _Left_Arrow;
