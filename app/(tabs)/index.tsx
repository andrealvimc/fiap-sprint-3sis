import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type ItemProps = {
  id: string;
  title: string;
  category: string;
  hours: number;
  stars: number;
  img: string;
};

const DATA: ItemProps[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    category: "Segurança",
    stars: 4.6,
    hours: 4.7,
    img: "",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    category: "Segurança",
    stars: 4.6,
    hours: 4.7,
    img: "",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    category: "Segurança",
    stars: 4.6,
    hours: 4.7,
    img: "",
  },
  {
    id: "58694a0f-3da1-471f-bd96-5454",
    title: "454545454 Item",
    category: "Segurança",
    stars: 4.6,
    hours: 4.7,
    img: "",
  },
  {
    id: "58694a0f-3da1-4545454-bd96-145571e29d72",
    title: "fdfdfdfd Item",
    category: "Segurança",
    stars: 4.6,
    hours: 4.7,
    img: "",
  },
];

const Course = ({ category, hours, img, stars, title }: ItemProps) => (
  <View style={styles.course}>
    <View style={styles.course_preview}>
      <Text>.</Text>
    </View>
    <View style={styles.course_specs}>
      <Text style={styles.course_specs_category}>{category}</Text>
      <Text style={styles.course_specs_title}>{title}</Text>
      <View style={styles.course_specs_flex}>
        <Text>{hours}</Text>
        <Text>Avaliação: {stars}/5</Text>
      </View>
    </View>
  </View>
);

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.header_title}>Oi, André</Text>
            <Text style={styles.header_text}>
              O que você gostaria de aprender hoje?
            </Text>
          </View>
          <View>
            <Ionicons size={28} name="notifications" color={"#167F71"} />
          </View>
        </View>

        <View style={styles.courses_container}>
          <Text style={styles.courses_header}>Cursos:</Text>

          <FlatList
            data={DATA}
            renderItem={({ item }: { item: ItemProps }) => (
              <Course
                id=""
                img=""
                hours={item.hours}
                stars={item.stars}
                category={item.category}
                title={item.title}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
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
  courses_container: {
    marginTop: 30,
  },
  courses_header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  course: {
    backgroundColor: "#fff",
    marginVertical: 14,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: -2,
    borderRadius: 10,
  },
  course_preview: {
    width: "100%",
    height: 80,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "#000",
    paddingTop: 10,
  },
  course_specs: {
    padding: 10,
  },
  course_specs_category: {
    color: "#FF6B00",
  },
  course_specs_title: {
    marginTop: 5,
    fontWeight: "bold",
  },
  course_specs_flex: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
});
