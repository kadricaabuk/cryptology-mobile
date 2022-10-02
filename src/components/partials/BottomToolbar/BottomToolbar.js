import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BottomToolbarStyle } from "./BottomToolbarStyle";

const BottomToolbar = ({ route, setRoute }) => {
  const Routes = [
    {
      id: 0,
      route: "home",
      label: "Home",
    },
    {
      id: 1,
      route: "profile",
      label: "Profile",
    },
    {
      id: 2,
      route: "settings",
      label: "Settings",
    },
  ];

  return (
    <View style={styles.container}>
      {Routes.map((r) => (
        <TouchableOpacity
          style={route === r.route ? styles.activeItem : styles.item}
          key={r.id}
          onPress={() => setRoute(r.route)}
        >
          <Text style={styles.text}>{r.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create(BottomToolbarStyle);

export default BottomToolbar;
