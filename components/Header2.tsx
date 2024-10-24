// components/Header.tsx
import React from "react";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Header2 = () => {
  return (
    <header className="flex items-center justify-between p-4 gap-12">
      <div className="flex relative h-20 w-60  ">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          priority
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 200px"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col md:flex-row  items-center">
        <div>
          <Link href="/profile">
            <Button variant="ghost" className="font-bold">
              Export PDF
            </Button>
          </Link>
        </div>
        <div className="user-text">
          <Link href="/">
            <Button variant="ghost" className="font-bold">
              Log out
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header2;
