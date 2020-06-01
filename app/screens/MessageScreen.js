import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Constants from "expo-constants";

import ListItem from "./Components/ListItem";
import Screen from "./Components/Screen";
import ListItemSeperator from "./Components/ListItemSeperator";

const initialMessages = [
  {
    id: 1,
    title: "t1",
    description: "d1",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description: "d2",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 3,
    title: "t3",
    description: "d3",
    image: require("../assets/avatar.jpg"),
  },
];
const MessageScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessage] = useState(initialMessages);
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            {
              id: 2,
              title: "t2",
              description: "d2",
              image: require("../assets/avatar.jpg"),
            },
            {
              id: 3,
              title: "t3",
              description: "d3",
              image: require("../assets/avatar.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
