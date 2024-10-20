import React, { MouseEventHandler, useEffect, useState } from "react";
import * as InputStyle from "./InputBoxContent.style";

interface InputBoxContentProps {
  ContextHolder?: string;
  text?: string;
  onChange?: (text: any) => void;
  width: number;
  height: number;
  holderUnFocusTranslateY: string;
  holderFocusTranslateY: string;
  holderFocusFont: string;
  holderUnFocusFont: string;
}

export default function InputBoxContent({
  ContextHolder,
  text,
  width,
  height,
  onChange,
  holderUnFocusTranslateY,
  holderFocusTranslateY,
  holderFocusFont,
  holderUnFocusFont,
}: InputBoxContentProps) {
  const [isFocuse, setIsFocuse] = useState<boolean>(false);

  const FocusInEvent = () => {
    setIsFocuse(true);
  };
  const FocusOutEvent = () => {
    setIsFocuse(false);
  };

  useEffect(() => {
    console.log(isFocuse);
  }, [isFocuse]);

  return (
    <InputStyle.InputBoxContainer>
      <InputStyle.PlaceHolder
        unFocusTranslateY={holderUnFocusTranslateY}
        focusTranslateY={holderFocusTranslateY}
        focusFont={holderFocusFont}
        unFocusFont={holderUnFocusFont}
        isFocused={isFocuse}
      >
        {ContextHolder}
      </InputStyle.PlaceHolder>
      <InputStyle.InputBox
        isFocused={isFocuse}
        onFocus={FocusInEvent}
        onBlur={FocusOutEvent}
        value={text}
        onChange={onChange && onChange}
        width={width}
        height={height}
      />
    </InputStyle.InputBoxContainer>
  );
}
