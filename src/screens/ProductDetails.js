import { View, Text, Image } from "react-native";
import React from "react";


export default function ProductDetails({ route }) {
  const { item } = route.params;
  return (
    <View>
      <Text>{item.productName}</Text>
      <Image
        source={{ uri: item.imageURL }}
        style={{ width: 40, height: 40 }}
      />
      <Text>{item.price}</Text>
      <Text>{item.shortDescription}</Text>
      <Text>{item.longDescription}</Text>
    </View>
  );
}
