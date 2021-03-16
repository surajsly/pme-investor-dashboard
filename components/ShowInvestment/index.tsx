import React from "react";

import { Text, StyleSheet, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import PropertyDetailScreen from "../../screens/PropertyDetailScreen";

import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import CustomTimeLine from "../TimeLine";

const ShowInvestment = (props) => {
  const navigation = useNavigation();

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

  const onPress = () => {
    navigation.navigate("PropertyDetailScreen", { data: props.data });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.headerContainer}>
        {selectIcon(props.data.type)}
        <Text style={styles.heading}>{props.data.title}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.currentSales}>Current Sales</Text>
        <View style={styles.numberContainer}>
          <Text style={{ fontWeight: "bold" }}>$ {props.data.price}</Text>
          <Text>
            {props.data.pl > 0 ? (
              <AntDesign name="caretup" size={15} color="#7CEA5E" />
            ) : (
              <AntDesign name="caretdown" size={15} color="red" />
            )}{" "}
            {props.data.pl}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    width: 140,
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
    fontSize: 15,
  },
  numberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});

export default ShowInvestment;
