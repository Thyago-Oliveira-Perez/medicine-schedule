import React from "react";
import { View, Text } from "react-native";

const items = ["Schedule 1", "Schedule 2", "Schedule 3"];

const ScheduleList = () => (
  <View>
    {items.map((item, index) => (
      <Text key={index}>{item}</Text>
    ))}
  </View>
);

export default ScheduleList;
