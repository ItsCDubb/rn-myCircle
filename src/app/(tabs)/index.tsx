import PostListItem from "../../components/PostListItem/PostListItem";
import posts from "../../../assets/data/posts.json";
import { FlatList } from "react-native";

export default function Home() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    />
  );
}
