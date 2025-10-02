

# 🛡️ MetaPayX

**Seamless Web3 Payments with MetaMask Smart Accounts + Monad**

MetaPayX is a developer blueprint for **next-gen decentralized payments**.
Built for the **MetaMask Smart Accounts x Monad Dev Cook-Off**, it integrates **ERC-4337 Smart Accounts** with the **high-performance Monad blockchain** to deliver a smooth, **Web2-like checkout experience** in Web3.

---

## ✨ Features

* 🔑 **Smart Accounts (ERC-4337):** recovery, social login, and abstraction.
* ⛽ **Gas Abstraction:** pay fees in any token or sponsor them entirely.
* 📦 **Batched Transactions:** approval + swap + payment in one step.
* ⚡ **Monad Speed:** high throughput, low latency blockchain.
* 🛒 **Developer SDK:** easy plug-in for dApps & merchants.

---

## ⚙️ Tech Stack

* **Frontend:** Next.js 13, TypeScript, Wagmi, MetaMask SDK
* **Backend:** Node.js, Express
* **Smart Contracts:** Solidity (Hardhat)
* **Blockchain:** Monad Testnet
* **Env:** dotenv for configuration

---

## 📂 Project Structure

```bash
metapayx/
│── README.md
│── contracts/
│   ├── Paymaster.sol          # Solidity Paymaster contract
│   └── hardhat.config.js      # Hardhat config for Monad
│── backend/
│   ├── server.js              # Express server for sponsored txns
│   ├── package.json
│   └── .env.example           # Backend env variables template
│── frontend/
│   ├── app/
│   │   ├── page.tsx           # Next.js main landing page
│   │   └── layout.tsx         # Next.js layout
│   ├── package.json
│   └── .env.local.example     # Frontend env variables template
```

---

## 🔧 Setup & Installation

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/metapayx.git
cd metapayx
```

### 2️⃣ Install dependencies

Frontend:

```bash
cd frontend && npm install
```

Backend:

```bash
cd backend && npm install
```

Contracts:

```bash
cd contracts && npm install
```

### 3️⃣ Configure Environment

Copy `.env.example` files and set your **Monad RPC URL** + contract addresses.

Backend (`backend/.env`):

```env
MONAD_RPC=https://monad-testnet.provider.io/v2/your-api-key
PAYMASTER_CONTRACT=0xYourPaymasterContract
```

Frontend (`frontend/.env.local`):

```env
NEXT_PUBLIC_MONAD_RPC=https://monad-testnet.provider.io/v2/your-api-key
```

---

## 🚀 Running the Project

### Start backend server (gas sponsor / relayer)

```bash
cd backend
npm run dev
```

### Start frontend (Next.js app)

```bash
cd frontend
npm run dev
```

Visit: **[http://localhost:3000](http://localhost:3000)** 🎉

---

## 📝 Usage Example

* Connect wallet via **MetaMask Smart Accounts**.
* Mint a test NFT on Monad testnet.
* Pay gas fees in stablecoin OR have them sponsored.
* Approve + swap + purchase all in a **single transaction**.

---

## 📚 Resources

* [MetaMask Smart Accounts Docs](https://support.metamask.io/configure/accounts/what-is-a-smart-account/)
* [Monad Documentation](https://docs.monad.xyz)
* [Hackathon Page](https://www.hackquest.io/hackathons/MetaMask-Smart-Accounts-x-Monad-Dev-Cook-Off)

---

## 🏆 Hackathon

Built for the **MetaMask Smart Accounts x Monad Dev Cook-Off**
🗓️ Sep 19 – Oct 20
👥 Team / Solo participation

---

## 🤝 Contributing

Pull requests are welcome! Open an issue to suggest new features or fixes.

---

## 📜 License

MIT License © 2025 MetaPayX

---

🔥 With **MetaPayX**, developers can build **consumer-ready Web3 payment apps** that feel as smooth as Web2.

Made with 💜 by 0xe.eph for monad.

---
