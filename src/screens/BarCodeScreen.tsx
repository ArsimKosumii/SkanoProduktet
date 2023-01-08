import { useIsFocused, useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const { navigate } = useNavigation<any>();
  const isFocused = useIsFocused();
  const [scanned, setScanned] = useState<boolean>(true);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }: any) => {
    setScanned(true);
    navigate("ProductView", { productCode: data });
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Ju lutem prisni pak!</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>{"Ska qasje në kamerë!"}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused ? (
        <>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{
              width: Dimensions.get("screen").height + 200,
              height: Dimensions.get("screen").height,
            }}
            barCodeTypes={[
              BarCodeScanner.Constants.BarCodeType.ean13,
              BarCodeScanner.Constants.BarCodeType.ean8,
              BarCodeScanner.Constants.BarCodeType.upc_a,
              BarCodeScanner.Constants.BarCodeType.upc_e,
            ]}
            type="back"
          />
          {scanned && (
            <TouchableOpacity
              style={styles.scanButton}
              onPress={() => {
                setScanned(false);
                setTimeout(() => {
                  setScanned(true);
                }, 3000);
              }}
            >
              <Text style={styles.scanButtonText}>Skano</Text>
            </TouchableOpacity>
          )}
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },

  scanButton: {
    position: "absolute",
    height: 50,
    bottom: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 6,
    left: 15,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  scanButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
