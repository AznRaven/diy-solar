import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const SideBar = () => {
  const navList = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/solar-string-voltage",
      name: "Solar String Voltage",
    },
    {
      href: "/faq",
      name: "FAQ",
    },
  ];
  return (
    <nav className="h-full w-full shadow-lg ">
      <div className="flex justify-center py-3">
        <ModeToggle />
      </div>
      <ul className="flex flex-col text-lg ">
        {navList.map((x, i) => (
          <Link href={x.href}>
            <li className='px-4 py-2 hover:border-l-2 hover:border-red-500 '>{x.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
