import { createTheme } from "@mui/material/styles";
import * as COLOR from "../color"


export const theme = createTheme({
    //    'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',

    palette: {
        primary: {
            main: COLOR.COMPOTE1
        },
        secondary: {
            main: COLOR.COMPOTE2
        },
    }
});