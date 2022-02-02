import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

export const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchbar}
    />
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  searchbar: {
    margin: 20,
    borderRadius: 20,

    color: "white",
  },
});
