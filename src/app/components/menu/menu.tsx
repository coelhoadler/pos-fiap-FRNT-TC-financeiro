"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React, { useEffect, useState } from "react";

export type TMenu = {
  onClickItem?: () => void;
};
export type TMenuItem = {
  title: string;
  path: string;
};

const menuItems: TMenuItem[] = [
  {
    title: "Inicio",
    path: "/home",
  },
  {
    title: "Transferências",
    path: "/extract",
  },
  {
    title: "Investimentos",
    path: "#investimentos",
  },
  {
    title: "Outros serviços",
    path: "#outros-servicos",
  },
];

const MenuItens = ({ onClickItem }: TMenu) => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("Inicio");

  useEffect(() => {
    const match = menuItems.find((item) => item.path === pathname);
    if (match) {
      setActiveItem(match.title);
    }
  }, [pathname]);

  const handleClick = (item: TMenuItem) => {
    if (item.path.startsWith("#")) {
      setActiveItem(item.title);
      const target = document.querySelector(item.path);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      if (onClickItem) {
        setTimeout(() => {
          onClickItem();
        }, 140);
      }
    }

    if (onClickItem) {
      onClickItem();
    }
  };

  return (
    <>
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.path}
          onClick={() => handleClick(item)}
          className={`text-primary text-base font-family-base max-lg:border-0 pb-2 max-lg:mb-0 transition-all border-b border-primary mb-2 w-full text-center max-w-[100%] max-sm:pb-3 max-sm:mb-3 max-sm:max-w-[80%] ${
            item.title === activeItem
              ? "font-bold border-b-2 max-lg:border-b-2 max-lg:text-link max-lg:border-link max-sm:text-secondary"
              : "font-normal"
          }`}
          title={item.title}
        >
          {item.title}
        </a>
      ))}
    </>
  );
};

const DesktopMenu = () => {
  return (
    <div className="h-full p-0 bg-gray-200 rounded-lg w-full max-lg:bg-transparent lg:p-8 lg:shadow-md">
      <div className="flex lg:flex-col items-center justify-center max-lg:gap-5">
        <MenuItens />
      </div>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <Disclosure as="nav" className="md:hidden flex items-center">
      {({ open, close }) => (
        <>
          <DisclosureButton className="text-gray-700 hover:text-black focus:outline-none">
            {open ? (
              ""
            ) : (
              <Image
                width={30}
                height={30}
                src={"/svg/hamburger-menu-icon.svg"}
                alt={"Abrir Menu"}
              />
            )}
          </DisclosureButton>
          <div
            className={`transition-all duration-500 fixed w-full top-0 h-screen z-30 bg-[#E4EDE3] p-4 ${
              open ? "right-0" : "right-[100%]"
            }`}
          >
            <DisclosurePanel className="flex flex-col px-4 pb-4 space-y-2 items-end mt-4">
              <DisclosureButton className="text-gray-700 hover:text-black focus:outline-none">
                {open ? (
                  <Image
                    width={24}
                    height={24}
                    src={"/svg/close-icon.svg"}
                    alt={"Fechar Menu"}
                  />
                ) : (
                  ""
                )}
              </DisclosureButton>
              <div className="flex flex-col items-center justify-center w-full mt-6">
                <MenuItens onClickItem={close} />
              </div>
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export { MenuItens, MobileMenu, DesktopMenu };
