import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "html, body": {
        padding: "0",
        margin: "0",
        fontSize: "24px",
        fontWeight: "700",
        backgroundColor: "secondary.200"
      },
    },
  },
  colors: {
    primary: {
      100: "#26c0ab",
      200: "#00494d",
      300: "#5e7a7d",
    },
    secondary: {
      100: "#7f9c9f",
      200: "#c5e4e7",
      300: "#f4fafa",
    },
  },
  fonts: {
    heading: "Space Mono, sans-serif",
    body: "Space Mono, sans-serif",
  },
});
