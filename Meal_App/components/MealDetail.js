import { StyleSheet, Text, View } from "react-native";

function MealDetail({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}
export default MealDetail;
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddin: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});