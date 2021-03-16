import React from "react";
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomTimeLine from "../components/TimeLine";

const PropertyDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyContent}>
          <Text style={styles.balanceText}>Balance</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.heading}>
              $ {props.route.params.data.price}
            </Text>
            <Text style={styles.profitLoss}>
              {props.route.params.data.pl > 0 ? (
                <AntDesign name="caretup" size={15} color="#7CEA5E" />
              ) : (
                <AntDesign name="caretdown" size={15} color="red" />
              )}{" "}
              {props.route.params.data.pl}% (${" "}
              {(
                parseFloat(props.route.params.data.price) *
                parseFloat(props.route.params.data.pl)
              ).toFixed(2)}
              )
            </Text>
          </View>
        </View>
      </View>

      <CustomTimeLine data={props.route.params.data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },

  bodyContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "#637DF3",
    height: "25%",
    elevation: 10,
    borderRadius: 10,
  },
  bodyContent: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#637DF3",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  heading: {
    color: "white",
    fontSize: 30,
  },
  balanceText: {
    color: "#D0D3DF",
    fontSize: 15,
  },
  investmentHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    paddingVertical: 5,
    color: "#A1ACB6",
  },
  balanceContainer: {
    backgroundColor: "#637DF3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profitLoss: {
    color: "#D0D3DF",
    fontSize: 15,
  },
});

export default PropertyDetailScreen;
