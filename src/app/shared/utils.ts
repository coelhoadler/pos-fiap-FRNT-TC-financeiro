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
      year: 'numeric',
    });
  
    return formatter.format(date);
  };