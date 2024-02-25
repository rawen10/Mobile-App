import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
} from "native-base";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import auth from "../firebase";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const auth = getAuth();


  const handleSignUp = () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log("done");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
console.log(password,email)
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        {/* le formulaire:  */}
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              // onChange ={setEmail}
              onChangeText ={setEmail}
              

            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              placeholder=" password"
              value={password}
              // onChange={setPassword}
              onChangeText={setPassword}

            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              placeholder=" confirm  your password"
              onChange={(value) => setConfirmPassword(value)}
              value={confirmPassword}
            />
          </FormControl>

          <Button mt="2" colorScheme="indigo" onPress={handleSignUp}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
