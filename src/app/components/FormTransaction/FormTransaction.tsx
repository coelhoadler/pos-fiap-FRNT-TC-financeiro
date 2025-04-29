'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import CurrencyInput from 'react-currency-input-field';

import { transactionServices } from '@/app/api/transactionServices/transactionServices';
import Button from '@/app/components/button/button';
import Title from '../title/title';

import {
  ITransaction,
  ITypeTransaction,
} from '@/app/interfaces/transactionModels';
import { useTransaction } from '@/app/context/TransactionContext';
import { IInputs } from '@/app/interfaces/Form';
import { toast } from "react-toastify";

const FormTransaction = ({ transactionId, transactionTypeID, initialValue }: { transactionId?: string, transactionTypeID?: string, initialValue?: string }) => {

  const { id, typeTransactionEdit, valueEdit, setExtract , typeTransaction } = useTransaction();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm<IInputs>();
  const [typeTransactionOptions, setTypeTransactionOptions] = useState<
    ITypeTransaction[]
  >([])

  const valueWatched = watch('value')

  useEffect(() => {
    setTypeTransactionOptions(typeTransaction || [])
  },[typeTransaction])
  

  useEffect(() => {

    setValue('typeTransaction', typeTransactionEdit.id)
    setValue('value', String(valueEdit))
    console.log('valueWatched', valueWatched)

  }, [id, typeTransaction, valueEdit]);  

  const onSubmit: SubmitHandler<IInputs> = async () => {
    const optionId = watch('typeTransaction')
    const typeDescription = typeTransactionOptions.find((option) => option.id === optionId)?.description || ''

    const form: ITransaction = {
      typeTransaction: { id: optionId, description: typeDescription },
      amount: watch('value').toString().substring(3),
      date: new Date().toDateString(),
      accountNumber: '123456789',
    }

    if (id) {
      await transactionServices.update(id, form)
      toast.success('Transação alterada com sucesso!')
    } else {
      await transactionServices.create(form)
      toast.success('Transação realizada com sucesso!')
    }

    const response = await transactionServices.getAll()
    setExtract(response || [])
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-gray-300 min-h-[633px] w-full min-w-[280px] rounded-[10px] shadow-md p-6 text-tertiary z-2"
    >
      <Image
        width={146}
        height={144}
        src={'/bg-card-transaction.png'}
        alt={'Fundo quadriculado do card de transação financeira'}
        className="absolute top-0 right-0 max-h-[144px] max-w-[146px] z-[-1]"
      />

      <fieldset className="flex flex-col">
        <Title
          text={id ? "Editar transação" : "Nova transação"}
          titleForID="type-transaction-option"
          size="xlarge"
          otherClasses={['mb-5']}
        />

        <select
          id="type-transaction-option"
          className="w-full md:w-[355px] h-[48px] border-solid border-1 border-primary rounded p-16 bg-white text-black px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"
          {...register('typeTransaction', { required: true })}
        >
          <option value="">Selecione uma opção</option>
          {typeTransactionOptions &&
            typeTransactionOptions.length > 0 &&
            typeTransactionOptions.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.description}
                </option>
              );
            })}
        </select>

        {errors.typeTransaction && (
          <Title
            text="* Campo obrigatório"
            titleForID="type-transaction-option"
            size="small"
            otherClasses={['mb-3', 'text-red-600', 'font-medium']}
          />
        )}
      </fieldset>

      <fieldset className="flex flex-col mb-6">
        <Title
          text="Valor"
          titleForID="value"
          size="medium"
          otherClasses={['mb-3']}
        />
        {id? 
          <>      
            <CurrencyInput
              className="w-full md:w-[250px] h-[48px] border-solid border-1 border-primary rounded p-16 bg-white text-black px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"
              prefix="R$ "
              value={valueWatched}
              onValueChange={(value) => { 
      
                console.log('value----', value)
                setValue('value', value ?? '0') }
              }        
            />  
          </> : <>
            <CurrencyInput
              className="w-full md:w-[250px] h-[48px] border-solid border-1 border-primary rounded p-16 bg-white text-black px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"
              defaultValue={0}
              prefix="R$ " 
              {...register('value', { required: true })}
            />
          </>
        }
        
       
   

        {errors.value && (
          <Title
            text="* Campo obrigatório"
            titleForID="value"
            size="small"
            otherClasses={['mb-3', 'text-red-600', 'font-medium']}
          />
        )}
      </fieldset>

      <Button primary type="submit" label={id ? "Atualizar transação" : "Concluir transação"} />

      <Image
        width={283}
        height={228}
        src={'/woman-credit-card.png'}
        alt={'Ícone de mulher com cartão de crédito'}
        className="absolute bottom-5 right-5 max-h-[228px] max-w-[283px] z-[-1]"
      />

      <Image
        width={283}
        height={228}
        src={'/bg-card-transaction.png'}
        alt={'Fundo quadriculado do card de transação financeira'}
        className="absolute bottom-0 left-0 max-h-[177px] max-w-[180px] rotate-180 z-[-1]"
      />
    </form>
  );
};

export default FormTransaction;
