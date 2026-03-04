# 🐞 Squad 06 – BugBusters

![Demonstração do Teste](cypress/images/busca.cy.js.jpg)

## 🎬 Demonstração em Ação

![Teste em Execução](cypress/images/busca.cy.js.gif)

Projeto desenvolvido com foco em **Qualidade de Software (QA)**, utilizando **testes automatizados de interface web (UI)** para validar funcionalidades da plataforma **The Movie Database**.

---

## 📌 Objetivo

Este projeto tem como objetivo aplicar conceitos de:


* ✅ Automação de testes de interface (UI)

A funcionalidade atualmente validada é:

🔎 **Busca de filmes na interface web do TMDB**

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* JavaScript
* Cypress
* npm

---

## 🚀 Como Executar o Projeto em Outra Máquina

### 🔧 1. Pré-requisitos

Certifique-se de ter instalado:

* Git
* Node.js (versão 14 ou superior)
* npm

Verifique no terminal:

```bash
node -v
npm -v
git --version
```

---

### 📥 2. Clonar o Repositório

```bash
git clone https://github.com/weberfern/Quality-Assurance---Bootcamp-Atlantico-Avanti.git
cd Squad_06_BugBusters
```

---

### 📦 3. Instalar as Dependências

```bash
npm install
```

---

### ▶️ 4. Executar os Testes

Se estiver usando Cypress:

```bash
npx cypress open
```

ou modo headless:

```bash
npx cypress run
```

---

## 🧪 Cenários de Teste Implementados

### ✅ CT-SEARCH-001 – Buscar filme existente

* Acessar a página inicial
* Inserir nome de filme válido
* Validar exibição nos resultados

### ❌ CT-SEARCH-002 – Buscar filme inexistente

* Inserir termo inválido
* Validar mensagem ou ausência de resultados

### ⚠️ CT-SEARCH-003 – Campo de busca vazio

* Submeter campo sem texto
* Validar comportamento do sistema

---

## 📂 Estrutura do Projeto

```
Squad_06_BugBusters/
│
├── cypress.config.js
├── package.json
├── readme.md
│
└── cypress/
    ├── e2e/
    │   ├── ct-search-001.cy.js
    │   ├── ct-search-002.cy.js
    │   └── ct-search-003.cy.js
    │
    ├── fixtures/
    │   └── example.json
    │
    ├── images/
    │
    └── support/
        ├── commands.js
        └── e2e.js
```

---

## 🎯 Tipo de Teste

* Teste Funcional
* Teste de Interface (UI)
* Teste Automatizado

---

## 📊 Ambiente de Teste

* Navegador: Chrome
* Sistema Operacional: Windows
* Ferramenta de Automação: Cypress

---

## 👥 Equipe

**Squad 06 – BugBusters**
- Antonio Elivelton Moura da Silva
- Fernanda Francisconi Schmidt
- Luan de Souza Martins
- Mariene Silva da Cruz Santos
- Nycole Maria Costa Rodrigues
- Rafaela Cristina de Souza Nascimento
- Samayra Damasceno Sales
- Weber Fernandes da Silva
- Yuri Lima Rebouças de Oliveira

---

## 📌 Status do Projeto

🚧 Em evolução – novos cenários de teste serão adicionados.

---