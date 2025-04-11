"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React, { useEffect, useState } from "react";

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
    path: "#",
  },
  {
    title: "Outros serviços",
    path: "#",
  },
];

const DesktopMenu = () => {
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
    }
  };

  return (
    <div>
      <div>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            onClick={() => handleClick(item)}
            className={item.title === activeItem ? "active" : ""}
            title={item.title}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

const MobileMenu = ({}) => {
  return (
    <Disclosure as="nav" className="md:hidden flex items-center">
      {({ open }) => (
        <>
          <DisclosureButton className="text-gray-700 hover:text-black focus:outline-none">
            {open ? (
              ""
            ) : (
              <Image
                width={30}
                height={30}
                src={"/svg/hamburger-menu-icon.svg"}
                alt={"Abri Menu"}
              />
            )}
          </DisclosureButton>
          <div
            className={`transition-all duration-500 fixed  w-full top-0 h-screen z-30 bg-[#E4EDE3]  p-4 ${
              open ? "right-0" : "right-[100%]"
            }`}
          >
            <DisclosurePanel
              className={`flex flex-col px-4 pb-4 space-y-2 items-end  ${
                open ? "" : ""
              }`}
            >
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
              <div className="flex flex-col items-center justify-center w-full">
                {menuItems.map((item, index) => (
                  <a key={index} href={item.path} title={item.title}>
                    {item.title}
                  </a>
                ))}
              </div>
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export { MobileMenu, DesktopMenu };
