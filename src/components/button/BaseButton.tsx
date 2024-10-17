import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { OrmState } from '../../constants/enums';
import { ColorButton } from './BaseButton.style';

interface BaseButtonInterFace {
    buttonName?: any,
    color?: any,
    onClick?: () => void,
}

export default function BaseButton({ buttonName, color
    , onClick
}: BaseButtonInterFace) {


    const getButtonColor = (status: any) => {
        if (status in OrmState) {
            return status === buttonName ? 'secondary' : 'primary'
        } else {
            return status
        }
    }
    const dd = "dd";

    return (
        <ColorButton
            variant="contained"
            // color={status === buttonName ? 'secondary' : 'primary'}
            color={getButtonColor(color)}
            size='medium'
            // onClick={() => onClick && onClick(status)}
            onClick={() => onClick && onClick()}
            style={{ width: 100 }}
        >
            {buttonName}
        </ ColorButton >

    )
}
