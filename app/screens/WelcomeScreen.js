import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import AppButton from "./Components/Button";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/welcome.jpg")}
    >
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => console.log("Clicked")} />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },

  buttonContainer: {
    padding: 20,
  },
});
