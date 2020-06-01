import React from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../Config/Colors";
import defaultStyle from "../../Config/style";
const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={Colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyle.text} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: { marginRight: 10 },
});
