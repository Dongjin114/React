import React, { MouseEventHandler, useEffect, useState } from 'react'
import * as InputStyle from './InputBoxContent.style'

interface InputBoxContentIF {
    ContextHolder?: string,
    text?: string,
    onChange?: (text: any) => void,
}

export default function InputBoxContent({ ContextHolder, text, onChange }: InputBoxContentIF) {

    const [isFocuse, setIsFocuse] = useState<boolean>(false);

    const FocucInEvent = () => {
        setIsFocuse(true);
    }
    const FocusOutEvent = () => {
        setIsFocuse(false);
    }

    useEffect(() => {
        console.log(isFocuse)
    }, [isFocuse])

    return (
        <InputStyle.InputBoxContainer >
            <InputStyle.PlaceHolder isFocused={isFocuse}>{ContextHolder}</InputStyle.PlaceHolder>
            <InputStyle.InputBox
                isFocused={isFocuse}
                onFocus={FocucInEvent}
                onBlur={FocusOutEvent}
                value={text}
                onChange={onChange && onChange}
            />
        </InputStyle.InputBoxContainer>
    )
}
