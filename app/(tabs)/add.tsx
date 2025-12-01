import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ExpenseContext } from "../_layout";

export default function AddExpense() {
  const { expenses, setExpenses } = useContext(ExpenseContext);

  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const saveExpense = async () => {
    if (!amount || !title) {
      Alert.alert("Error", "Please enter amount and title");
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      amount: Number(amount),
      title,
      note,
    };

    try {
      // update React context instantly
      const updated = [...expenses, newExpense];
      setExpenses(updated);

      // save to storage
      await AsyncStorage.setItem("expenses", JSON.stringify(updated));

      Alert.alert("Success", "Expense saved!");

      // clear form
      setAmount("");
      setTitle("");
      setNote("");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Could not save expense");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>

      <TextInput
        placeholder="Title (Food, Travel, Shopping...)"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        placeholder="Note (optional)"
        style={styles.input}
        value={note}
        onChangeText={setNote}
      />

      <Button title="Save Expense" onPress={saveExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
});
