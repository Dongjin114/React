import { createTheme } from "@mui/material/styles";
import * as COLOR from "../color"


export const theme = createTheme({
    palette: {
        primary: {
            main: COLOR.COMPOTE1
        },
        secondary: {
            main: COLOR.COMPOTE2
        },
    }
});