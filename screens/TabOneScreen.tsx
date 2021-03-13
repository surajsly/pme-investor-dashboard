import * as React from "react";
import { StyleSheet, BackHandler, Alert, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { EvilIcons, Entypo, Feather, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ShowInvestment from "../components/ShowInvestment";

import data from "../data/index";
import ShowNews from "../components/ShowNews";

export default function TabOneScreen() {
  const navigation = useNavigation();

  const hasUnsavedChanges = true;

  React.useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        if (!hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert("Really Exit?", "Are you sure you want to exit?", [
          { text: "Don't leave", style: "cancel", onPress: () => {} },
          {
            text: "Exit",
            style: "destructive",
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: () => BackHandler.exitApp(),
          },
        ]);
      }),
    [navigation, hasUnsavedChanges]
  );

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <TouchableOpacity style={styles.iconBox}>
          <Entypo name="dots-two-vertical" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <Feather name="square" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* HEAD COMPONENT*/}
      <View style={styles.bodyContainer}>
        <View style={styles.bodyContent}>
          <Text style={styles.balanceText}>Balance</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.heading}>$ 6999,996</Text>
            <Text style={styles.profitLoss}>
              <AntDesign name="caretup" size={15} color="#7CEA5E" /> 5.6% (
              $78.21 )
            </Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.investment}>
        <Text style={styles.investmentHeading}>Investment</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <ShowInvestment data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.investmentHeading}>New Investment</Text>

        <FlatList
          data={data}
          renderItem={({ item }) => <ShowNews data={item} size={150} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.investmentHeading}>Investment</Text>

        <FlatList
          data={data}
          renderItem={({ item }) => <ShowInvestment data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  iconBox: {
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  bodyContainer: {
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
