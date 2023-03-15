import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },

  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2021-01-09"),
  },
  {
    id: "e3",
    description: "A pair of bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2021-02-09"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 14.99,
    date: new Date("2021-02-19"),
  },
  {
    id: "e6",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2021-01-09"),
  },
  {
    id: "e7",
    description: "A pair of bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 14.99,
    date: new Date("2021-02-09"),
  },
  {
    id: "e9",
    description: "Another book",
    amount: 14.99,
    date: new Date("2021-02-19"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 0,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
