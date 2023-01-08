import { Image, ScrollView, StyleSheet, View } from "react-native";
import {
  albanianRefugeesFromKosovo,
  killedAlbanians1999,
  nenaDukeUshqyFemijen,
} from "../../constants/images";
import ImageComponent from "../ImageComponent/ImageComponent";

const images = [
  {
    image: nenaDukeUshqyFemijen,
    caption: "Refugjatët Shqiptarë dhe nëna Shqiptare që ushqen fëmijën",
  },
  {
    image: albanianRefugeesFromKosovo,
    caption: "Refugjatët Shqiptarë në vitin 1999",
  },
  {
    image: killedAlbanians1999,
    caption: "Shqiptarët e vrarë nga forcat serbe",
  },
];

const VerticalScrollImages = () => {
  return (
    <ScrollView
      pagingEnabled={true}
      showsVerticalScrollIndicator={false}
      style={styles.verticalScroll}
    >
      {images.map((item, key) => {
        return (
          <ImageComponent
            key={key}
            image={item?.image}
            caption={item?.caption}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  verticalScroll: {
    marginVertical: 20,
  },
});

export default VerticalScrollImages;
