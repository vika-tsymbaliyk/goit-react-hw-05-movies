import styled from 'styled-components'
import {Link} from "react-router-dom"

export const MainContainer = styled.div`
  padding: 0 24px;
  display: flex;
  gap: 10px;
  flex-direction: column;

`;
export const CenterContainer = styled.div`
  display: flex;
  justify-content:center;
`;

export const LinkStyledBtn = styled(Link)`
  border: 1px solid grey;
  padding: 8px;
  display: inline-block;
  width: 80px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;