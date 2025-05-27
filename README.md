# 💸 Projeto Financeiro — Pós FIAP

Este é um projeto feito com a biblioteca **Next.js**, cujo objetivo é representar as **transações financeiras** de um usuário.

---

## 👨‍💻 Autores do projeto 

- [@Adler Coelho](https://www.linkedin.com/in/adlercoelhosantos/)
- [@Erick Nunes](https://www.linkedin.com/in/erick-nunes-bb81a9136/)
- [@Robson Rodrigues](https://www.linkedin.com/in/robson-rodrigues-ribeiro/)
- [@Luiz Paulo](https://www.linkedin.com/in/luizpaulocaldas/) 
- [@Virgílio Cano](https://www.linkedin.com/in/virgiliocano/)

---

## 🚀 Sobre o Projeto

O sistema permite **visualizar, editar, atualizar e excluir** transações financeiras por meio de uma interface moderna, construída com **Material UI (MUI)** e **Toast notifications**.

---

## ✅ Funcionalidades

- Visualização de transações financeiras
- Criação, edição e exclusão de lançamentos
- Diálogos com `@mui/material` para ações como editar ou confirmar exclusões
- Feedback visual com `react-toastify` para todas as operações
- Interface responsiva com TailwindCSS e MUI

---

## 🧱 Telas / Menus / Mensagerias

### Telas

- **Home**: Lista de transações

  ![image](https://github.com/user-attachments/assets/fdd06f12-d465-4a29-805f-7980f2a1643e)

- **Formulário**: Cadastro ou edição de lançamentos

  ![image](https://github.com/user-attachments/assets/134c4af9-60c9-451e-ac2f-e5627089caba)

- **Formulário**: Saldo

  ![image](https://github.com/user-attachments/assets/bdecb2f8-fec1-434d-abe2-9d723eec239c)

  
  
- **Confirmação**: Diálogo de exclusão com alerta

### Menus

- Navegação lateral com ícones

  ![image](https://github.com/user-attachments/assets/2ff8d6a1-2c14-4278-bf4c-3fce9d6ddcaa)

- Botões de ação (Adicionar, Editar, Excluir)
  
  ![image](https://github.com/user-attachments/assets/33576e58-e4bf-4b1d-8809-d6785ff1b3d9)
  
  ![image](https://github.com/user-attachments/assets/62bf808b-ceac-46e8-a885-732bedfdb828)

  ![image](https://github.com/user-attachments/assets/a7f8d941-5143-45f7-9ce5-8ef9c0070b55)

  ![image](https://github.com/user-attachments/assets/d868e156-0542-4e32-8a33-85c99b720c91)


  



### Mensagerias

Mensagens amigáveis são exibidas via `Toast`:

- 💾 "Transação atualizada com sucesso!"
- 🗑️ "Transação excluída com sucesso!"
- ⚠️ "Erro ao processar ação!"

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (versão 16 ou superior)
- **NPM** (versão 8 ou superior) ou **Yarn**

Verifique as versões com:

```bash
node -v
npm -v
````

## ⚙️ Instalação

- Clone o repositório e instale as dependências

```bash
git clone https://github.com/coelhoadler/pos-fiap-FRNT-TC-financeiro.git
cd pos-fiap-FRNT-TC-financeiro
npm install
```
## ▶️ Inicializando a aplicação

```bash
npm run dbserver  # Inicia o json-server na porta 4000
npm run dev       # Inicia o frontend na porta 3000
```

## 🔧 Scripts disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a versão de produção.
- `npm run start`: Inicia o servidor em produção na porta 4000.
- `npm run dbserver`: Sobe o json-server para API fake.
- `npm run storybook`: Inicia o Storybook para visualizar componentes.
- `npm run test`: Executa os testes automatizados.

Abra o endereço [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

### 📚 Principais dependências

- **@emotion/react**: Biblioteca para estilização CSS-in-JS no React.
- **@emotion/styled**: API para criar componentes estilizados com Emotion.
- **@headlessui/react**: Componentes UI acessíveis e sem estilos, para React.
- **@heroicons/react**: Ícones SVG otimizados para React.
- **@mui/material**: Componentes de UI do Material Design para React.
- **@vercel/speed-insights**: Ferramenta para monitoramento de performance em aplicações Vercel.
- **autoprefixer**: Adiciona prefixos CSS automaticamente para compatibilidade entre navegadores.
- **axios**: Cliente HTTP para requisições.
- **env-cmd**: Gerencia variáveis de ambiente.
- **json-server**: Cria uma API REST fake rapidamente.
- **next**: Framework React para SSR e SSG.
- **postcss**: Ferramenta para transformar CSS com plugins.
- **react**: Biblioteca principal para construção de interfaces.
- **react-currency-input-field**: Campo de input para valores monetários.
- **react-currency-mask**: Máscara para campos de valor monetário.
- **react-dom**: Pacote para manipulação do DOM com React.
- **react-hook-form**: Gerenciamento de formulários em React.
- **react-icons**: Biblioteca de ícones para React.
- **react-toastify**: Notificações toast para React.
- **tailwindcss**: Framework utilitário para estilização CSS.

## Links Úteis

- [Documentação do Next.js](https://nextjs.org/docs)
- [Storybook](https://storybook.js.org/)

## Demo 🌐

O projeto foi deployado na [Vercel](https://vercel.com/), através do link: [clique aqui](https://pos-fiap-frnt-tc-financeiro.vercel.app/home).

Por limitações da Vercel, não é permitida nenhuma operação de I/O no arquivo. Apenas o GET.

## Contribuindo

Contribuições são bem-vindas! Abra uma issue ou envie um pull request.

## Licença

Este projeto está sob a licença MIT.
