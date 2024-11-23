import "react-native-get-random-values";
import { SafeAreaView, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import NavOption from "../components/NavOption";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const [searchComplete, setSearchComplete] = useState(false);

  const handleSearch = (data, details = null) => {
    if (details) {
      dispatch(
        setOrigin({
          location: details.geometry.location,
          description: data.description,
        })
      );
      dispatch(setDestination(null));
      setSearchComplete(true);
      searchRef.current?.clear();
    }
  };

  return (
    <SafeAreaView className=" bg-light h-screen">
      <View className="top-8 mx-6">
        <Text className="text-4xl font-extrabold  text-primary">TE-BUKA</Text>
        <GooglePlacesAutocomplete
          ref={searchRef}
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="Where From?"
          fetchDetails={true}
          returnKeyType={"search"}
          debounce={400}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          styles={{
            container: {
              flex: 0,
              padding: 6,
            },
            textInput: {
              fontSize: 18,
              backgroundColor: "#ecf0f1",
              borderRadius: 8,
              paddingHorizontal: 12,
              marginVertical: 8,
            },
            listView: {
              backgroundColor: "#ecf0f1",
              borderRadius: 8,
              marginTop: 4,
            },
            row: {
              backgroundColor: "#ecf0f1",
              padding: 10,
              borderBottomColor: "#ecf0f1",
              borderBottomWidth: 1,
            },
            description: {
              color: "#333",
            },
          }}
          onPress={handleSearch}
        />
        <NavOption searchComplete={searchComplete} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
