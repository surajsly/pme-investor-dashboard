import * as React from "react";
import { StyleSheet, AsyncStorage } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function TabTwoScreen() {
  const navigation = useNavigation();

  const signOut = async () => {
    await AsyncStorage.removeItem("userData");
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signOut}>
        <Text style={styles.title}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
