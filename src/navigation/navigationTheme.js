import { DefaultTheme } from "@react-navigation/native";
import colors from "../theme/color";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
    primary: colors.primary,
    text: colors.secondary,
  },
};
