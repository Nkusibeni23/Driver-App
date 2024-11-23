import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavOption from "../components/NavOption";

const HomeScreen = () => {
  return (
    <SafeAreaView className=" bg-white h-screen">
      <View className="top-8 mx-6">
        <Text className="font-black text-4xl text-primary">TE-BUKA</Text>
        <NavOption />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
