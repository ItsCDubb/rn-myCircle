import { Image, Pressable, ScrollView, Text, View } from "react-native";
import ExperienceListItem from "../../components/ExperienceListItem";
import { useLocalSearchParams, useNavigation } from "expo-router";
import userJson from "../../../assets/data/user.json";
import { useLayoutEffect, useState } from "react";
import { User } from "../../types";
import styles from "./styles";

export default function UserProfile() {
  const [user, setUser] = useState<User>(userJson);
  const { id } = useLocalSearchParams();
  const onConnect = () => {
    console.warn("Connect Pressed");
  };
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ title: user.name });
  }, [user?.name]);
  return (
    <ScrollView
      style={styles.userProfileContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.userProfileHeader}>
        {/* BG Image */}
        <Image
          source={{ uri: user.backImage }}
          style={styles.userBackgroundImage}
        />
        <View style={styles.headerContent}>
          {/* Profile Image */}
          <Image source={{ uri: user.image }} style={styles.userProfileImage} />
          {/* Name & Position */}
          <Text style={styles.userName}>{user.name}</Text>
          <Text>{user.position}</Text>
          {/* Connect button */}
          <Pressable onPress={onConnect} style={styles.profileConnectButton}>
            <Text style={styles.profileConnectButtonText}>
              Add me to your Circle
            </Text>
          </Pressable>
        </View>
      </View>
      {/* About */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionParagraph}>{user.about}</Text>
      </View>
      {/* Experience */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>My Experience</Text>
        {user.experience?.map((experience) => (
          <ExperienceListItem key={experience.id} experience={experience} />
        ))}
      </View>
    </ScrollView>
  );
}
