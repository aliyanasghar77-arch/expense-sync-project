import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ExpenseContext } from "../_layout"; // adjust path if needed

type Expense = {
  id: string;
  title: string;
  amount: number;
};

export default function ListScreen() {
  const { expenses } = useContext(ExpenseContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses as Expense[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.amount}>Rs {item.amount}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No expenses yet.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
    marginTop: 5,
    color: "green",
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
    color: "grey",
  },
});
