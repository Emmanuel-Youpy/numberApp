import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./components/screens/StartGameScreen";
import GameScreen from "./components/screens/GameScreen";
import { useState } from "react";
import GameOverScreen from "./components/screens/GameOverScreen";

export default function App() {
  const [userNumber, setuserNumber] = useState();
  const [guessRound, setguessRound] = useState(0);

  function startGameHandler(selectedNumber) {
    setuserNumber(selectedNumber);
  }

  function gameOverHandler(numOfRounds) {
    setuserNumber(numOfRounds);
    setguessRound(0);
  }

  function configureNewGameHandler(props) {
    setguessRound(0);
    setuserNumber(null);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen userChoce={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRound}
        userNuber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
