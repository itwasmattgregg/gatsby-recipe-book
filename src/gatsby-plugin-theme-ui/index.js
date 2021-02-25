import theme from "@marinda/gatsby-theme-recipes/src/gatsby-plugin-theme-ui";

export default {
  ...theme,
  colors: {
    text: "#362101",
    background: "#fff",
    primary: "#222",
    secondary: "#862E9C",
    accent: "#F4D3E5",
    muted: "#F9E7C9",
    grey: "#F1F1F1",
    modes: {
      dark: {
        text: "#fff",
        background: "#333",
        primary: "#FEAEA4",
        secondary: "#862E9C",
        accent: "#AE246E",
        muted: "#1C0311",
        grey: "#3A0925"
      }
    }
  },
  fonts: {
    body: "'Raleway', Arial, Helvetica, sans-serif",
    heading: "'Cardo', Georgia, 'Times New Roman', Times, serif",
    monospace: "'Courier New', Courier, monospace"
  },
};
