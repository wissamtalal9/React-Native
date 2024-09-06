import React from "react";

import { View, Text, StyleSheet, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.Card}>
      <View style={styles.NameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>💖{hp}</Text>
      </View>
      <Image
        style={styles.Image}
        source={image}
        accessibilityLabel={`${name} Pokemone`}
      />
      <View style={styles.TypeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.TypeEmoji}>{emoji}</Text>
          <Text style={styles.TypeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.MovesContainer}>
        <Text style={styles.MovesText}>moves : {moves.join(", ")}</Text>
      </View>
      <View style={styles.WeaknessContainer}>
        <Text style={styles.WeaknessText}>
          weaknesses : {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

// ....................
const styles = StyleSheet.create({
  Card: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#333",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  NameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
    marginTop: 8,
    fontWeight: "bold",
  },
  Image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginLeft: 14,
    marginBottom: 16,
  },
  TypeContainer: {
    marginBottom: 40,
  },
  badge: {
    borderWidth: 4,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    borderWidth: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  TypeEmoji: {
    fontSize: 28,
    marginRight: 12,
    fontWeight: "bold",
  },
  TypeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  MovesContainer: {
    marginBottom: 16,
  },
  MovesText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  WeaknessContainer: {
    marginBottom: 8,
  },
  WeaknessText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
