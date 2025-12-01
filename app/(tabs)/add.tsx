import { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { ExpenseContext } from "../_layout";
import { useRouter } from "expo-router";

export default function AddExpense() {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const saveExpense = () => {
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };

    setExpenses([...expenses, newExpense]);
    router.push("/explore");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Expense</Text>

      <TextInput
        style={styles.input}
        placeholder="Expense Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Button title="Save Expense" onPress={saveExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});
