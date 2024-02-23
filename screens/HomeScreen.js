/*create structure: rafc + */
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import FitnessCards from "../components/FitnessCards";
const HomeScreen = () => {
  return (
      <ScrollView style={{ marginTop: 40 }}>
        <View style={{
          backgroundColor: "#294374",
          padding: 10,
          width: "100%",
        }}
        >
        <Image style={{alignSelf:"center", marginTop:10}} source={require("../images/logo.png")}></Image>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
        </View>
        <FitnessCards/>
        </View>
      </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
