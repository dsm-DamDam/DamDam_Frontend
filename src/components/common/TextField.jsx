import styled, { css } from "styled-components/native";
import { theme } from "../../style/theme";
import { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import _Eye from "../../assets/icons/_eyes";

function TextField({
  children,
  placeholder,
  helpText,
  isError,
  errorText,
  value,
  onChangeText,
  passwordType,
}) {
  const [isFocus, setIsFocus] = useState(false);
  const [isErrorState, setIsErrorState] = useState(isError);
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  return (
    <Container>
      <InputBox
        isFocus={isFocus}
        style={
          (isFocus && style.FocusInput) || (isErrorState && style.ErrorInput)
        }
      >
        <TextInput_
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.color.gray_600}
          secureTextEntry={isPasswordHidden}
          onFocus={() => {
            setIsFocus(true);
            setIsErrorState(false);
          }}
          onEndEditing={() => {
            setIsFocus(false);
          }}
        />
        {passwordType ? (
          <_Eye
            isPassword={isPasswordHidden}
            onClick={() => {
              setIsPasswordHidden((prev) => !prev);
            }}
          />
        ) : (
          children
        )}
      </InputBox>
      {!isErrorState && helpText && (
        <Caption numberOfLines={1}>{helpText}</Caption>
      )}
      {isErrorState && (
        <Caption style={style.ErrorText} numberOfLines={1}>
          {errorText}
        </Caption>
      )}
    </Container>
  );
}

const style = StyleSheet.create({
  FocusInput: {
    borderWidth: 1,
    borderColor: theme.color.brand_color,
  },
  ErrorInput: {
    borderWidth: 1,
    borderColor: theme.color.red_500,
  },
  ErrorText: {
    color: theme.color.red_500,
  },
});

const Container = styled(View)`
  margin-top: 150px;
  width: 340px;
`;

const Caption = styled(Text)`
  margin-left: 12px;
  margin-top: 6px;
  color: ${theme.color.gray_600};
`;

const InputBox = styled(View)`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.color.gray_200};
  border-radius: 2px;
  ${(props) =>
    props.isFocus &&
    css`
      border: 1px solid ${theme.color.brand_color};
    `}
`;

const TextInput_ = styled(TextInput)`
  flex: 1;
  height: 60px;
  font-family: "NotoSansKR-Regular";
  font-size: 16px;
  color: ${theme.color.balck};
`;

export default TextField;
