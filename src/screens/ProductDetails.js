import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Avatar, Button, Card } from "react-native-paper";

export default function ProductDetails({ route }) {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text>{item.productName}</Text>
      <Image
        source={{ uri: item.imageURL }}
        style={{ width: 40, height: 40 }}
      />
      <Text>{item.price}</Text>
      <Text>{item.shortDescription}</Text>
      <Text>{item.longDescription}</Text> */}

      <Card>
        <Card.Title
          title={item.productName}
          subtitle={item.shortDescription}
          titleStyle={{ color: "red", fontSize: 25 }} // Set title color to red and font size to 20
          // left={LeftContent}
        />
        <Card.Cover
          source={{
            uri: item.imageURL,
          }}
          style={{ resizeMode: "contain" }}
        />

        <Card.Content>
          <Text variant="titleLarge" style={{ color: "green", fontSize: 30 }}>
            {item.price}
          </Text>
          <Text variant="bodyMedium">{item.longDescription}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}
