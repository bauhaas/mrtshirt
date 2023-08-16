"use client";

import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-row items-center bg-slate-700">
      <Image
        src="/pngwing.com.png"
        alt="Magic: The Gathering logo"
        width={200}
        height={200}
      />
    </header>
  );
};

export default Header;
