import { Suspense } from "react";
import { Outlet} from "react-router-dom";
import Loader from "../Loader/Loader";
import { Container, HeaderList, NavLinkStyled } from "./Layout.styled";

const Layout = ()=>{
   return(
<header>
   <Container>
      <HeaderList>
         <li> <NavLinkStyled to="/"> Home </NavLinkStyled> </li>
         <li> <NavLinkStyled to="/movies"> Movies </NavLinkStyled> </li>
      </HeaderList>
      <Suspense fallback={<Loader/>}>
         <Outlet />
      </Suspense>
      </Container>
   </header>
   )
}

export default Layout;
