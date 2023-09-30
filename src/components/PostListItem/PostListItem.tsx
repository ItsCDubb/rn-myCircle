import { Image, Pressable, Text, View } from "react-native";
import PostButtons from "../PostButtons";
import { Post } from "../../types";
import { Link } from "expo-router";
import styles from "./styles";

type PostListItemProps = {
  post: Post;
};

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <Link href={`/posts/${post.id}`} asChild>
      <Pressable style={styles.postContainer}>
        {/* Header */}
        <Link href={`/users/${post.author.id}`} asChild>
          <Pressable style={styles.authorContainer}>
            {/* Author image */}
            <Image
              source={{ uri: post.author.image }}
              style={styles.authorImage}
            />
            <View>
              {/* Author Name */}
              <Text style={styles.authorName}>{post.author.name}</Text>
              {/* Author Position */}
              <Text>{post.author.position}</Text>
            </View>
          </Pressable>
        </Link>
        {/* Text Content */}
        <Text style={styles.postContent}>{post.content}</Text>
        {/* Image Content */}
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImage} />
        )}
        {/* Footer */}
        <View style={styles.postBottom}>
          <PostButtons />
        </View>
      </Pressable>
    </Link>
  );
}
