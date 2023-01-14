import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { AlbanianFlag } from "../../constants/images";

interface AlbanianProductProps {
  productCode: string;
}

const AlbanianProduct = (props: AlbanianProductProps) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.albanianFlag} source={AlbanianFlag} />
      <Text
        style={styles.albanianProduct}
      >{`${props?.productCode} \n\nProdukt Shqiptar :)`}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  albanianFlag: {
    width: "100%",
    height: 300,
  },

  albanianProduct: {
    marginTop: 20,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default AlbanianProduct;
