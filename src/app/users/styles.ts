import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  userProfileContainer: {
    
  },
  userProfileHeader: {
    marginBottom: 5,
    backgroundColor: "white",
  },
  userBackgroundImage: {
    marginBottom: -60,
    width: "100%",
    aspectRatio: 5 / 2,
  },
  headerContent: {
    padding: 10,
    paddingTop: 0,
  },
  userProfileImage: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "white",
  },
  userName: {
    color: "#0ba376",
    fontSize: 24,
    fontWeight: "900",
  },
  profileConnectButton: {
    alignItems: "center",
    marginVertical: 10,
    padding: 7,
    borderRadius: 30,
    backgroundColor: "#0ba376",
  },
  profileConnectButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  sectionContainer: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "white",
  },
  sectionTitle: {
    color: "#0ba376",
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  sectionParagraph: {
    lineHeight: 20,
  },
});

export default styles;
