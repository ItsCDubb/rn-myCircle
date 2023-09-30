import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  experienceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 5,
    paddingBottom: 10,
    borderBottomWidth: 0.5 ,
    borderBottomColor: "lightgrey",
  },
  companyLogo: {
    marginRight: 5,
    width: 50,
    aspectRatio: 1,
  },
  title: {
    color: "#0ba376",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default styles;
