"use client";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export function MobileMenu() {
  return (
    <Disclosure as="nav" className="md:hidden border-b">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between p-4">
            <DisclosureButton className="text-gray-700 hover:text-black focus:outline-none">
              {open ? (
                ""
              ) : (
                <div className="h-6 w-6">
                  <Image
                    width={24}
                    height={24}
                    src={"/svg/hamburger-menu-icon.svg"}
                    alt={""}
                  />
                </div>
              )}
            </DisclosureButton>
          </div>
          <div
            className={`transition-all fixed  w-full top-0 h-screen z-30 bg-[#E4EDE3]  p-4 ${
              open ? "left-0" : "left-[100%]"
            }`}
          >
            <DisclosurePanel
              className={`flex flex-col px-4 pb-4 space-y-2 items-end  ${
                open ? "" : ""
              }`}
            >
              <DisclosureButton className="text-gray-700 hover:text-black focus:outline-none">
                {open ? (
                  <div className="h-6 w-6">
                    <Image
                      width={24}
                      height={24}
                      src={"/svg/close-icon.svg"}
                      alt={""}
                    />
                  </div>
                ) : (
                  ""
                )}
              </DisclosureButton>
              <div className="flex flex-col items-center justify-center w-full">
                <a href="/home" className="text-gray-800 hover:underline">
                  Início
                </a>
                <a href="/sobre" className="text-gray-800 hover:underline">
                  Sobre
                </a>
                <a href="/servicos" className="text-gray-800 hover:underline">
                  Serviços
                </a>
                <a href="/contato" className="text-gray-800 hover:underline">
                  Contato
                </a>
              </div>
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
