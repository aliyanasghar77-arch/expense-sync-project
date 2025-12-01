import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ExpenseSync</Text>
      <Text style={styles.subtitle}>Track your daily expenses easily.</Text>

      <Button 
        title="Add Expense" 
        onPress={() => router.push("/add")} 
      />

      <View style={{ height: 10 }} />

      <Button 
        title="Explore" 
        onPress={() => router.push("/explore")} 
      />

      <View style={{ height: 10 }} />

      <Button 
        title="Open Modal" 
        onPress={() => router.push("/modal")} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
});
