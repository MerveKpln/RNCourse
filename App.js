import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another piece of text!</Text>
      </View>

      <Text
        style={{ margin: 16, borderWidth: 1, borderColor: "red", padding: 16 }}
      >
        Hellooo
      </Text>

      <Button title="Top me !" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 1,
    borderColor: "blue",
    padding: 16,
  },
});
