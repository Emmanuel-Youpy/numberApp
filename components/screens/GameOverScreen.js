import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Game Over!!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="New Game" omPress={onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GameOverScreen;
