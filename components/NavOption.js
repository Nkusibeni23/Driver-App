import { Text, View, SafeAreaView } from "react-native";
import React from "react";

const data = [
  {
    id: "0",
    title: "Standard",
    image: "https://links.papareact.com/3pn",
    screen: "StandardScreen",
  },
  {
    id: "1",
    title: "Business",
    image: "https://links.papareact.com/3pn",
    screen: "BusinessScreen",
  },
  {
    id: "2",
    title: "First Class",
    image: "https://links.papareact.com/3pn",
    screen: "FirstClassScreen",
  },
];

const NavOption = () => {
  return (
    <View>
      <Text>NavOption</Text>
    </View>
  );
};

export default NavOption;
