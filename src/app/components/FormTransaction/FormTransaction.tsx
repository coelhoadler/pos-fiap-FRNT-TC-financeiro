'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import CurrencyInput, { formatValue } from 'react-currency-input-field';

import { typeTransactionService } from '@/app/api/typeTransactionService/typeTransactionServices';
import { transactionServices } from '@/app/api/TransactionServices/transactionServices';
import Button from '@/app/components/button/button';
import Title from '../title/title';
import { IInputs } from '@/app/interfaces/form';
import {
  ITransaction,
  ITypeTransaction,
} from '@/app/interfaces/transactionModels';

const FormTransaction = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IInputs>();
  const [typeTransactionOptions, setTypeTransactionOptions] = useState<
    ITypeTransaction[]
  >([]);

  useEffect(() => {
    const fetchTypeTransaction = async () => {
      const responseData = await typeTransactionService.getAll();
      setTypeTransactionOptions(responseData || []);
    };

    fetchTypeTransaction();
  }, []);

  const onSubmit: SubmitHandler<IInputs> = async () => {
    const optionId = watch('typeTransaction');
    const typeDescription =
      typeTransactionOptions.find((option) => option.id === optionId)
        ?.description || '';

    const formattedCurrency = formatValue({
      value: watch('value')
        .toString()
        .replaceAll(/[^0-9]/g, ''),
      intlConfig: { locale: 'pt-BR', currency: 'BRL' },
      prefix: '',
    });

    const form: ITransaction = {
      typeTransaction: { id: optionId, description: typeDescription },
      amount: formattedCurrency,
      date: new Date(),
      accountNumber: '123456789',
    };

    await transactionServices.create(form);
    return alert('Transação realizada com sucesso!');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-gray-300 min-h-[633px] md:min-h-[478px] w-full min-w-[280px] rounded-[10px] shadow-md p-6 text-tertiary z-2"
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
          text="Nova transação"
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

        <CurrencyInput
          className="w-full md:w-[250px] h-[48px] border-solid border-1 border-primary rounded p-16 bg-white text-black px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"
          defaultValue={0}
          prefix="R$ "
          {...register('value', { required: true })}
        />

        {errors.value && (
          <Title
            text="* Campo obrigatório"
            titleForID="value"
            size="small"
            otherClasses={['mb-3', 'text-red-600', 'font-medium']}
          />
        )}
      </fieldset>

      <Button primary type="submit" label="Concluir transação" />

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
