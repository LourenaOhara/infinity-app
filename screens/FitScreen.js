import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
const FitScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const [index, setIndex] = useState(0);
  const excercises = route.params.excercises;
  const current = excercises[index];
  console.log(current, "first excercise");
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Image
        style={{ width: "100%", height: 370, marginTop:50 }}
        source={{ uri: current.image }}
      />
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {current.name}
      </Text>

      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 38,
          fontWeight: "bold",
        }}
      >
        x{current.sets}
      </Text>

      <Pressable
      onPress={() => navigation.navigate("Rest")}
        style={{
          backgroundColor: "blue",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
          borderRadius: 8,
          padding: 10,
          width: 150,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          }}
        >
          DONE
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
