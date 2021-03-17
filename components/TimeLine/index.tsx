// Show Timeline using React Native Timeline ListView
// https://aboutreact.com/react-native-timeline-listview/

// import React in our code
import React from "react";

// import all the components we are going to use
import { StyleSheet, Text, View } from "react-native";

// import Timeline
import Timeline from "react-native-timeline-flatlist";

//
import Timelinesdata from "../../data/dataTimeline";
const CustomTimeLine = (props) => {
  console.log(props.data.id);
  const timelinedata = Timelinesdata.find((x) => x.id === props.data.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction timeline</Text>
      <Timeline
        data={timelinedata?.timeline}
        circleSize={20}
        circleColor="rgb(45,156,219)"
        lineColor="rgb(45,156,219)"
        timeContainerStyle={{ minWidth: 52, marginTop: 5 }}
        descriptionStyle={{ color: "gray" }}
        options={{
          style: { paddingTop: 5 },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 16,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default CustomTimeLine;
