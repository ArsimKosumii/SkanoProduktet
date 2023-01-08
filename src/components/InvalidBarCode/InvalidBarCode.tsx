import { View, Text, Image, StyleSheet } from "react-native";
import { cancel } from "../../constants/images";

const InvalidBarCode = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.internationalProduct}>{"Barkod jo-valid."}</Text>
      <Image style={styles.cancelIcon} source={cancel} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default InvalidBarCode;
