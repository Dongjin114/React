import styled from "styled-components";
import * as COLOR from "../../constants/color";
import Button, { ButtonProps } from "@mui/material/Button";

export const ColorButton = styled(Button)<ButtonProps>({
  "&:hover": {
    backgroundColor: COLOR.COMPOTE3,
  },
});
