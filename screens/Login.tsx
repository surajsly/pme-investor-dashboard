import React, { useRef, useState } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firebase/config";
import Signin from "./SignIn";
export default function Login() {
  // TODO: add firebase login function later

  const storeToken = async (user) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const navigation = useNavigation();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userData, setuserData] = useState([]);

  const footersigninpress = () => {
    navigation.navigate("Signin");
  };

  const login = () => {
    //  navigation.navigate("Root");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setuserData(JSON.stringify(res.user));
        storeToken(userData);
        navigation.navigate("Root");
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={(text) => setemail(text)}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="black"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(text) => setpassword(text)}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => login(email, password)}
      >
        <Text style={styles.submitButtonText}> Log In </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={footersigninpress}>
        <Text style={styles.signupButtonText}> Sign In </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  input: {
    margin: 15,
    paddingHorizontal: 15,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
  },
  submitButton: {
    backgroundColor: "black",
    padding: 10,
    margin: 15,
    fontWeight: "500",
    alignItems: "center",
    height: 40,
    borderRadius: 15,
  },
  submitButtonText: {
    color: "white",
  },
  signupButton: {
    padding: 10,
    margin: 15,
    fontWeight: "700",
    alignItems: "center",
    height: 40,
    borderRadius: 15,
  },
  signupButtonText: {
    color: "#A1ACB6",
    fontSize: 25,
    fontWeight: "500",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 15,
  },
});
