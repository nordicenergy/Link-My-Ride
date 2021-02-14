import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
    // palette: {
    //     type: "dark"
    // },
    typography: {
        fontFamily: "'Oswald', serif"
    },
    spacing: factor => `${0.25 * factor}rem`,
    palette: {
        primary: {
            light: "#828a97",
            main: "#6b7380",
            dark: "#2e3138"
        },
        secondary: {
            light: "#656e81",
            main: "#434956",
            dark: "#0b0c0e"
        }
    }
})