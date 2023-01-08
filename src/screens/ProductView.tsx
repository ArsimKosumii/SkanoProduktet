import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import VerticalScrollImages from "./../components/VerticalScrollImages/VerticalScrollImages";
import { AlbanianFlag, besaBese, cancel } from "../constants/images";
import { containsOnlyNumbers } from "../global/functions";
import { percentHeight } from "../variables";
import InvalidBarCode from "../components/InvalidBarCode/InvalidBarCode";
import ProduktJoVendor from "../components/ProduktJoVendor/ProduktJoVendor";

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
    return <InvalidBarCode />;
  }

  if (productCode?.startsWith("860")) {
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
            {
              "Bojkoto këtë produkt, hatri i këtij Flamuri dhe gjithë Shqipërisë"
            }
          </Text>
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

  return <ProduktJoVendor />;
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

  albanianProduct: {
    marginTop: 20,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },

  albanianFlagText: {
    fontSize: 20,
    textAlign: "center",
    padding: 20,
    marginBottom: 50,
  },
});

export default ProductView;
