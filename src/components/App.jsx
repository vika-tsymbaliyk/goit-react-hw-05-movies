import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <ul>
        <li> <NavLink to="/">Page 1</NavLink> </li>
        <li><NavLink to="/page">Page 2</NavLink> </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>lkjhgfdsdfghjkjhgfd</div>}/>
        <Route path="/page"  element={<div>щшгнеапролррр</div>}/>

      </Routes>
    </div>
  );
};
