import { StatusBar } from "expo-status-bar";
import { TextInput, Image, StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
// import * as Linking from "expo-linking";

const Login = () => {
  const [text, setText] = useState("");
  const [button, setButton] = useState("");
  const [isSelected, setSelection] = useState(false);
  const navi = useNavigation();

  // const link = () => {
  //   Linking.openURL("#");
  // };

  return (
    <View style={styles.container}>
      <Button title="home으로" onPress={() => navi.navigate("TabRouter")} />
      <Image
        source={require("../../assets/images/LoginLogo.png")}
        style={styles.Image}
      />
      <TextInput
        style={styles.TextInput}
        onChangeText={(text) => setText(text)}
        placeholder="아이디"
      />
      <TextInput
        style={styles.TextInput}
        onChangeText={(text) => setText(text)}
        placeholder="비밀번호"
        secureTextEntry={true} //false 면 다시 보임
      />
      <View style={styles.checkboxContainer}>
        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
        <Button
          onPress={() => {
            setSelection(!isSelected);
          }}
          title=""
          style={isSelected ? checkStyles.true : checkStyles.false}
        />
        <Text style={styles.label}>자동 로그인</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
      <Button
        onPress={() => Alert.alert("Simple Button pressed")}
        title="로그인"
        color="black"
      />
      <Text>비밀번호를 잊으셨나요?</Text>
      <Text>비밀번호 찾기</Text>
      <Text>아직 회원이 아니신가요?</Text>
      <Text>회원가입</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: 151,
    height: 84.66,
  },
  TextInput: {
    backgroundColor: "gray",
    width: 280,
    height: 60,
    padding: 10,
    margin: 5,
  },
});

const checkStyles = StyleSheet.create({
  true: {
    width: 100,
    height: 100,
    backgroundColor: "Blue",
  },
  false: {
    width: 100,
    height: 100,
    backgroundColor: "Red",
  },
});
