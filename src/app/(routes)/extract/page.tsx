"use client";
import AccountStatement from "@/app/components/accountStatement/AccountStatement";
import FormTransaction from "@/app/components/transaction/transaction";
import Image from "next/image";
import {
  CloseButton,
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

export default function Extract() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-3 w-full">
      <AccountStatement onEditTransaction={() => setIsOpen(true)} />
      <div>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/30" />
          <div className="fixed inset-0 flex w-screen items-center justify-center">
            <DialogPanel className=" space-y-4 max-w-[50%] max-lg:max-w-[80%] max-sm:max-w-[90%] m-auto w-full bg-white rounded-[10px] shadow-md p-6">
              <CloseButton className="cursor-pointer block w-full">
                <Image
                  className="ml-auto text-primary filter-(--filter-primary)"
                  width={24}
                  height={24}
                  src={"/svg/close-icon.svg"}
                  alt={"Fechar"}
                />
              </CloseButton>
              <FormTransaction isEditingOnly={true} />
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
