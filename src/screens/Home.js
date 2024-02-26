import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button, ScrollView } from "native-base";
import Products from "./Products";
import auth from "../firebase";
import { signOut } from "firebase/auth"; // Import necessary functions from firebase/auth


export default function Home({ navigation }, route) {
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      // Additional logout logic if needed
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
 
  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://e1.pxfuel.com/desktop-wallpaper/844/905/desktop-wallpaper-black-cyber-dark-cyber-aesthetic-thumbnail.jpg",
        }}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Text style={styles.text}>Welcome</Text>
        <Button  style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </Button>
        <Products />
      </ImageBackground>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

