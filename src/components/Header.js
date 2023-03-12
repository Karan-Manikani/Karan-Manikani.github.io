import React from "react";
import { Link } from "react-router-dom";
import HeaderBtn from "./HeaderBtn";
import Switcher from "./Switcher";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center h-24 ">
      <div className="pl-8">
        <Link to={"/"}>
          <h1 className="text-3xl">Karan Manikani</h1>
        </Link>
      </div>
      <div className="min-w-[25%] pr-8 list-none flex flex-row justify-between items-center">
        <Switcher />
        <HeaderBtn text="Resume" />
        <HeaderBtn text="Projects" />
        <HeaderBtn text="Contact" />
      </div>
    </header>
  );
}

export default Header;
