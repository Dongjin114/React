import styled from "styled-components";

export const ModalContainer = styled.div``;

export const DetailsContainer = styled.div``;
export const MenuContainer = styled.div`
  min-height: 400px;
  border-bottom: 1px solid black;
`;
export const MenuBoxes = styled.div`
  padding-top: 30px;
  padding-top: 30px;
  border-top: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  max-height: 400px;
  overflow: scroll;
  scrollbar-width: none;
`;

export const MenuBox = styled.div`
  padding-right: 400px;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.div`
  margin-bottom: 20px;
`;

export const Close = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
