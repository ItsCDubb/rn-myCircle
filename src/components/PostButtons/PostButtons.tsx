import Comment from "./Comment";
import Likes from "./Likes";
import Share from "./Share";
import styles from "./styles";

export default function PostButtons() {
  return (
    <>
      <Likes />
      <Comment />
      <Share />
    </>
  );
}
