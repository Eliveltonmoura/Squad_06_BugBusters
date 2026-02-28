# 🐞 Squad 06 – BugBusters

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
git clone https://github.com/Eliveltonmoura/Squad_06_BugBusters.git
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
├── cypress/
│   └── e2e/
│       └── search.cy.js
│
├── package.json
└── README.md
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

---

## 📌 Status do Projeto

🚧 Em evolução – novos cenários de teste serão adicionados.

---