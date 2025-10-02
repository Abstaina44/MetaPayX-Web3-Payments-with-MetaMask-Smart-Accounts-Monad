# MetaPayX – Web3 Payments with MetaMask Smart Accounts + Monad

MetaPayX is a hackathon project for the **MetaMask Smart Accounts x Monad Dev Cook-Off**.  
It enables **gasless, user-friendly payments** using MetaMask Smart Accounts on the Monad blockchain.  

📂 Repo Structure 

metapayx/
│── README.md
│── contracts/
│   └── Paymaster.sol
│   └── hardhat.config.js
│── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│── frontend/
│   ├── app/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── package.json
│   └── .env.local.example

---

## 🚀 Features
- 🔑 Smart Accounts with recovery & social login
- ⛽ Gasless transactions via Paymaster
- 🛒 Stablecoin payments
- 📦 One-click checkout for dApps and e-commerce

---

## 🏗️ Architecture
- **Frontend:** Next.js + Wagmi + MetaMask SDK
- **Backend:** Node.js + Express
- **Smart Contracts:** Solidity (deployed on Monad testnet)
- **Blockchain:** Monad

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (>=18)
- Yarn or npm
- MetaMask wallet with Smart Accounts enabled
- Monad testnet RPC

### Clone the repo
```bash
git clone https://github.com/your-username/metapayx.git
cd metapayx 

Install dependencies

yarn install
# or
npm install

Environment variables

Create a .env file in root:

NEXT_PUBLIC_MONAD_RPC=https://testnet-rpc.monad.xyz
PAYMASTER_CONTRACT=0xYourContractAddress 

Run frontend 

cd frontend
yarn dev


Run backend

cd backend
yarn dev

📚 Resources
MetaMask Smart Accounts Docs
Monad Docs 

🏆 Hackathon Info
Built for MetaMask x Monad Dev Cook-Off (Sep 19 – Oct 20).
Goal: build seamless, next-gen Web3 experiences with smart accounts.





