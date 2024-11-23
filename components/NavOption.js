import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "0",
    title: "Standard",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "1",
    title: "Business",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "First Class",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
];

export default function NavOptions() {
  const navigation = useNavigation();
  const [focusInput, setFocusInput] = useState(null);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("MapScreen")}
          className={`p-2 pl-6 pb-8 pt-4 m-1 rounded-2xl mt-6  ${
            focusInput === item.id
              ? "bg-primary border border-light"
              : "bg-light border border-primary"
          }`}
        >
          <View>
            <Image
              source={{ uri: item.image }}
              className="w-36 h-28 object-contain"
            />
            <View className="flex-row items-center space-x-3">
              <Text
                className={`font-black text-base mt-2 ${
                  focusInput === item.id ? "text-light" : "text-primary"
                }`}
              >
                {item.title}
              </Text>
              <View className="p-1 mt-2 rounded-full flex items-center justify-center ">
                <Icon
                  name="arrow-forward"
                  type="material"
                  size={20}
                  color="#3498db"
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
