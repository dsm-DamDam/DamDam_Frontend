import axios from "axios";
import { BASE_URL } from "@env";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetUserApi = async () => {
  const token = await AsyncStorage.getItem("access_token");
  const data = await axios
    .get(`${BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => data)
    .catch((error) => {
      console.error(error);
      return {
        nickname: "",
        userID: "",
        email: "",
        // password: "",
      };
    });
  return data;
};
