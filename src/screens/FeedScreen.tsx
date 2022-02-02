import { StatusBar } from "expo-status-bar";
import React from "react";
import { useImage } from "./hooks/useImage";

import { FlatList, SafeAreaView, View, StyleSheet, Text } from "react-native";
import { Card, Paragraph, Searchbar, Title } from "react-native-paper";
import { useCats } from "./hooks/useCats";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

interface CatProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

const FeedScreen = () => {
  const { data, isError, isLoading, refetch } = useCats();

  if (isLoading) {
    return (
      <View>
        <Text style={{ color: "white", fontSize: 50 }}>Loading ...</Text>
      </View>
    );
  }
  if (isError) {
    return <View>Error 😕</View>;
  }

  const renderItem = ({ item }) => {
    return (
      <View>
        <Card style={styles.card}>
          <Card.Title title="" subtitle="" />
          <Card.Content>
            <Card.Cover style={styles.image} source={{ uri: item.image.url }} />
            <Title style={{ color: "white" }}>{item.name}</Title>
            <Paragraph style={{ color: "white" }}>
              <Text>Origin: {item.origin} </Text>
            </Paragraph>
            <Paragraph style={{ color: "white" }}>
              <Text>Temparament(s) : {item.temperament} </Text>
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
    marginTop: StatusBar.currentHeight || 0,
  },
  card: {
    backgroundColor: "black",
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  image: {
    borderRadius: 12,
  },
});

export default FeedScreen;
