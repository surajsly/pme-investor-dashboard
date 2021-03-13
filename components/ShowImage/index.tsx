import React from "react";

import { Text, StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShowImage = ({ image }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={{ uri: image?.urls?.regular }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "95%",
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
});

export default ShowImage;
