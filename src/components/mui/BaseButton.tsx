import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { OrmState } from '../../constants/enums';
import { ColorButton } from './BaseButton.style';

interface BaseButtonInterFace {
    data: OrmState,
    status: OrmState,
    onClick: (value: OrmState) => void
}

export default function BaseButton({ data, status, onClick }: BaseButtonInterFace) {

    return (
        <ColorButton
            variant="contained"
            color={status === data ? 'secondary' : 'primary'} size='medium'
            onClick={() => onClick(data)}
            style={{ width: 100 }}
        >
            {data}
        </ ColorButton >
    )
}
