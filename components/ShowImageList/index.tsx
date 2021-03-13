import React from "react";

import { Text, StyleSheet, View, FlatList } from "react-native";
import ShowImage from "../ShowImage";

const ShowImageList = ({ images }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item }) => <ShowImage image={item} />}
        keyExtractor={(image) => image.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ShowImageList;
