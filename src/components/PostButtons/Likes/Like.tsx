import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Like() {
  return (
    <View style={styles.likeComtainer}>
      <FontAwesome name="thumbs-o-up" size={16} color="gray" />
      <Text style={styles.footerText}>Like</Text>
    </View>
  );
}
