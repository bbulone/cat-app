import { StatusBar } from "expo-status-bar";
import React from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import { Title } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "react-query";
import FeedScreen from "./src/screens/FeedScreen";
import SearchScreen from "./src/screens/SearchScreen";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Title>
            <Text style={{ fontSize: 30, color: "white" }}>CATS APP</Text>
          </Title>
        </View>
        <SearchScreen />
        <QueryClientProvider client={queryClient}>
          <FeedScreen />
        </QueryClientProvider>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c79c7",
    minHeight: 150,
  },
});
