import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  colors: {
    brand: {
      green: "#009432",
      primary: "#1e272e",
      secondary: "#293238",
      tertiary: "#374151",
    },
  },
});

export default CustomTheme;
