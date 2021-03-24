import React from "react";

import { Text, StyleSheet, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShowNews = (props) => {
  const selectIcon = (type) => {
    if (type === "home")
      return (
        <AntDesign name="home" size={20} color="black" style={styles.icon} />
      );
    else if (type === "health")
      return (
        <AntDesign name="hearto" size={20} color="black" style={styles.icon} />
      );
    else if (type === "stock")
      return (
        <Feather
          name="trending-up"
          size={20}
          color="black"
          style={styles.icon}
        />
      );
    else if (type === "property")
      return (
        <FontAwesome5
          name="building"
          size={20}
          color="black"
          style={styles.icon}
        />
      );
    else if (type === "bond")
      return (
        <MaterialIcons
          name="outbond"
          size={24}
          color="black"
          style={styles.icon}
        />
      );
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.headerContainer}>
        {selectIcon(props.data.type)}
        <Text style={styles.heading}>{props.data.title}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.numberContainer}>
          <Text style={{ fontSize: 14, color: "grey" }}>
            New Metro station connecting Delhi to Nodia Comming soon
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffafa",
    borderRadius: 10,
    elevation: 2,
    width: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
  },
  bodyContainer: {},
  headerContainer: {
    flexDirection: "row",
    alignContent: "flex-end",
  },
  icon: {
    paddingVertical: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  currentSales: {
    fontSize: 20,
  },
  numberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});

export default ShowNews;
