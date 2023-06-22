import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const Navbar = () => {
  return (
    <header className="text-black flex flex-row justify-between items-center w-full px-32 py-8 font-medium">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
      </nav>
      <Logo />
      <nav>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/about" target={"_blank"}>
          T
        </Link>
        <Link href="/projects" target={"_blank"}>
          T
        </Link>
        <Link href="/articles" target={"_blank"}>
          T
        </Link>
      </nav>
      
    </header>
  );
};

export default Navbar;