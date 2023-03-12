import React from "react";
import Info from "./Info";
function Footer() {
  return (
    <div className="h-32 flex flex-row border-t border-darkGray dark:border-offWhite border-opacity-20 dark:border-opacity-20 mx-8 justify-around items-center mt-8">
      <Info title="Phone" value="+91 9769098446" />
      <Info title="Email" value="karan.manikani@gmail.com" />
      <Info title="Follow me" />
      <Info value={`© ${new Date().getFullYear()} By Karan Manikani.`} />
    </div>
  );
}

export default Footer;
