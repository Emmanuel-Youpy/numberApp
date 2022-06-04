import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Cards from "../Cards";
import Colors from "../../constants/Colors";
import Input from "../Input";
import NumberContainer from "../NumberContainer";

const StartGameScreen = (props) => {
  const [enterValue, setenterValue] = useState("");
  const numberInputHandler = (inputText) => {
    setenterValue(inputText.replace(/[^0-9]/g, ""));
  };
  const [confirmed, setconfirmed] = useState(false);
  const [selectedNumber, setselectedNumber] = useState();

  function resetInputHandler() {
    setenterValue("");
    setconfirmed(false);
  }

  function confirmInputHandler() {
    const chooseNumber = parseInt(enterValue);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setconfirmed(true);
    setselectedNumber(chooseNumber);
    setenterValue("");
    Keyboard.dismiss();
  }
  // function name(params) {

  // }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Cards style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START GAME"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Cards>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game</Text>
        <Cards style={styles.inputContainer}>
          <Text>Select A New Number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enterValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                title="Reset"
                onPress={resetInputHandler}
              />
            </View>

            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title="Confirm"
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Cards>
        {confirmedOutput}
        <TextInput />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: "100%",
    maxWidth: "80%",
    alignItems: "center",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 80,
    justifyContent: "space-between",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default StartGameScreen;
