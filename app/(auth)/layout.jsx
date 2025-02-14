"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navs = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
];

export default function AuthLayouts({ children }) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex justify-center items-center gap-3">
        {navs.map((nav) => {
          const isActive =
            pathname === nav.href ||
            (pathname.startsWith(nav.href) && nav.href !== "/");
          return (
            <Link
              className={
                isActive
                  ? "underline text-lg text-red-500"
                  : "underline text-sm text-green-500"
              }
              href={nav.href}
              key={nav.href}
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
}
