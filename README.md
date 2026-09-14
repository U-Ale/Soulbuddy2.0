# SOL | Source Code

O SOL é uma plataforma desenvolvida pela equipe Source Code com o objetivo de incentivar hábitos sustentáveis de forma simples, tecnológica e divertida.

A plataforma utiliza um sistema de gamificação para incentivar ações ecológicas por meio de desafios e EcoPoints, permitindo que os usuários acompanhem seu progresso e participem de um ranking.

O projeto também apresenta informações sobre sustentabilidade, os integrantes da equipe e um espaço para contato.

---

/* ========== TECNOLOGIAS UTILIZADAS ========== */

React

Vite

TypeScript

HTML5

CSS3

Tailwind CSS

React Router DOM

Git

GitHub

---

/* ========== COMO UTILIZAR ========== */

Primeiro entre na pasta do projeto pelo terminal CMD.

Após entrar na pasta, utilize o comando:

```bash
npm install
```

Esse comando irá instalar todas as dependências necessárias para executar o projeto.

Após a instalação, utilize:

```bash
npm run dev
```

Depois disso, o terminal irá fornecer um endereço parecido com:

```text
http://localhost:5173/
```

Copie o endereço e cole no navegador.

Assim que acessar, será apresentada a página inicial do EcoFuture.

---

/* ========== HOME ========== */

Na Home é apresentada uma introdução ao EcoFuture, explicando de forma resumida a proposta da plataforma.

A página possui um botão para acessar o Dashboard e três áreas principais:

Sustentabilidade

Desafios

Tecnologia

A navegação entre as páginas pode ser realizada através do Header da aplicação.

---

/* ========== SOBRE ========== */

Na página Sobre são apresentadas as principais informações relacionadas ao projeto.

A página é dividida em três partes:

Problema

Apresenta a dificuldade de incentivar as pessoas a desenvolverem hábitos sustentáveis no dia a dia.

Solução

Apresenta a proposta do EcoFuture de utilizar gamificação, desafios, pontos e tecnologia para incentivar ações ecológicas.

Objetivo

Apresenta a intenção de tornar a sustentabilidade mais acessível, moderna, tecnológica e divertida.

---

/* ========== DASHBOARD ========== */

O Dashboard é uma das principais partes do projeto.

Nele é possível visualizar o perfil do usuário, a quantidade de EcoPoints, as missões disponíveis e o ranking.

O usuário começa com:

```text
1250 EcoPoints
```

Existem três missões disponíveis:

```text
Economizar água = 10 EP

Separar lixo = 5 EP

Plantar árvore = 50 EP
```

Ao clicar em uma missão, ela é marcada como concluída e os EcoPoints são adicionados ao usuário.

Cada missão pode ser concluída apenas uma vez durante a utilização atual da página.

---

/* ========== RANKING ========== */

O Dashboard também possui um sistema de ranking.

Atualmente são apresentados:

```text
Ana
Lucas
Maria
```

A pontuação da Ana é atualizada de acordo com as missões concluídas no Dashboard.

O ranking atualmente funciona apenas no estado da aplicação e ainda não possui um banco de dados ou sistema de usuários.

---

/* ========== PARTICIPANTES ========== */

Na página Participantes são apresentados os integrantes responsáveis pelo desenvolvimento do projeto.

A página possui cards com as informações dos participantes e suas respectivas imagens.

Também foram adicionadas imagens dos integrantes na pasta:

```text
src/assets/integrantes/
```

Além das fotos, foi adicionada uma imagem do sol com fundo transparente para complementar a composição visual da página.

---

/* ========== CONTATO ========== */

A página de contato possui um formulário para que o usuário possa preencher:

Nome

Email

Mensagem

Também é apresentado o email de contato da equipe.

O formulário atualmente possui apenas a parte visual e ainda não está conectado a um sistema de envio ou backend.

---

/* ========== ESTRUTURA DO PROJETO ========== */

A estrutura principal do projeto está organizada da seguinte maneira:

```text
src/
├── assets/
│   └── integrantes/
│       ├── alexandre.jpg
│       ├── matheus.jpg
│       ├── julia.jpg
│       ├── felipe.jpg
│       ├── gabriel.jpg
│       └── sol.png
│
├── components/
│   ├── footer/
│   │   └── Footer.tsx
│   └── header/
│       └── Header.tsx
│
├── pages/
│   ├── home/
│   │   └── Home.tsx
│   ├── sobre/
│   │   └── Sobre.tsx
│   ├── dashboard/
│   │   └── Dashboard.tsx
│   ├── participantes/
│   │   └── Participantes.tsx
│   └── contato/
│       └── Contato.tsx
│
├── App.tsx
├── index.css
└── main.tsx
```

---

/* ========== EQUIPE SOURCE CODE ========== */

Alexandre Prazeres

Função: Desenvolvedor

GitHub:

https://github.com/U-Ale

LinkedIn:

https://www.linkedin.com/in/alexandre-prazeres-santos/

---

Matheus Nézio

Função: Desenvolvedor

GitHub:

https://github.com/Nezio22

LinkedIn:

https://www.linkedin.com/in/matheus-nezio-9971b039/

---

Júlia Rodrigues

Função: Designer

GitHub:

https://github.com/juliaraalmeida77-ux

LinkedIn:

https://www.linkedin.com/in/júlia-rodrigues-9147593a7/

---

Felipe Passos

GitHub:

https://github.com/Felipeads12

LinkedIn:

https://www.linkedin.com/in/felipe-passos-110668397/

Função: Desenvolvedor

---

Gabriel Canevari

GitHub:

https://github.com/Canevari2

LinkedIn:

https://www.linkedin.com/in/gabriel-canevari-476825382/

Função: Desenvolvedor

---

/* ========== REPOSITORIO ========== * / 

Link do Repositorio git:
https://github.com/U-Ale/Soulbuddy2.0