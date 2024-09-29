import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  SafeAreaView,
  View,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useCallback, useState } from "react";
import { useRouter } from "expo-router";

export default function CursoScreen() {
  const [playing, setPlaying] = useState(false);
  const router = useRouter();

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            {/* <TouchableOpacity onPress={() => router.push("/")}>
              <View>
                <Ionicons size={28} name="arrow-back" color={"#167F71"} />
              </View>
            </TouchableOpacity> */}
            <View></View>
          </View>

          <View style={styles.video_container}>
            {/* <Ionicons size={28} name="play" color={"#fff"} /> */}

            <YoutubePlayer
              height={250}
              play={playing}
              videoId={"fUJoAXUb-UY"}
              onChangeState={onStateChange}
            />
            {/* <Button
              title={playing ? "pause" : "play"}
              onPress={togglePlaying}
            /> */}
          </View>

          <View style={styles.video_desc_card}>
            <Text style={styles.video_desc_desc}>Segurança</Text>
            <Text style={styles.video_desc_title}>Segurança no trabalho</Text>
            <Text style={styles.video_desc_divider}>Sobre:</Text>

            <Text style={styles.video_desc_text}>TESTE</Text>
          </View>

          <View style={styles.video_desc_card}>
            <Text style={styles.video_desc_text}>
              Graphic Design now a popular profession graphic design by off your
              carrer about tantas regiones barbarorum pedibus obiit. Graphic
              Design now a popular profession graphic design by off your carrer
              about tantas regiones barbarorum pedibus obiit Graphic Design now
              a popular profession graphic design by off your carrer about
              tantas regiones barbarorum pedibus obiit Graphic Design now a
              popular profession graphic design by off your carrer about tantas
              regiones barbarorum pedibus obiit
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F9FF",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header_text: {
    marginTop: 10,
    fontSize: 13,
    color: "#54545490",
  },
  video_container: {
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
  },
  video_desc_card: {
    backgroundColor: "#ffffff",
    padding: 15,
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: -2,
    marginTop: 10,
  },
  video_desc_desc: {
    color: "#FF6B00",
  },
  video_desc_title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 15,
  },
  video_desc_divider: {
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 15,
    marginBottom: 10,
  },
  video_desc_text: {
    color: "#A0A4AB",
  },
});
