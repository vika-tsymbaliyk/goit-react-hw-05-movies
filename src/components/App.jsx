import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import  Cast  from "./Cast/Cast";
import  Reviews  from "./Reviews/Reviews";

export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<div><ul>
                                  <li> <NavLink to="/"> Home </NavLink> </li>
                                  <li> <NavLink to="/movies"> Movies </NavLink> </li>
                                </ul>
                                <Outlet/>
                                </div>}>
                                
          <Route index element={<Home/>}/>
          <Route path="/movies"  element={<Movies/>}/>
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Routes>

    </div>
  );
};
