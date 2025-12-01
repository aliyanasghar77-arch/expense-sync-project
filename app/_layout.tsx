import { Stack } from "expo-router";
import { createContext, useState } from "react";

export const ExpenseContext = createContext(null);

export default function RootLayout() {
  const [expenses, setExpenses] = useState([]);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      <Stack />
    </ExpenseContext.Provider>
  );
}
