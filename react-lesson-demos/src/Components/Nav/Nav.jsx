import { NavLink } from "react-router";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/fetch">Fetch Example</NavLink>
        </li>
        <li>
          <NavLink to="/effects">Effects Component</NavLink>
        </li>
        <li>
          <NavLink to="/ref">Ref Component</NavLink>
        </li>
        <li>
          <NavLink to="/character">Star Wars Characters</NavLink>
        </li>
        <li>
          <NavLink to="/events">Event Component</NavLink>
        </li>
        <li>
          <NavLink to="/state">State Component</NavLink>
        </li>
        <li>
          <NavLink to="/wrapper">Wrapper Component</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
