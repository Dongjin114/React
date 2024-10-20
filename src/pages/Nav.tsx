import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import * as NavStyle from "./Nav.style";
import Stack from "@mui/material/Stack";
import * as COLOR from "../constants/color";
import { ThemeProvider } from "@mui/material";
import { theme } from "../constants/mui/thema";
import { OrmState } from "../types/enum/enums";
import BaseButton from "../components/button/BaseButton";

function Nav() {
  const [ormState, setOrmState] = useState(OrmState.JPA);

  const handleOrmState = (status: OrmState) => {
    setOrmState(status);
  };

  return (
    <NavStyle.NavContainer>
      <NavStyle.ButtonContainer>
        <Stack spacing={2} direction="row">
          <ThemeProvider theme={theme}>
            {Object.values(OrmState).map((value) => (
              <BaseButton
                buttonName={value}
                color={ormState}
                onClick={() => handleOrmState(value)}
              />
            ))}
          </ThemeProvider>
        </Stack>
      </NavStyle.ButtonContainer>
    </NavStyle.NavContainer>
  );
}

export default Nav;
