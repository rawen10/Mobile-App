import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { heightToDp, width, widthToDp } from "rn-responsive-screen";

export default function CartItem({ product }) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: "#e6e6e6",
    width: widthToDp("90%"),
  },
  image: {
    width: widthToDp(30),
    height: heightToDp(30),
    borderRadius: 10,
  },
  title: {
    fontSize: widthToDp(4),
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    marginLeft: widthToDp(3),
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: heightToDp(2),
    width: widthToDp(50),
  },
  description: {
    fontSize: widthToDp(3.5),
    color: "#8e8e93",
    marginTop: heightToDp(2),
  },

  price: {
    fontSize: widthToDp(4),
  },
  quantity: {
    fontSize: widthToDp(4),
  },
});