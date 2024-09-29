import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Link } from "expo-router";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
type ItemProps = {
  id: string;
  title: string;
  category: string;
  hours: number;
  stars: string;
  img: string;
};

const DATA: ItemProps[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Segurança no trabalho",
    category: "Segurança",
    stars: "4H 30min",
    hours: 4.7,
    img: "",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Como gerenciar pessoas",
    category: "Recursos Humanos",
    stars: "4H 30min",
    hours: 4.7,
    img: "",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Como criar uma planilha eficiente",
    category: "Trabalho",
    stars: "4H 30min",
    hours: 4.7,
    img: "",
  },
  {
    id: "58694a0f-3da1-471f-bd96-5454",
    title: "Adminstração gestão empresarial",
    category: "Adminstração",
    stars: "10H 30min",
    hours: 5,
    img: "",
  },
  {
    id: "58694a0f-3da1-4545454-bd96-145571e29d72",
    title: "fdfdfdfd Item",
    category: "Segurança",
    stars: "4h 30min",
    hours: 4.7,
    img: "",
  },
];

const Course = ({ category, hours, img, stars, title }: ItemProps) => {
  const router = useRouter();

  return (
    <View style={styles.course}>
      <View style={styles.course_preview}>
        <Text>.</Text>
      </View>
      <View style={styles.course_specs}>
        <Text style={styles.course_specs_category}>{category}</Text>
        <Text style={styles.course_specs_title}>{title}</Text>
        <View style={styles.course_specs_flex}>
          <Text>{stars}</Text>
          <Text>Avaliação: {hours}</Text>
        </View>

        <View style={styles.course_specs_flex}>
          <TouchableOpacity onPress={() => router.push("/certificado")}>
            <Text style={styles.certification}>Ver Certificado</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/curso")}>
            <Text style={styles.contet}>Ver Conteudo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function CursosScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.header_title}>Meus cursos</Text>
            <Text style={styles.header_text}>
              Veja seus cursos e continue de onde parou
            </Text>
          </View>
          <View>
            {/* <Ionicons size={28} name="notifications" color={"#167F71"} /> */}
          </View>
        </View>

        <View style={styles.courses_container}>
          {/* <Text style={styles.courses_header}>Cursos:</Text> */}

          <FlatList
            data={DATA}
            renderItem={({ item }: { item: ItemProps }) => (
              // <TouchableOpacity onPress={() => router.push("/curso")}>
              <Course
                id=""
                img=""
                hours={item.hours}
                stars={item.stars}
                category={item.category}
                title={item.title}
              />
              // </TouchableOpacity>
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
    marginTop: 10,
    marginBottom: 30,
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
    gap: 10,
  },
  certification: {
    marginTop: 10,
    color: "#0961F5",
  },
  contet: {
    marginTop: 10,
    color: "#167F71",
  },
});
