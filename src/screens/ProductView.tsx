import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AlbanianProduct from "../components/AlbanianProduct/AlbanianProduct";
import InvalidBarCode from "../components/InvalidBarCode/InvalidBarCode";
import ProduktJoVendor from "../components/ProduktJoVendor/ProduktJoVendor";
import { SerbianProduct } from "../components/SerbianProduct/SerbianProduct";
import { containsOnlyNumbers } from "../logic/functions";

const ProductView = ({ route }: any) => {
  const { productCode } = route.params;
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
    return <SerbianProduct />;
  }

  if (productCode?.startsWith("390") || productCode?.startsWith("530")) {
    return <AlbanianProduct productCode={productCode} />;
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
});

export default ProductView;
