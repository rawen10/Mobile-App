import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button } from "native-base";
import Products from "./Products";

export default function Home({navigation},route) {
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://e1.pxfuel.com/desktop-wallpaper/844/905/desktop-wallpaper-black-cyber-dark-cyber-aesthetic-thumbnail.jpg",
        }}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Text style={{color:"white"}}>Welcome </Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{color:"white"}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={{color:"white"}}>Log In</Text>
        </TouchableOpacity> */}
        <Products />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // flex: 1,
    justifyContent: "center",
  },
});
