import styled from "@emotion/styled";
import * as FONT from "../../constants/font";
import { COMPOTE1, COMPOTE2, COMPOTE4 } from "../../constants/color";

export const InputBoxContainer = styled.div`
  position: relative;
  height: 75px;
`;
export const PlaceHolder = styled.div<{
  isFocused: boolean;
  focusTranslateY: string;
  unFocusTranslateY: string;
  focusFont: string;
  unFocusFont: string;
}>`
  position: absolute;
  padding-left: 10px;
  font-size: ${({ isFocused, focusFont, unFocusFont }) =>
    isFocused ? focusFont : unFocusFont};
  font-weight: bold;
  padding-top: 5px;
  transform: ${({ isFocused, focusTranslateY, unFocusTranslateY }) =>
    isFocused
      ? "translateY(" + focusTranslateY + "%)"
      : "translateY(" + unFocusTranslateY + "%)"};
  transition: 0.5s;
  z-index: 1;
`;

export const InputBox = styled.input<{
  isFocused: boolean;
  width: number;
  height: number;
}>`
  position: absolute;
  top: 0px;
  background-color: ${({ isFocused }) => (isFocused ? COMPOTE4 : "inherit")};
  outline: none;
  padding-left: 10px;
  padding-top: ${({ isFocused }) => (isFocused ? "0px" : "10px")};
  border-radius: 10px;
  width: ${({ width }) => width}px;
  border-radius: 10px;
  height: ${({ isFocused, height }) => (isFocused ? height + 20 : height)}px;
  transition: height 0.5s ease, padding-top 0.5s ease;

  &:hover {
    cursor: pointer;
  }
`;
