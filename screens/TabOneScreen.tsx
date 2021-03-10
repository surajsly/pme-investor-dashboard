import * as React from "react";
import { StyleSheet, BackHandler, Alert } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

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
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
