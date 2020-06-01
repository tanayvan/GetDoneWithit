import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "./Components/Screen";
import Card from "./Components/Card";
import Colors from "../Config/Colors";
const listings = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: 100,
    image: require("../assets/welcome.jpg"),
  },
  {
    id: 2,
    title: "Cough in Great Condition",
    price: 10000,
    image: require("../assets/avatar.jpg"),
  },
];
const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: Colors.light,
  },
});
