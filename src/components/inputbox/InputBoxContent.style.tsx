import styled from "@emotion/styled";
import * as FONT from "../../constants/font"
import { COMPOTE1, COMPOTE2, COMPOTE4 } from "../../constants/color";

export const InputBoxContainer = styled.div`
    position:relative;    
    height:75px;
`
export const PlaceHolder = styled.div<{ isFocused: boolean }>`
    position:absolute;    
    padding-left:10px;
    font-size : ${({ isFocused }) => (isFocused ? FONT.L : FONT.S)};
    font-weight : bold;
    padding-top:5px;
    transform: ${({ isFocused }) => (isFocused ? "translateY(-90%)" : "translateY(-10%)")};
    transition: 0.5s;
    z-index:1;
`
export const InputBox = styled.input<{ isFocused: boolean }>`
    position:absolute;
    background-color: ${({ isFocused }) => (isFocused ? COMPOTE4 : "inherit")};
    outline : none;
    padding-left:10px;
    padding-top: 10px;
    border-radius:10px;
    width:350px;
    height: ${({ isFocused }) => (isFocused ? "60px" : "40px")};
    transition: height 0.5s ease;



    &:hover{
    cursor:pointer;
    }
`