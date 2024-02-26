import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Settings,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Login from "./src/screens/Login";
import { NativeBaseProvider } from "native-base";
import SignUp from "./src/screens/SignUp";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { PaperProvider } from "react-native-paper";
import ProductDetails from "./src/screens/ProductDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./src/firebase";
import Profile from "./src/screens/Profile";
import Setting from "./src/screens/Setting";

export default function App() {
  const Tab = createBottomTabNavigator();
  const AuthStack = createStackNavigator();
  const [user, setUser] = useState(null); // Initialize user state

  // Listen for authentication state changes
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser); // Update user state
  });

  return (
    <PaperProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          {user ? (
            <Tab.Navigator>
              <Tab.Screen
                name="HomeStack"
                component={HomeStackNavigator}
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="home" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarLabel: "Profile",
                  tabBarIcon: ({ color, size }) => (
                    <Entypo name="user" size={24} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                  tabBarLabel: "Settings",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="settings" size={24} color="black" />
                  ),
                }}
              >
              </Tab.Screen>
            </Tab.Navigator>
          ) : (
            <AuthStack.Navigator>
              <AuthStack.Screen name="Login" component={Login} />
              <AuthStack.Screen name="Sign Up" component={SignUp} />
            </AuthStack.Navigator>
          )}
        </NavigationContainer>
      </NativeBaseProvider>
    </PaperProvider>
  );
}

function HomeStackNavigator() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={ProductDetails} />
    </HomeStack.Navigator>
  );
}
