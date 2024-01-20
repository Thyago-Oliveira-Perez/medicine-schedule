import React from "react";
import { View, Text } from "react-native";
import { Schedule } from "./types";

export default function ScheduleItem(items: [Schedule]) {
  return (
    <View>
      {items.map((item: Schedule, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
    </View>
  );
}
