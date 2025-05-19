import Image from "next/image";
import { MobileMenu } from "../components/menu/menu";

export type THeader = {
    nameUser: string;
};

export async function generateStaticParams(): Promise<any> {
    return {
        nameUser: "Joana da Silva Oliveira",
    };
}

export default async function Page({ nameUser }: any) {
    return (
        <header className="flex justify-between items-center bg-primary h-[96px] p-1.5 fixed w-full z-30 shadow-[0px_2px_10px_1px_rgba(0,0,0,0.75)]">
            <div className="max-w-[80%] m-auto w-full max-lg:max-w-full px-[15px] max-md:flex max-md:items-center">
                <MobileMenu />
                <div className="flex justify-end items-center gap-10 w-full">
                    <p className="font-bold text-sm font-family-base text-white hidden md:block">
                        {nameUser}
                    </p>

                    <div className="relative">
                        <a className="w-full h-full block left-0 right-0 top-0 bottom-0 m-auto absolute text-[0px]" href="/profile">Meu Perfil</a>
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
