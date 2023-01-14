import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import { AlbanianFlag, besaBese } from "../../constants/images";
import { percentHeight } from "../../variables";
import VerticalScrollImages from "../VerticalScrollImages/VerticalScrollImages";

export const SerbianProduct = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.serbianProductHeading}>{"Produkt Serb!"}</Text>
      <View style={styles.content}>
        <Image
          resizeMode="contain"
          style={styles.stopImage}
          source={besaBese}
        />

        <VerticalScrollImages />

        <Image style={styles.albanianFlag} source={AlbanianFlag} />
        <Text style={styles.albanianFlagText}>
          {"Bojkoto këtë produkt, hatri i këtij Flamuri dhe gjithë Shqipërisë"}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  content: {
    flex: 1,
    width: "100%",
  },

  stopImage: {
    width: "100%",
    height: percentHeight(40),
    marginVertical: 20,
  },

  serbianProductHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },

  albanianFlag: {
    width: "100%",
    height: 300,
  },

  albanianFlagText: {
    fontSize: 20,
    textAlign: "center",
    padding: 20,
    marginBottom: 50,
  },
});
