"use client";

import Image from "next/image";
import { MobileMenu } from "../menu/menu";

export type THeader = {
  nameUser: string;
};

const Header = ({ nameUser }: THeader) => {
  return (
    <header className="flex justify-between items-center bg-primary h-[96px] mb-10 p-1.5">
      <div className="max-w-[1366px] m-auto w-full max-lg:max-w-full px-[15px] max-md:flex max-md:items-center">
        <MobileMenu />
        <div className="flex justify-end items-center gap-10 w-full">
          <p className="font-bold text-sm font-family-base text-white">
            {nameUser}
          </p>

          <div>
            <Image
              width={40}
              height={40}
              src="/svg/profile-icon.svg"
              alt="Minha conta"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
