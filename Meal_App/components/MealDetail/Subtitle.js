import { StyleSheet, Text, View } from "react-native";

function SubTitle({ children }) {
  return (
    <View style={styles.subtitleConatiner}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}
export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e2b497",
    textAlign: "center",
  },
  subtitleConatiner: {
    padding: 6,
    margin: 4,
    marginHorizontal: 13,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
