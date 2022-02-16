import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="y-wrap navs navs--justify">
        <div><NavLink to="/">Home</NavLink></div>
        <ul className="navs navs--items">
          <li><NavLink to="/add">Add Contact</NavLink></li>
          <li><NavLink to="/list">Contact List</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;