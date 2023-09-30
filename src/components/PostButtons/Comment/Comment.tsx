import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Comment() {
  return (
    <View style={styles.commentContainer}>
      <FontAwesome name="commenting-o" size={16} color="gray" />
      <Text style={styles.footerText}>Comment</Text>
    </View>
  );
}
