import { Experience } from "../../types";
import { Image, Text, View } from "react-native";
import styles from "./styles";

type ExperienceListItemProps = {
  experience: Experience;
};

export default function ExperienceListItem({
  experience,
}: ExperienceListItemProps) {
  return (
    <View style={styles.experienceContainer}>
      <Image
        source={{ uri: experience.companyImage }}
        style={styles.companyLogo}
      />
      <View>
        <Text style={styles.title}>{experience.title}</Text>
        <Text>{experience.companyName}</Text>
      </View>
    </View>
  );
}
