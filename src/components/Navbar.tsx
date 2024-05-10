"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

import { cn } from "@/utils/cn";

import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            
          </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col text-sm space-y-4">
            <HoveredLink href="/web-dev">Our Courses</HoveredLink>
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/web-dev">App Development</HoveredLink>
            <HoveredLink href="/web-dev">Blockchain Development</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="contact us">
            
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
