import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import VerticalScrollImages from "./../components/VerticalScrollImages/VerticalScrollImages";
import { AlbanianFlag, besaBese, cancel } from "../constants/images";
import { containsOnlyNumbers } from "../global/functions";
import { percentHeight } from "../variables";

const ProductView = (props: any) => {
  const { productCode } = props.route.params;
  const [validBarCode, setValidBarCode] = useState(false);

  useEffect(() => {
    if (productCode) {
      const checkIfValid = containsOnlyNumbers(productCode);
      setValidBarCode(checkIfValid);
    }
  }, [productCode]);

  if (!validBarCode) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.internationalProduct}>{"Barkod jo-valid."}</Text>
        <Image style={styles.cancelIcon} source={cancel} />
      </View>
    );
  }

  if (productCode?.startsWith("860")) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Image
            resizeMode="contain"
            style={styles.stopImage}
            source={besaBese}
          />

          <VerticalScrollImages />

          <Image style={styles.albanianFlag} source={AlbanianFlag} />
        </View>
      </ScrollView>
    );
  }

  if (productCode?.startsWith("390") || productCode?.startsWith("530")) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.albanianFlag} source={AlbanianFlag} />
        <Text
          style={styles.albanianProduct}
        >{`${productCode} \n\nProdukt Shqiptar :)`}</Text>
      </ScrollView>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.internationalProduct}>{"Produkt jo vendor."}</Text>
      <Image style={styles.cancelIcon} source={cancel} />
    </View>
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

  serbianProductHeadingAndText: {
    width: "100%",
    paddingHorizontal: 15,
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

  cancelIcon: {
    marginTop: 20,
    width: 100,
    height: 100,
  },

  internationalProduct: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductView;
