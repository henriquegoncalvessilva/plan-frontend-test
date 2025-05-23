# ⭐ Desafio Técnico – Desenvolvedor(a) Front-End (Next.js)

​

## ⭐ Objetivo

​
Desenvolver uma aplicação web com **Next.js** que consuma a [REST Countries API](https://restcountries.com/#rest-countries), permitindo ao usuário explorar e visualizar informações sobre países de forma interativa e responsiva.
​

---

​

## ⭐ Contexto

​
A aplicação será um catálogo de países com recursos de filtragem e visualização de detalhes. O usuário deve poder:
​

- Navegar por uma lista de países.
- Filtrar por:
  - Nome do país (busca textual).
  - Continente (checkboxes).
  - Idioma (select).
- Acessar uma página com detalhes do país selecionado.
  ​

---

​

## ⭐ Layout

Segue links do layout para aplicação:
  - [Figma Componentes](https://www.figma.com/design/uqRKSNiAtLlHWzg6qs7J0v/TESTE-FRONT-PLAN?node-id=0-1&p=f)
  - [Figma Apresentação](https://www.figma.com/proto/uqRKSNiAtLlHWzg6qs7J0v/TESTE-FRONT-PLAN?node-id=2-615&t=jAEkXLJ8nXUMIDD4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)
​
-

**A responsividade deve ser aplicada para manter o layout mais coerente com o definido acima.**

---

​

## ⭐ Requisitos Técnicos

​

- Utilizar **Next.js** como framework principal ([https://nextjs.org/](https://nextjs.org/)).
- Utilizar **ESLint**, conforme [documentação oficial](https://nextjs.org/docs/app/api-reference/config/eslint).
- Utilizar **TypeScript**
- Garantir **responsividade** da aplicação.
- Exibir as informações dos países **em português**, quando disponível, utilizando o campo `translations.por` da versão `v3.1` da REST Countries API.
- Código organizado, componentizado e limpo.
  ​

---

​

## ⭐ Funcionalidades Esperadas

​

### 1. Página Inicial

- Lista de países com:
  - Nome (em português)
  - Bandeira
  - Região
- Filtros:
  - **Busca por nome**
  - **Filtro por continente** (checkbox)
  - **Filtro por idioma** (select)
    ​

### 2. Página de Detalhes

- Informações completas de um país:
  - Nome oficial
  - População
  - Moeda
  - Línguas faladas
  - Bandeira
  - Região / Sub-região
    ​

---

​

## ⭐ Diferenciais (Desejável, não obrigatório)

​

- Estilização moderna: **TailwindCSS**, **CSS Modules**
- Configuração de **Prettier** e **ESLint**
- Considerações básicas de acessibilidade
  ​

---

## ⭐ Considerações sobre o repositório

​

Este projeto deve ser utilizado como base para o desenvolvimento do seu teste. Alguns componentes estão presentes apenas como exemplo para o desenvolvedor, e devem ser removidos antes do início efetivo do desenvolvimento do teste.

​

## ⭐ Entrega

​

1. Faça um fork do repositório público <link do repositorio>.
2. Inclua no `README.md` as seguintes informações:
   - Instruções para rodar localmente.
   - Breve explicação sobre suas escolhas técnicas.
   - Link do deploy (se houver).
3. Submeta o link do repositório e, se aplicável, do deploy.
   ​
   Boa sorte! Estamos ansiosos para ver sua solução. 🚀

​

## ⭐ Instruções

Siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/henriquegoncalvessilva/plan-frontend-test.git

2. Clone o repositório:

   ```bash
   cd plan-frontend-test

3. Instale as dependências

   ```bash
   npm install
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
5. O projeto estará disponível em http://localhost:3000

## ⭐ Breve explicação

### 💨 Utilização do Tailwind CSS

Optei pelo **Tailwind CSS** por diversos motivos:

- Agilidade no desenvolvimento;
- Facilidade na criação de layouts responsivos;
- Flexibilidade e reutilização de estilos, promovendo padronização e redução de código repetido.

### 🧠 Lazy Loading com `next/dynamic`

Ao invés do `React.lazy`, utilizei o `dynamic` do **Next.js**, pois ele oferece otimizações nativas, como preload automático e melhor suporte à renderização do lado do servidor (SSR), o que melhora o desempenho da aplicação de forma geral.

### 🤖 Uso de IA com GitHub Copilot

Durante o desenvolvimento, utilizei o **GitHub Copilot** como apoio. A ferramenta contribuiu significativamente na agilidade da codificação, ajudando tanto na performance quanto na legibilidade e organização do código.

### 🧩 Zustand para Gerenciamento de Estado

Implementei o **Zustand** para o gerenciamento de estado global da aplicação. A escolha foi baseada nos seguintes benefícios:

- Evita o "Prop Drilling" ao permitir o compartilhamento de dados entre componentes de forma direta;
- Elimina a necessidade de `Provider`, como ocorre com o Context API;
- Torna a implementação mais simples e objetiva;
- Permite controlar funcionalidades como paginação e requisições (fetchs) de forma eficiente e centralizada.

---

### 💡 Melhorias de Experiência do Usuário (UX)

Alguns pontos da aplicação foram ajustados em relação ao design proposto no Figma, seja por limitações técnicas ou oportunidades de melhoria visual e funcional.

Um exemplo prático foi a **paginação**. A API retorna dados com até 32 páginas, o que tornaria a navegação com 32 bolinhas (_dots_) visualmente poluída e pouco funcional. Por isso, optei por uma solução mais limpa e objetiva: exibir a **página atual / total de páginas**, oferecendo melhor clareza para o usuário.

---

### 🗣️ Considerações

Como desenvolvedores, é fundamental sabermos dialogar com o time de produto sobre ajustes que tragam ganhos de usabilidade e mantenham a entrega com qualidade. Pequenas decisões, como a melhoria na paginação, demonstram a importância de pensar a experiência do usuário como um todo, além de apenas seguir o layout à risca.
​

## ⭐ Link do deploy (se houver)

Link do deploy - https://plan-frontend-test-bice.vercel.app/

​
