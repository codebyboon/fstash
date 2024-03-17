import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-row justify-evenly my-5">
        <h1 className="font-bold text-xl tracking-tighter pr-60 lg:pr-96">
          fstash.
        </h1>
        <Button className="pl-60 lg:pl-96">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
