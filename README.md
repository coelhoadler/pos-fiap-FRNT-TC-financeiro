## Autores do projeto 

- [@Adler Coelho](https://www.linkedin.com/in/adlercoelhosantos/)
- [@Erick Nunes](https://www.linkedin.com/in/erick-nunes-bb81a9136/)
- [@Robson Rodrigues](https://www.linkedin.com/in/robson-rodrigues-ribeiro/)
- [@Luiz Paulo](https://www.linkedin.com/in/luizpaulocaldas/) 
- [@Virgílio Cano](https://www.linkedin.com/in/virgiliocano/)

## Sobre o Projeto

Este é um projeto feito com a biblioteca Next.js, cujo objetivo é representar as transações financeiras de um usuário.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão 16 ou superior)
- **NPM** (versão 8 ou superior) ou **Yarn**
- Um navegador moderno (como Google Chrome ou Firefox)

Para verificar as versões instaladas, use os comandos:

```bash
node -v
npm -v
```

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/coelhoadler/pos-fiap-FRNT-TC-financeiro.git
cd pos-fiap-FRNT-TC-financeiro
npm install
```

## Inicializando a aplicação

```bash
npm run npm run dbserver # para subir o servidor
npm run dev # para subir a aplicação
```

## Scripts disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a versão de produção.
- `npm run start`: Inicia o servidor em produção na porta 4000.
- `npm run dbserver`: Sobe o json-server para API fake.
- `npm run storybook`: Inicia o Storybook para visualizar componentes.
- `npm run test`: Executa os testes automatizados.

Abra o endereço [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

### Dependências principais (`dependencies`):

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

Porém limitações da Vercel, não é permitida nenhuma operação de I/O no arquivo. Apenas o GET.

## Contribuindo

Contribuições são bem-vindas! Abra uma issue ou envie um pull request.

## Licença

Este projeto está sob a licença MIT.