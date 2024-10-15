import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import * as NavStyle from './Nav.style';
import Stack from '@mui/material/Stack';
import * as COLOR from '../constants/color'
import { ThemeProvider } from '@mui/material';
import { theme } from '../constants/mui/thema';
import { OrmState } from '../constants/enums';
import BaseButton from '../components/mui/BaseButton';

function Nav() {

    const [ormState, setOrmState] = useState(OrmState.JPA);

    const handleOrmState = (status: OrmState) => {
        setOrmState(status);
    }

    useEffect(() => {
        console.log("ormState=", ormState)
    }, [ormState])


    return (
        <NavStyle.NavContainer>
            <NavStyle.ButtonContainer>
                <Stack spacing={2} direction="row">
                    {/* 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning', */}
                    <ThemeProvider theme={theme}>


                        <BaseButton
                            data={OrmState.JPA}
                            status={ormState}
                            onClick={() => handleOrmState(OrmState.JPA)} />

                        <BaseButton
                            data={OrmState.QUERYDSL}
                            status={ormState}
                            onClick={() => handleOrmState(OrmState.QUERYDSL)} />

                        <BaseButton
                            data={OrmState.MYBATIS}
                            status={ormState}
                            onClick={() => handleOrmState(OrmState.MYBATIS)} />
                    </ThemeProvider>
                </Stack>
            </NavStyle.ButtonContainer>
        </NavStyle.NavContainer >

    )
}

export default Nav