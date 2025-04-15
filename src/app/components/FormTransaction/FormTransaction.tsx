'use client'

import { getTypeTransaction } from "@/app/api/transactionServices/transactionServices";
import { IInputs } from "@/app/interfaces/form";
import { ITypeTransaction } from "@/app/interfaces/transactionModels";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const FormTransaction = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IInputs>()
  const [typeTransactionOptions, setTypeTransactionOptions] = useState<ITypeTransaction[]>([])

  useEffect(() => {
    const fetchTypeTransaction = async () => {
      const responseData = await getTypeTransaction()
      setTypeTransactionOptions(responseData || [])
    }

    fetchTypeTransaction();
  }, []);

  const onSubmit: SubmitHandler<IInputs> = () => {
    return alert("Transação realizada com sucesso!");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-gray-300 sm:min-h-[350px] w-full md:min-w-[320px] rounded-[10px] shadow-md p-6 mb-6 text-tertiary"
>

      <div>
        <label
          htmlFor="type-transaction-option"
          className="block text-sm font-medium text-gray mb-1 mt-5"
        >
          Tipo de transação
        </label>
        <select
          id="type-transaction-option"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          {...register('typeTransaction', { required: true })}
        >
          <option value="">Selecione uma opção</option>
          {
            typeTransactionOptions && typeTransactionOptions.length > 0 &&
            typeTransactionOptions.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.description}
                </option>
              )
            }
            )
          }
        </select>

        {
          errors.typeTransaction && (
            <span className="text-sm text-red-500">Campo obrigatório</span>
          )
        }

      </div>

      <div>
        <label
          htmlFor="value"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Valor
        </label>
        <input
          type="number"
          id="value"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          {...register('value', { required: true })}
        />
        {errors.value && (
          <span className="text-sm text-red-500">Campo obrigatório</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded transition font-medium"
      >
        Concluir transação
      </button>
    </form>

  )
}

export default FormTransaction