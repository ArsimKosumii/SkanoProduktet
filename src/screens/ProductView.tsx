import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { AlbanianFlag, cancel, stop } from "../constants/images";
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
          <Image resizeMode="contain" style={styles.stopImage} source={stop} />
          <Text style={styles.serbianProduct}>{"PRODUKT SERB!"}</Text>
          <Text style={styles.boykotText}>
            {
              "Ju lutem bojkoto këtë produkt! Ky produkt është prodhuar nga ata që për më shumë se një shekull i kanë djegur e masakruar me qindra-mijëra Shqiptarë dhe po t'u ipej mundësia, do ta bënin prapë!"
            }
          </Text>
          <Text style={styles.flagText}>
            {
              "Mendo për këtë Flamur, më të bukurin në botë, dhe të gjithë ata që ranë për të :)"
            }
          </Text>
          <Image style={styles.albanianFlag} source={AlbanianFlag} />

          <Text style={styles.underFlagText}>
            {"Blej produkte Shqiptare, ka mjaftueshem :)"}
          </Text>
        </View>
      </ScrollView>
    );
  }

  if (productCode?.startsWith("390") || productCode?.startsWith("530")) {
    const country = productCode?.startsWith("390") ? "Kosovë" : "Shqipëri";
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.albanianFlag} source={AlbanianFlag} />
        <Text
          style={styles.albanianProduct}
        >{`${productCode} \n\nProdukt i prodhuar në ${country} :)`}</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 50,
  },

  content: {
    flex: 1,
    width: "100%",
  },

  stopImage: {
    width: "100%",
    height: percentHeight(40),
  },

  serbianProduct: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },

  boykotText: {
    textAlign: "justify",
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
  },

  flagText: {
    textAlign: "center",
  },

  albanianFlag: {
    marginTop: 20,
    width: "100%",
    height: 200,
  },

  underFlagText: {
    marginTop: 20,
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
