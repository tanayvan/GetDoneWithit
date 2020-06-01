import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/screens/Components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/screens/Components/Screen";
import Icon from "./app/screens/Components/Icon";
import ListItem from "./app/screens/Components/ListItem";
import AccountsScreen from "./app/screens/AccountsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/screens/Components/AppTextInput";
export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
