import { Text, View } from "../../components/Themed";
import styles from "../tabStyles/circle-styles";

export default function Circle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Circle</Text>
    </View>
  );
}
