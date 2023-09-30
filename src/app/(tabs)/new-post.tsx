import { useNavigation, useRouter } from "expo-router";
import { Text, View } from "../../components/Themed";
import { Pressable, TextInput } from "react-native";
import { useLayoutEffect, useState } from "react";
import styles from "../tabStyles/new-post-styles";

export default function NewPost() {
  const [content, setContent] = useState("");
  const navigation = useNavigation();
  const router = useRouter();
  const handlePost = () => {
    console.warn("Posting: ", content);
    setContent("");
    router.push("/(tabs)/");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={handlePost} style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </Pressable>
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="What do you want to say?"
        multiline
        style={styles.input}
      />
    </View>
  );
}
