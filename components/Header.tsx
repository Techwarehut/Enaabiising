// components/Header.tsx
import React from "react";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 gap-24">
      <div>
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          priority
          width={300}
          height={80}
        />
      </div>

      <div className="flex items-center">
        <div>
          <Link href="/profile">
            <img
              src="/assets/images/user.jpg"
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-full border-2 border-black"
            />
          </Link>
        </div>

        <div className="user-text ml-2 whitespace-nowrap hidden md:block">
          <Link href="/profile" className="font-bold">
            My Profile
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
