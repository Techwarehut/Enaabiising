// components/Header.tsx
import React from "react";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 gap-24">
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

      <div className="flex items-center">
        <div>
          <Link href="/profile">
            <div className="flex relative h-12 w-12">
              <Image
                src="/assets/images/user.jpg"
                alt="profile picture"
                priority
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 480px) 20vw, (max-width: 768px) 10vw, 40px"
                className="rounded-full border-2 border-black"
              />
            </div>
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
