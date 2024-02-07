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
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                marginTop: 2,
              }}
            >
              0
            </Text>
            <Text style={{ color: "#9EA2A2", fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                marginTop: 2,
              }}
            >
              0
            </Text>
            <Text style={{ color: "#9EA2A2", fontSize: 17, marginTop: 6 }}>
              KCALS
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                marginTop: 2,
              }}
            >
              0
            </Text>
            <Text style={{ color: "#9EA2A2", fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
        <FitnessCards />
        </View>
      </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
