// components/Header.tsx
import React from "react";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Header2 = () => {
  return (
    <header className="flex items-center justify-between p-4 gap-12">
      <div className="t-logo">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          priority // Add this prop to prioritize the image load
          width={300}
          height={100}
          style={{ height: "auto" }} // To avoid distortion and maintain aspect ratio
        />
      </div>

      <div className="flex items-center">
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
