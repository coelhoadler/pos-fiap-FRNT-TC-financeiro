'use client'

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { IInputs } from "@/app/interfaces/Form";
import { ITransaction, ITypeTransaction } from "@/app/interfaces/TransactionModels";
import { typeTransactionService } from "@/app/api/typeTransactionService/typeTransactionServices";
import { transactionServices } from "@/app/api/transactionServices/transactionServices";

const FormTransaction = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IInputs>()
  const [typeTransactionOptions, setTypeTransactionOptions] = useState<ITypeTransaction[]>([])

  useEffect(() => {
    const fetchTypeTransaction = async () => {
      
      const responseData = await typeTransactionService.getAll()
      setTypeTransactionOptions(responseData || [])
    }

    fetchTypeTransaction();
  }, []);

  const onSubmit: SubmitHandler<IInputs> = async () => {
    
    const optionId = watch('typeTransaction')
    
    const typeDescription = typeTransactionOptions.find((option) => option.id === optionId)?.description || ''
    
    const form: ITransaction = {
      typeTrasaction: { id: optionId, description: typeDescription },
      amount: watch('value'),
      date: new Date(),
      accountNumber: '123456789',
    }

    await transactionServices.create(form)


    return alert("Transação realizada com sucesso!");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-gray-300 min-h-[633px] md:min-h-[478px] w-full min-w-[320px] rounded-[10px] shadow-md p-6 text-tertiary z-2"
    >
      <Image
        width={146}
        height={144}
        src={"/bg-card-transaction.png"}
        alt={"Fundo quadriculado do card de transação financeira"}
        className="absolute top-0 right-0 max-h-[144px] max-w-[146px] z-[-1]"
      />

      <div className="flex flex-col">
        <label
          htmlFor="type-transaction-option"
          className="block text-xl font-bold mb-5"
        >
          Nova transação
        </label>
        <select
          id="type-transaction-option"
          className="w-[355px] h-[48px] border-solid border-1 border-primary rounded p-16 bg-white text-black px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"
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
            <span className="text-sm text-red-600 mb-3">Campo obrigatório</span>
          )
        }
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="value"
          className="block text-md font-bold mb-3"
        >
          Valor
        </label>
        <input
          type="number"
          id="value"
          className="w-[250px] h-[48px] border-solid border-1 border-primary rounded p-16 bg-white text-black px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"
          {...register('value', { required: true })}
        />
        {errors.value && (
          <span className="text-sm text-red-600 mb-3">Campo obrigatório</span>
        )}
      </div>

      <button
        type="submit"
        className="w-[250px] h-[48px] bg-primary cursor-pointer text-white py-2 px-4 rounded-[8px] transition font-medium mt-6"
      >
        Concluir transação
      </button>

      <Image
        width={283}
        height={228}
        src={"/woman-credit-card.png"}
        alt={"Ícone de mulher com cartão de crédito"}
        className="absolute bottom-5 right-5 max-h-[228px] max-w-[283px] z-[-1]"
      />

      <Image
        width={283}
        height={228}
        src={"/bg-card-transaction.png"}
        alt={"Fundo quadriculado do card de transação financeira"}
        className="absolute bottom-0 left-0 max-h-[177px] max-w-[180px] rotate-180 z-[-1]"
      />      
    </form>

  )
}

export default FormTransaction