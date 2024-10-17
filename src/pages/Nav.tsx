import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import * as NavStyle from './Nav.style';
import Stack from '@mui/material/Stack';
import * as COLOR from '../constants/color'
import { ThemeProvider } from '@mui/material';
import { theme } from '../constants/mui/thema';
import { OrmState } from '../constants/enums';
import BaseButton from '../components/button/BaseButton';

function Nav() {

    const [ormState, setOrmState] = useState(OrmState.JPA);

    const handleOrmState = (status: OrmState) => {
        setOrmState(status);
    }

    return (
        <NavStyle.NavContainer>
            <NavStyle.ButtonContainer>
                <Stack spacing={2} direction="row">
                    <ThemeProvider theme={theme}>

                        <BaseButton
                            buttonName={OrmState.JPA}
                            color={ormState}
                            onClick={() => handleOrmState(OrmState.JPA)} />

                        <BaseButton
                            buttonName={OrmState.QUERYDSL}
                            color={ormState}
                            onClick={() => handleOrmState(OrmState.QUERYDSL)} />

                        <BaseButton
                            buttonName={OrmState.MYBATIS}
                            color={ormState}
                            onClick={() => handleOrmState(OrmState.MYBATIS)} />
                    </ThemeProvider>
                </Stack>
            </NavStyle.ButtonContainer>
        </NavStyle.NavContainer >

    )
}

export default Nav