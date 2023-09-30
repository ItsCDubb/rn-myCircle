import PostListItem from "../../components/PostListItem";
import posts from "../../../assets/data/posts.json";
import { useLocalSearchParams } from "expo-router";
import { Text, ScrollView } from "react-native";

export default function PostDetails() {
  const { id } = useLocalSearchParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <Text>Post not found!</Text>;
  }

  return (
    <ScrollView>
      <PostListItem post={post} />
    </ScrollView>
  );
}
