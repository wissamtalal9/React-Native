import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import PokemonCard from "@/components/PokemonCard";

export default function App() {
  const CharmandareData = {
    name: "Charmandare",
    type: "Fire",
    image: require("@/assets/images/charmander.png"),
    hp: 39,
    moves: ["scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["water", "Rock"],
  };
  const squirtleData = {
    name: "Squirtle",
    image: require("@/assets/images/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("@/assets/images/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("@/assets/images/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <PokemonCard {...CharmandareData} />
          <PokemonCard {...squirtleData} />
          <PokemonCard {...bulbasaurData} />
          <PokemonCard {...pikachuData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#99ccff",
    padding: 10,
    paddingTop: Platform.OS === "android" ? 24 : 0,
  },
});
