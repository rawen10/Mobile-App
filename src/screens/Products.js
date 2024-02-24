import { View } from "react-native";
import React from "react";
import { ScrollView } from "native-base";
import { Avatar, Button, Card, Text } from "react-native-paper";
import {items} from '../data'
import { useNavigation } from '@react-navigation/native';

export default function Products() {
  const navigation = useNavigation()
  return (
    <ScrollView >
      <View style={{gap:20}}>
{items.map((elem,index)=>  {
return(
        <Card key={index}>
          <Card.Title
            title="Product"
            subtitle="MSI Gaming Laptop"
            // left={LeftContent}
          />
          <Card.Cover
            source={{
              uri: elem.imageURL,
            }}
           width={50}
            style={{objectFit: 'contain'}}
          />
          <Card.Content>
            <Text variant="titleLarge">{elem.productName} </Text>
            <Text variant="bodyMedium">17,3" FHD - NVIDIA® GeF</Text>
          </Card.Content>

          <Card.Actions>
            <Button>Cancel</Button>
            <Button onPress={()=>navigation.navigate('Details',{item:elem})}>See details</Button>
          </Card.Actions>
        </Card>
)})}
      </View>
    </ScrollView>
  );
}
