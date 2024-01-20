import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScheduleList from "./components/ScheduleList/ScheduleList";

export default function SchedulesScreen() {
  return (
    <View style={styles.container}>
      <Text>Schedules Screen</Text>
      <ScheduleList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
