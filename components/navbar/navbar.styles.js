import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const style = StyleSheet.create({
  container: (visible) => ({
    backgroundColor: "#c1c1c1",
    width: "100%",
    height: "100%",
    transform: "translateX(-100%)",
    flex: 1,
    position: "absolute",
  }),
});

export default style;
