import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Comment() {
  return (
    <View style={styles.shareContainer}>
      <FontAwesome name="share" size={16} color="gray" />
      <Text style={styles.footerText}>Share</Text>
    </View>
  );
}
