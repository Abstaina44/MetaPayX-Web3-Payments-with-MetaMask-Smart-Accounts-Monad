import MetaMaskSDK from "@metamask/sdk";
import { ethers } from "ethers";
import { initSmartAccount } from "../lib/smartAccountClient.js";

let client = null;
let account = null;

async function connectWallet() {
  try {
    const MMSDK = new MetaMaskSDK({
      dappMetadata: { name: "MetaPayX", url: window.location.href },
    });

    const ethereum = MMSDK.getProvider();
    if (!ethereum) throw new Error("MetaMask provider not found");

    // Request account access
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    account = accounts[0];

    // Initialize smart account
    client = await initSmartAccount(ethereum);

    document.getElementById("status").innerText = `Connected: ${account}`;
    document.getElementById("connectBtn").style.display = "none";
    document.getElementById("sendBtn").style.display = "inline-block";
  } catch (err) {
    console.error("Connection failed:", err);
    alert("MetaMask connection failed. Please try again.");
  }
}

async function sendTransaction() {
  if (!client) {
    alert("Please connect your wallet first.");
    return;
  }

  try {
    const tx = await client.sendTransaction({
      to: "0x000000000000000000000000000000000000dead",
      value: ethers.parseEther("0.001"),
    });
    console.log("Transaction:", tx);
    alert("Transaction sent ✅");
  } catch (err) {
    console.error("Transaction failed:", err);
    alert("Transaction failed ❌");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("connectBtn").addEventListener("click", connectWallet);
  document.getElementById("sendBtn").addEventListener("click", sendTransaction);
});
