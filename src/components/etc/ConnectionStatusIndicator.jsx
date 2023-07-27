import { View, Text } from "react-native";
import styled, { css } from "styled-components/native";
import { theme } from "../../style/theme";

export default function ConnectionStatusIndicator() {
  return (
    <Wraaper>
      <StatusBox status={true} />
      <DeviceId>{"SL-J06328"}</DeviceId>
    </Wraaper>
  );
}

const Wraaper = styled(View)`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const StatusBox = styled(View)`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background-color: ${(props) =>
    props.status ? theme.color.green_600 : theme.color.red_500};
`;

const DeviceId = styled(Text)`
  color: ${theme.color.gray_600};
`;
