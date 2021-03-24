import React, { useRef } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  // TODO: add firebase login function later

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Root");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Login Anonymously 🔥</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe2ff",
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: "500",
    color: "#7f78d2",
  },
  button: {
    flexDirection: "row",
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#481380",
  },
  buttonText: {
    color: "#ffe2ff",
    fontSize: 24,
    marginRight: 5,
  },
});
