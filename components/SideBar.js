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
    <nav className="px-4 h-[95vh] w-full shadow-lg">
      <div className="flex justify-center py-10">
        <ModeToggle />
      </div>
      <ul className="flex flex-col gap-y-3 text-lg ml-24">
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
