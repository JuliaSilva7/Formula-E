# 🏎️ E-Masters — Jogo de Fórmula E

https://github.com/user-attachments/assets/e246ea06-8906-4b43-888f-ea22694700b3


O **E-Masters** é um jogo interativo inspirado no Campeonato Mundial de Fórmula E, no qual os participantes montam suas próprias equipes e fazem previsões sobre o desempenho dos pilotos e das equipes durante as corridas.

O objetivo é acumular pontos por meio de previsões sobre posições finais, pilotos no Top 10, vencedores, voltas mais rápidas e ultrapassagens, considerando duas etapas: **Corrida Principal** e **Corrida Classificatória**.

## 🌐 Acesse o jogo

**[E-Masters — Jogar online](https://e-masters-three.vercel.app/)**

Acesse a aplicação e monte sua equipe para participar do desafio!

## 🎮 Funcionalidades

- Seleção de 10 pilotos e 1 equipe para cada rodada.
- Cadastro e acesso de usuários.
- Sistema de pontuação baseado nos resultados das corridas.
- Cálculo automático da pontuação dos pilotos e das equipes.
- Acompanhamento dos resultados da Corrida Principal e da Corrida Classificatória.
- Ranking de participantes de acordo com a pontuação acumulada.
- Consulta às informações dos pilotos e das equipes.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| React.js | Construção da interface e dos componentes |
| JavaScript | Lógica do jogo e cálculo de pontuação |
| CSS | Estilização e layout |
| Vite | Ambiente de desenvolvimento e build |
| JSON Server | API para armazenamento e consulta dos dados |
| Git e GitHub | Versionamento e colaboração |
| Vercel | Hospedagem da aplicação |
| Render | Hospedagem da API |

## 🚀 Instalação e execução

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm (instalado junto com o Node.js)
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/MindSyncc/Site_Challenge2.git
```

### 2. Acesse a pasta do projeto

```bash
cd e_masters_site
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação. Normalmente:

```text
http://localhost:5173
```

> **Observação:** a aplicação utiliza uma API hospedada no Render para consultar e armazenar os dados dos usuários. Para executar o projeto localmente com outro backend, será necessário configurar a API correspondente.

## 🏁 Como jogar

1. Crie sua conta ou acesse uma conta existente.
2. Escolha 10 pilotos e 1 equipe para participar da rodada.
3. Faça suas previsões para a Corrida Principal e a Corrida Classificatória.
4. Após os resultados, confira a pontuação obtida.
5. Acompanhe sua posição no ranking geral.

## 📊 Regras de pontuação

A pontuação é calculada considerando o desempenho dos pilotos e das equipes nas duas fases da competição.

### Corrida Principal

**Pontuação da equipe**

A pontuação dos dois pilotos de cada equipe é somada para determinar a classificação das equipes.

| Posição | Pontos |
|---|---:|
| 1º lugar | 10 |
| 2º lugar | 5 |
| 3º lugar | 3 |
| 4º lugar | 2 |
| 5º lugar | 1 |

**Pontuação dos pilotos**

| Critério | Pontuação |
|---|---:|
| Acerto exato da posição | 10 pontos |
| Acerto de piloto no Top 10 | 5 pontos |
| Acerto do vencedor | Dobra a pontuação do piloto |
| Piloto escalado e desqualificado | -5 pontos |
| Acerto da volta mais rápida | 10 pontos |
| Cada ultrapassagem realizada | +0,5 ponto |
| Cada ultrapassagem sofrida | -0,2 ponto |

**Exemplo:** se o participante acertar exatamente as posições de três pilotos, receberá 30 pontos por esses acertos.

### Corrida Classificatória

**Pontuação da equipe**

A pontuação dos dois pilotos de cada equipe é somada para determinar a classificação das equipes.

| Posição | Pontos |
|---|---:|
| 1º lugar | 5 |
| 2º lugar | 2,5 |
| 3º lugar | 1,5 |
| 4º lugar | 1 |
| 5º lugar | 0,5 |

**Pontuação dos pilotos**

| Critério | Pontuação |
|---|---:|
| Acerto exato da posição | 5 pontos |
| Acerto de piloto no Top 10 | 2,5 pontos |
| Acerto do vencedor | Dobra a pontuação do piloto |
| Piloto escalado e desqualificado | -2,5 pontos |
| Acerto da volta mais rápida | 5 pontos |
| Cada ultrapassagem realizada | +0,5 ponto |
| Cada ultrapassagem sofrida | -0,2 ponto |

## 👥 Integrantes do projeto

- Fernando Carlos Colque Huaranca
- Heloísa Fleury Jardim
- Juan Fuentes Rufino
- Julia Carolina Ferreira Silva
- Pedro Henrique Silva Batista

## 🔗 Repositório

[GitHub — E-Masters](https://github.com/MindSyncc/Site_Challenge2)
