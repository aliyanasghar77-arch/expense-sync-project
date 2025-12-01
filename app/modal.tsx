import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.title}>This is a Modal</Text>
        <Text style={styles.content}>
          You can put any content here like forms, messages, or buttons.
        </Text>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()} // closes the modal
        >
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
  },
});
