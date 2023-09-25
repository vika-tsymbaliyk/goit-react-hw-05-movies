import styled from 'styled-components'
import { NavLink} from "react-router-dom";

export const Container = styled.div`
  display: grid;
   grid-template-columns: 1fr;
   grid-gap: 16px;
   padding-bottom: 24px;
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
`;