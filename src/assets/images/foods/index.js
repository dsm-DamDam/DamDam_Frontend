import { Image } from "react-native";
import React from "react";

const food_object = {
  on: {
    coffee: require("./coffee_on.png"),
    chicken: require("./chicken_on.png"),
    pizza: require("./pizza_on.png"),
    hamburger: require("./hamburger_on.png"),
    dessert: require("./dessert_on.png"),
    out_food: require("./out_food_on.png"),
    convenience_store: require("./convenience_store_on.png"),
  },
  off: {
    coffee: require("./coffee_off.png"),
    chicken: require("./chicken_off.png"),
    pizza: require("./pizza_off.png"),
    hamburger: require("./hamburger_off.png"),
    dessert: require("./dessert_off.png"),
    out_food: require("./out_food_off.png"),
    convenience_store: require("./convenience_store_off.png"),
  },
};

function _Food({ type, selected, size }) {
  if (type && selected) {
    const imageSource = food_object[selected][type];
    return <Image style={{ width: size, height: size }} source={imageSource} />;
  } else {
    return null;
  }
}

export default _Food;
