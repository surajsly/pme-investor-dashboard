import * as React from "react";
import { StyleSheet, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import unsplash from "../api/unsplash";
import ShowImageList from "../components/ShowImageList";

export default function TabTwoScreen() {
  const [text, setText] = React.useState("");
  const [images, setImages] = React.useState([]);

  const searchingOn = async () => {
    const response = await unsplash.get("/search/photos/", {
      params: { query: text, per_page: 5 },
    });
    setImages(response.data.results);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <TouchableOpacity onPress={searchingOn}>
          <AntDesign
            style={styles.logo}
            name="search1"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <ShowImageList images={images} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    width: "80%",
    borderRadius: 20,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logo: { padding: 10 },
});
