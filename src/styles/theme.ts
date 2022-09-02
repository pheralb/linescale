import { ChakraProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const appTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    bg: {
      light: "#FBFCFC",
      dark: "#25273A",
    },
    explorer: {
      light: "#F5F5F5",
      dark: "#1E2030",
    }
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Cascadia, monospace",
  },
  styles: {
    global: (props: ChakraProps) => ({
      "html, body": {
        height: "100%",
        maxHeight: "100vh",
        bg: mode("bg.light", "bg.dark")(props),
        fontSize: "14px",
      },
    }),
  },
});

export default appTheme;
