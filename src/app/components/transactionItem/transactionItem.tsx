import React from "react";
import { LuPencil } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";
import { ITransaction } from "@/app/interfaces/transactionModels";
import { formatDate, formatTime } from "@/app/shared/utils";
import { useTransaction } from "@/app/context/TransactionContext";
import Link from "next/link";

interface TransactionItemProps {
  item: Partial<ITransaction>;
  onDelete: (transactionId: string) => void;
  onEdit?: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  item,
  onDelete,
  onEdit,
  ...props
}) => {
  const { setId, setTypeTransactionEdit, setValueEdit } = useTransaction();

  const handleEditTransaction = ({
    id,
    typeTransaction,
    amount,
  }: ITransaction) => {
    setId(id!);
    setTypeTransactionEdit(typeTransaction);
    setValueEdit(amount);
  };

  return (
    <div className="mb-4 pb-4 border-b border-link" {...props}>
      <span className="text-link font-semibold">
        {formatDate(item.date || "")}
      </span>
      <span className="ml-3 text-sm text-gray-500">
        {formatTime(item.date || "")}
      </span>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-md">{item.typeTransaction?.description}</p>
          <p
            className={`text-md font-bold ${
              parseFloat(item.amount || "0") < 0 ? "text-red-600" : "text-black"
            }`}
          >
            {parseFloat(item.amount || "0") < 0 ? "-" : ""} {item.amount || "0"}
          </p>
        </div>
        <p
          className={"text-sm flex flex-col gap-3.5 text-white"}
        >
          <Link href="#transaction-form" onClick={(e) => e.preventDefault()}>
            <button
              title="Editar"
              className="bg-primary rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleEditTransaction(item as ITransaction);
                onEdit?.();
              }}
            >
              <LuPencil size={18} />
            </button>
          </Link>
          <button
            title="Excluir"
            className="bg-primary rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer"
            onClick={() => onDelete(item.id || "")}
          >
            <FaTrashAlt size={18} />
          </button>
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
