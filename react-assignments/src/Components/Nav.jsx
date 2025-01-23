import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/PropsComponent">PropsComponent</NavLink>
      <NavLink to="/EffectsComponent">EffectsComponent</NavLink>
      <NavLink to="/MyStateComponent"> MyStateComponens</NavLink>
    </nav>
  );
};

export default Nav;
