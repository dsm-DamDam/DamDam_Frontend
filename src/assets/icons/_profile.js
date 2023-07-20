import Svg, { Path } from "react-native-svg";
import { theme } from "../../style/theme";

function _Profile({ isPress = false }) {
  return (
    <Svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17 18V16C17 14.9391 16.5786 13.9217 15.8284 13.1716C15.0783 12.4214 14.0609 12 13 12H5C3.93913 12 2.92172 12.4214 2.17157 13.1716C1.42143 13.9217 1 14.9391 1 16V18M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z"
        stroke={isPress ? theme.color.brand_color : theme.color.gray_800}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default _Profile;
