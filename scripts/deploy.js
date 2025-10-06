/**
 * @file deploy.js
 * @notice Script to deploy the Paymaster contract to the Monad Testnet.
 * 
 * This script uses Hardhat's ethers plugin to:
 *  1. Get the deployer account.
 *  2. Deploy the Paymaster contract with the correct EntryPoint address.
 *  3. Log the deployed contract address and transaction details.
 *
 * ⚠️ Before running, make sure your .env file contains:
 *   PRIVATE_KEY=0xYOUR_PRIVATE_KEY
 *   MONAD_RPC_URL=https://testnet.monad.xyz/rpc
 */

const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying Paymaster to Monad Testnet...");

  // Get the deployer wallet (the account that will deploy the contract)
  const [deployer] = await hre.ethers.getSigners();

  console.log(" Deployer address:", deployer.address);

  // 2️⃣ Choose the EntryPoint contract address (ERC-4337 compatible)
  // For Monad, use the latest known EntryPoint v0.7 address
  const ENTRY_POINT = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";

  // 3️⃣ Compile & get the Paymaster contract factory
  const Paymaster = await hre.ethers.getContractFactory("Paymaster");

  console.log("⏳ Deploying Paymaster contract...");

  // 4️⃣ Deploy the contract with EntryPoint as constructor argument
  const paymaster = await Paymaster.deploy(ENTRY_POINT);

  // 5️⃣ Wait until the deployment is mined
  await paymaster.waitForDeployment();

  // 6️⃣ Log deployment info
  const deployedAddress = await paymaster.getAddress();
  console.log("✅ Paymaster successfully deployed!");
  console.log("📜 Contract address:", deployedAddress);
  console.log("🔗 Transaction hash:", paymaster.deploymentTransaction().hash);

  // Optional: Save the address to a file for frontend integration
  // You can uncomment this if needed.
  /*
  const fs = require("fs");
  fs.writeFileSync(
    "deployedAddress.txt",
    `Paymaster: ${deployedAddress}\nDeployed by: ${deployer.address}\n`
  );
  console.log(" Deployment info saved to deployedAddress.txt");
  */
}

// Run and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });