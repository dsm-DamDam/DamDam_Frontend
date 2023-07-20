import styled from "styled-components";
import { SvgXml } from "react-native-svg";

const eyes = {
  open_eyes: `
  <svg
    width="20"
    height="14"
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0027 10.8462C11.0767 10.8462 11.9886 10.4645 12.7386 9.70112C13.4886 8.93779 13.8636 8.01086 13.8636 6.92035C13.8636 5.82986 13.4877 4.90385 12.736 4.14231C11.9842 3.38077 11.0713 3 9.99732 3C8.92335 3 8.01136 3.38168 7.26136 4.14503C6.51136 4.90837 6.13636 5.83529 6.13636 6.9258C6.13636 8.01629 6.51226 8.94231 7.26405 9.70385C8.01582 10.4654 8.9287 10.8462 10.0027 10.8462ZM9.99466 9.50769C9.2861 9.50769 8.68561 9.25589 8.19318 8.75227C7.70076 8.24864 7.45455 7.6371 7.45455 6.91765C7.45455 6.19819 7.70254 5.58846 8.19852 5.08846C8.69452 4.58846 9.2968 4.33846 10.0053 4.33846C10.7139 4.33846 11.3144 4.59027 11.8068 5.09388C12.2992 5.59752 12.5455 6.20905 12.5455 6.9285C12.5455 7.64796 12.2975 8.25769 11.8015 8.75769C11.3055 9.25769 10.7032 9.50769 9.99466 9.50769ZM10 13.8462C7.78788 13.8462 5.78788 13.2077 4 11.9308C2.21212 10.6538 0.878788 8.98462 0 6.92308C0.878788 4.86154 2.21212 3.19231 4 1.91538C5.78788 0.638462 7.78788 0 10 0C12.2121 0 14.2121 0.638462 16 1.91538C17.7879 3.19231 19.1212 4.86154 20 6.92308C19.1212 8.98462 17.7879 10.6538 16 11.9308C14.2121 13.2077 12.2121 13.8462 10 13.8462ZM9.99616 12.4615C11.8321 12.4615 13.5189 11.9577 15.0568 10.95C16.5947 9.94231 17.7652 8.6 18.5682 6.92308C17.7652 5.24615 16.596 3.90385 15.0607 2.89615C13.5253 1.88846 11.8397 1.38462 10.0038 1.38462C8.16795 1.38462 6.48106 1.88846 4.94318 2.89615C3.4053 3.90385 2.22727 5.24615 1.40909 6.92308C2.22727 8.6 3.40402 9.94231 4.93934 10.95C6.47467 11.9577 8.16028 12.4615 9.99616 12.4615Z"
      fill="#CCCCCC"
    />
  </svg>`,
  close_eyes: `
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
    d="M13.3864 10.0225L12.3864 9.03371C12.7803 7.97004 12.5758 7.08614 11.7727 6.38202C10.9697 5.6779 10.0985 5.49813 9.15909 5.8427L8.15909 4.85393C8.41667 4.68914 8.70455 4.56929 9.02273 4.49438C9.34091 4.41948 9.66667 4.38202 10 4.38202C11.0758 4.38202 11.9886 4.75281 12.7386 5.49438C13.4886 6.23596 13.8636 7.13858 13.8636 8.20225C13.8636 8.53184 13.822 8.85768 13.7386 9.17978C13.6553 9.50187 13.5379 9.78277 13.3864 10.0225ZM16.3182 12.9213L15.4091 12.0225C16.1515 11.4831 16.7992 10.8801 17.3523 10.2135C17.9053 9.54682 18.3106 8.8764 18.5682 8.20225C17.8106 6.53933 16.6742 5.22472 15.1591 4.25843C13.6439 3.29213 12 2.80899 10.2273 2.80899C9.59091 2.80899 8.93939 2.86891 8.27273 2.98876C7.60606 3.10861 7.08333 3.25094 6.70455 3.41573L5.65909 2.35955C6.18939 2.11985 6.86742 1.91011 7.69318 1.73034C8.51894 1.55056 9.32576 1.46067 10.1136 1.46067C12.2803 1.46067 14.2614 2.07116 16.0568 3.29213C17.8523 4.51311 19.1667 6.14981 20 8.20225C19.6061 9.16105 19.0985 10.0375 18.4773 10.8315C17.8561 11.6255 17.1364 12.3221 16.3182 12.9213ZM17.6364 18L13.8182 14.2921C13.2879 14.5019 12.6894 14.6629 12.0227 14.7753C11.3561 14.8876 10.6818 14.9438 10 14.9438C7.78788 14.9438 5.7803 14.3333 3.97727 13.1124C2.17424 11.8914 0.848485 10.2547 0 8.20225C0.30303 7.42322 0.723485 6.66292 1.26136 5.92135C1.79924 5.17978 2.45455 4.47191 3.22727 3.79775L0.363636 0.966292L1.31818 0L18.5227 17.0112L17.6364 18ZM4.15909 4.74157C3.59848 5.14607 3.05682 5.6779 2.53409 6.33708C2.01136 6.99625 1.63636 7.61798 1.40909 8.20225C2.18182 9.86517 3.3447 11.1798 4.89773 12.1461C6.45076 13.1124 8.21212 13.5955 10.1818 13.5955C10.6818 13.5955 11.1742 13.5655 11.6591 13.5056C12.1439 13.4457 12.5076 13.3558 12.75 13.236L11.2955 11.7978C11.1288 11.8727 10.9242 11.9288 10.6818 11.9663C10.4394 12.0037 10.2121 12.0225 10 12.0225C8.93939 12.0225 8.0303 11.6554 7.27273 10.9213C6.51515 10.1873 6.13636 9.2809 6.13636 8.20225C6.13636 7.97753 6.1553 7.75281 6.19318 7.52809C6.23106 7.30337 6.28788 7.10112 6.36364 6.92135L4.15909 4.74157Z"
    fill="#CCCCCC"
    />
  </svg>`,
};

function _Eye({ isPassword, onClick }) {
  return (
    <Containar onPress={onClick}>
      {isPassword ? (
        <SvgXml xml={eyes.close_eyes} />
      ) : (
        <SvgXml xml={eyes.open_eyes} />
      )}
    </Containar>
  );
}

const Containar = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export default _Eye;