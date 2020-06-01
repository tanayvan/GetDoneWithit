import React from "react";
import { View, Text } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/screens/Components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/screens/Components/Screen";
import Icon from "./app/screens/Components/Icon";
import ListItem from "./app/screens/Components/ListItem";
export default function App() {
  return (
    <Screen>
      <ListItem
        title="My Title"
        subTitle="sub Title"
        ImageComponent={<Icon name="mail" />}
      />
    </Screen>
  );
}
