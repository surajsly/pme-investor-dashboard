import React from "react";
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const PropertyDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Goals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  heading: {
    marginVertical: 30,
    fontSize: 30,
    color: "#141823",
  },
});

export default PropertyDetailScreen;
