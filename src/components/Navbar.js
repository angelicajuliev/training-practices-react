import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <NavLink
        className="navbar__link"
        activeClassName="navbar__link-selected"
        to="/water"
      >
        Refactor (Water)
      </NavLink>
      <NavLink
        className="navbar__link"
        activeClassName="navbar__link-selected"
        to="/game"
      >
        Guess Movie
      </NavLink>
      <NavLink
        className="navbar__link"
        activeClassName="navbar__link-selected"
        to="/todo"
      >
        ToDo List
      </NavLink>
    </nav>
  );
};

export default Navbar;
