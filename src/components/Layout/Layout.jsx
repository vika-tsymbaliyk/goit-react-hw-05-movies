import { Suspense } from "react";
import { NavLink, Outlet} from "react-router-dom";
import Loader from "../Loader/Loader";
import { Container, HeaderList } from "./Layout.styled";

const Layout = ()=>{
   return(
<header>
   <Container>
      <HeaderList>
         <li> <NavLink to="/"> Home </NavLink> </li>
         <li> <NavLink to="/movies"> Movies </NavLink> </li>
      </HeaderList>
      <Suspense fallback={<Loader/>}>
         <Outlet />
      </Suspense>
      </Container>
   </header>
   )
}

export default Layout;
