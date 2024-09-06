import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
  SectionList,
} from "react-native";
import PokemonData from "@/data.json";
import groupListPokemon from "@/group-data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"5F9EA0"} />
      {/* <ScrollView style={styles.ScrollView}>
        {PokemonData.map((pokemon, index) => (
          <View style={styles.Card} key={index}>
            <Text style={styles.Text}>{pokemon.name}</Text>
            <Text style={styles.Text}>{pokemon.type}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        data={PokemonData}
        renderItem={({ item }) => {
          return (
            <View style={styles.Card} key={item.id}>
              <Text style={styles.Text}>{item.name}</Text>
              <Text style={styles.Text}>{item.type}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        // TODO: ItemSeparatorComponent
        // It's Like make every single items change it
        // But we don't want it.
        // So, we use ItemSeparatorComponent
        // It's like add a line between each item
        // ItemSeparatorComponent={() => <View style={styles.bjjj} />}

        // If you want to make the FlatList horizontal,
        // you can set it to true in the FlatList component
        // horizontal={true}
        ItemSeparatorComponent={<View style={{ height: 20 }} />}
        //  horizontal
        //TODO: ListEmptyComponent
        // it's mean return the msg when no founded components
        ListEmptyComponent={
          <Text style={styles.ListEmpty}>NO Item's It's Founded</Text>
        }
        //TODO: Make Header for the list
        ListHeaderComponent={
          <Text style={styles.HeaderList}>🎉 Pokemon List 🎉</Text>
        }
        //TODO: make Footer for the list
        ListFooterComponent={
          <Text style={styles.FooterList}>🎉 End Of The List FlatList 🎉</Text>
        }
      />
      {/*
        TODO: Section List
        IT's work in json makke sections list depend of groups
      
      */}
      <SectionList
        sections={groupListPokemon}
        renderItem={({ item }) => {
          return (
            <View style={styles.Card}>
              <Text style={styles.Text}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
            {section.type}
          </Text>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListHeaderComponent={
          <Text style={styles.HeaderList}>🎉 Pokemon Group By 🎉</Text>
        }
        ListFooterComponent={
          <Text style={styles.FooterList}>🎉 End The List SectionList 🎉</Text>
        }
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  HeaderList: {
    fontSize: 24,
    fontWeight: "bold",
    //marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: "#a968b4",
    color: "black",
    textAlign: "center",
    padding: 10,
  },
  FooterList: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    alignItems: "center",
    marginBottom: "75%",
    backgroundColor: "#a968b4",
  },
  ListEmpty: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    alignItems: "center",
    marginTop: "75%",
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  ScrollView: {
    paddingHorizontal: 17,
  },
  Card: {
    padding: 10,
    backgroundColor: "lightblue",
    alignItems: "center",
    //  marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  Text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
