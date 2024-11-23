import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptions from "../components/RideOptions";

const Stack = createNativeStackNavigator();

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.navigatorContainer}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptions}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 2,
  },
  navigatorContainer: {
    flex: 1,
  },
});

export default MapScreen;
