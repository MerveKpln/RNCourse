import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-03-15"),
  },

  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2023-03-13"),
  },
  {
    id: "e3",
    description: "A pair of bananas",
    amount: 5.99,
    date: new Date("2023-03-12"),
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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const UpdatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[UpdatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[UpdatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expensesData) {
    dispatch({ type: "ADD", payload: expensesData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expensesData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expensesData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
