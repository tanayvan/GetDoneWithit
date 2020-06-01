import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../Config/Colors";
import ListItem from "./Components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image source={require("../assets/welcome.jpg")} style={styles.image} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Jacket For Sale</Text>
        <Text style={styles.price}>$100</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/avatar.jpg")}
            title="Tanay Van"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 20,
    color: Colors.secondary,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 50,
  },
});
