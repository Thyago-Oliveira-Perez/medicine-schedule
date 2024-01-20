import React from "react";
import { View, Text } from "react-native";

const itemList = ["Item 1", "Item 2", "Item 3"];

const ItemList = () => (
  <View>
    {itemList.map((item, index) => (
      <Text key={index}>{item}</Text>
    ))}
  </View>
);

export default ItemList;
