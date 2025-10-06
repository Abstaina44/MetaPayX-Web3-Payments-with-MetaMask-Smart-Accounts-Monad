require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, MONAD_RPC_URL } = process.env;

/**
 * Hardhat configuration for deploying MetaPayX Paymaster on Monad Testnet
 */
module.exports = {
  solidity: {
    version: "0.8.17", // Match the EntryPoint & Paymaster pragma
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    monad: {
      url: MONAD_RPC_URL || "https://testnet-rpc.monad.xyz",
      chainId: 10143, // Monad Testnet chain ID
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      timeout: 60000, // increase to avoid RPC timeouts
      allowUnlimitedContractSize: true,
      httpHeaders: {
        "Content-Type": "application/json",
      },
    },
  },
  etherscan: {
    apiKey: "", // no explorer API yet for Monad
  },
};