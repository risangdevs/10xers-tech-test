import { Dimensions } from "react-native";
class Dimension {
  static responsiveWidth() {
    return Math.floor(Dimensions.get("window").width);
  }
  static responsiveHeight() {
    return Math.floor(Dimensions.get("window").height);
  }
  static responsiveMt() {
    return Math.floor(
      Dimensions.get("screen").height - Dimensions.get("window").height
    );
  }
  static scale() {
    return Dimensions.get("window").scale;
  }
}
module.exports = Dimension;
