import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import { percentHeight, percentWidth } from "../../variables";
import { useState, useEffect } from "react";

interface ImageComponentProps {
  image: any;
  caption: string;
}

type ImageDimensions = {
  width: number;
  height: number;
};

const ImageComponent = (props: ImageComponentProps) => {
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>();

  useEffect(() => {
    Image.getSize(
      Image.resolveAssetSource(props?.image).uri,
      (width, height) => {
        let ratio = Dimensions.get("window").width / width;

        setImageDimensions({
          width: Dimensions.get("screen").width,
          height: height * ratio,
        });
      }
    );
  }, []);

  return (
    <View style={[styles.imageComponent, { height: imageDimensions?.height }]}>
      <Image
        source={props?.image}
        style={[
          styles.image,
          { width: imageDimensions?.width, height: imageDimensions?.height },
        ]}
      />

      <View style={styles.imageCaptionView}>
        <Text style={styles.imageCaptionText}>{props?.caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageComponent: { marginBottom: 20 },

  image: {
    position: "relative",
  },

  imageCaptionView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(238,238,238,0.8)",
  },

  imageCaptionText: {
    fontSize: 20,
  },
});

export default ImageComponent;
