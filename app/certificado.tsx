import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Text,
  ScrollView,
} from "react-native";

export default function CetificadoScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.svgTopRight} src="/assets/images/top-left.svg" />
          <Image src="/assets/images/certification.svg" />
          <Text style={styles.title}>Certificado de Conclusão</Text>
          <Text style={styles.description}>
            Concluiu com êxito o Programa de Treinamento da FIAP, intitulado.
          </Text>

          <Text style={styles.title}>Curso: 3D Design Illustration Course</Text>
          <Text>ID: SK24568086</Text>
          <Image style={styles.svgBottomLeft} src="/assets/images/bottom.svg" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 350,
    padding: 20,
    margin: 25,
    backgroundColor: "#F5F9FF",
    borderRadius: 10,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  svgTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  svgBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "#545454",
  },
});
