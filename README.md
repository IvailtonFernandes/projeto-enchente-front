# 🌊 Projeto SOS Enchentes - Gestão de Abrigos

### 1 - Apresentação da Ideia
Este é o meu projeto final. A ideia surgiu a partir do desafio sobre enchentes no Brasil. Pensando nesse cenário, decidi focar no problema da **falta de informações centralizadas sobre abrigos**, que muitas vezes dificulta o direcionamento correto das famílias desabrigadas para locais com vagas disponíveis.

### 2 - Problema Escolhido
Decidi resolver a dificuldade de comunicação e monitoramento da lotação dos abrigos em tempo real. Em situações de desastre, a falta de dados atualizados faz com que alguns abrigos fiquem superlotados enquanto outros permanecem vazios, gerando ineficiência no acolhimento das vítimas.

### 3 - Solução Proposta
A ideia do sistema é uma plataforma de gestão de abrigos onde voluntários podem cadastrar novos pontos de acolhimento e a população pode consultar a lista de locais disponíveis. O sistema exibe de forma visual a barra de ocupação de cada abrigo, permitindo saber instantaneamente quais locais ainda podem receber pessoas.

### 4 - Estrutura do Sistema
O projeto foi dividido em três camadas:

* **Front-end:** Desenvolvido com **React.js** e **Vite**, utilizando **Sass (SCSS)** para uma interface moderna e responsiva. Ele é responsável por exibir os dados e permitir que o usuário interaja com o sistema.
* **Back-end:** Desenvolvido em **Node.js** com o framework **Express**. Ele gere as rotas da API, faz a ponte entre o usuário e o banco de dados e garante que as informações sejam processadas corretamente.
* **Banco de Dados:** Foi utilizado o **PostgreSQL**, um banco de dados relacional robusto hospedado na nuvem (Render). Ele armazena de forma permanente todos os dados dos abrigos, como nome, endereço, capacidade e ocupação atual.

---

**Link do Projeto Online:** [https://projeto-enchente-front.onrender.com] 

**Link da Documentação da API (Postman):** [https://documenter.getpostman.com/view/52834905/2sBXqGs2uA]
---
**Desenvolvido por:** Ivailton Fernandes
