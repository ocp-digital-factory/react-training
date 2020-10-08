import { createMuiTheme } from "@material-ui/core/styles";
import { lightGreen, blueGrey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: { main: lightGreen[900], contrastText: "#ffffff" },
    secondary: { main: blueGrey[200], contrastText: "#ffffff" }
  }
});
export default theme;
