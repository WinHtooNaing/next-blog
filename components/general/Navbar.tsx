import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            Blog <span className="text-blue-500">Next</span>
          </h1>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors "
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors "
            href={"/dashboard"}
          >
            Dashboard
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button>Login</Button>
        <Button variant={"secondary"}>Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
