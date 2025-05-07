import { ITransaction } from "../interfaces/transactionModels";

export const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return formatter.format(date);
};

export const formatTime = (isoDate: string) => {
  const date = new Date(isoDate);

  const formatter = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return formatter.format(date);
};

export const sortExtractByAscDate = (extract: ITransaction[]) => {
  return extract.sort((a, b) => {
    const dateA = new Date(a.date || '').getTime();
    const dateB = new Date(b.date || '').getTime();

    return dateB - dateA;
  });
}