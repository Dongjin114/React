import styled from "styled-components";
import * as COLOR from "../constants/color";
import * as FONT from "../constants/font";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  background-color: #2c3e50;
  justify-content: center;
`;

export const BodyContainer = styled.div`
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 20px;
`;

export const BodyHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: inherit;
  width: 800px;
  border-radius: 20px;
  border: 3px solid ${COLOR.BRISK2};
`;

export const BodyHeaderMenuBox = styled.div``;

export const MenuBox = styled.div`
  width: 200px;
`;
export const MenuBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const GridContainer = styled.div`
  padding-top: 10px;
`;

export const DatePickerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DatePicker = styled.div`
  padding: 10px;
`;
