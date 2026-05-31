"use client";

import Link from "next/link";
// import { CartIcon } from "../ui/icons/CartIcon";
// import { SearchIcon } from "../ui/icons/SearchIcon";
// import { IProduct } from "@/interfaces/ProductInterface";
// import { useAppSelector } from "@/redux/hooks";
// import { IProduct } from "@/interfaces/ProductInterface";

import CartModal from "./CartModal";
import { MoonIcon, SearchIcon, UserIcon } from "./ui/icons";


export const Header = () => {
  return (
    <header className="w-full py-3 ">
      {/* logo */}
<nav className="w-[60%] mx-auto flex justify-around tems-center gap-10 ">
      <div>
        <Link href="/" className="text-4xl">
          HanzD
        </Link>
      </div>

      <div className="flex-1  ">
        <form
          action=""
          className="w-full flex gap-3 py-2 px-4 rounded-full bg-neutral-100 border  outline-none "
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Busca cualquier cosa..."
            className="w-full outline-none bg-none"
          />
        </form>
      </div>

      <div className="mr-4">
        <ul className="flex gap-5 items-center">
          <li>
            <Link href="/products">Prendas</Link>
          </li>
          <li>
            <Link href="/login">
              <div className="p-1.5 hover:bg-neutral-100 rounded-md">
                <UserIcon />
              </div>
            </Link>
          </li>
          <li>
            <div className="p-1.5 hover:bg-neutral-100 rounded-md">
              <MoonIcon />
              {/* <SunIcon /> */}
            </div>
          </li>
          <li>
            {/* TODO: añadir una key */}
            <CartModal />
          </li>
        </ul>
      </div>
</nav>
    </header>
  );
};
