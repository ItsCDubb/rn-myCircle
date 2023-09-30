import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
  },
  // Header
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  authorImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  authorName: {
    color: "#0ba376",
    marginBottom: 3,
    fontSize: 16,
    fontWeight: "bold",
  },
  // Body
  postImage: {
    width: "100%",
    aspectRatio: 1,
  },
  postContent: {
    marginTop: 0,
    margin: 10,
  },
  // Footer
  postBottom: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-evenly",
    borderTopWidth: 0.5,
    borderColor: "lightgray",
  },
});

export default styles;
