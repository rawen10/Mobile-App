import { View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "native-base";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { items } from "../data";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";


export default function Products() {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');

  // Filtering logic based on search query
  const filteredItems = items.filter(item =>
    item.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView>
    <SearchBar  onSearch={setSearchQuery}/>
      <View style={{ gap: 20 , marginTop:20}}>
        {items.map((elem, index) => {
          return (
            <Card key={index}>
              <Card.Title
                titleStyle={{ color: "red", fontSize: 25 }} // Set title color to red and font size to 20
                title={elem.productName}
                subtitle={elem.shortDescription}
                // left={LeftContent}
              />
              <Card.Cover
                source={{
                  uri: elem.imageURL,
                }}
                style={{ resizeMode: "contain" }}
              />

              <Card.Content>
                <Text
                  variant="titleLarge"
                  style={{ color: "green", fontSize: 27 }}
                >
                  {elem.price}
                </Text>
                <Text variant="bodyMedium">{elem.longDescription}</Text>
              </Card.Content>

              <Card.Actions>
                <Button>Cancel</Button>
                <Button
                  onPress={() => navigation.navigate("Details", { item: elem })}
                >
                  See details
                </Button>
              </Card.Actions>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
}
