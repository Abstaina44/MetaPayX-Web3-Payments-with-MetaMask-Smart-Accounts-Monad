// Ensure the code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("connectButton").onclick = connectWallet;
    document.getElementById("sendButton").onclick = sendPayment;
});

async function connectWallet() {
    // ✅ Access global MetaMaskSDK from CDN
    const MMSDK = new window.MetaMaskSDK({
        dappMetadata: { name: "MetaPayX", url: window.location.href },
    });

    const ethereum = MMSDK.getProvider();

    // Check if MetaMask is installed
    if (!ethereum) {
        alert("❌ MetaMask not detected! Please install it.");
        return;
    }

    // Request account access
    try {
        await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
        console.error("Error requesting accounts:", error);
        alert("❌ Access to accounts denied!");
        return;
    }

    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const account = await signer.getAddress();
    console.log("✅ Connected:", account);
    alert(`Wallet connected: ${account}`);
    document.getElementById("sendButton").style.display = "inline-block";

    // ✅ Auto switch to Monad Testnet
    const MONAD_CHAIN_ID = "0x138D"; // 5005 in hexadecimal
    try {
        await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: MONAD_CHAIN_ID }],
        });
    } catch (switchError) {
        // Handle error for chain not found
        if (switchError.code === 4902) {
            // Chain not added, request to add it
            try {
                await ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: MONAD_CHAIN_ID,
                            chainName: "Monad Testnet",
                            rpcUrls: ["https://testnet-rpc.monad.xyz"],
                            nativeCurrency: { name: "MON", symbol: "MON", decimals: 18 },
                            blockExplorerUrls: ["https://testnet.monadexplorer.com"],
                        },
                    ],
                });
            } catch (addError) {
                console.error("Error adding chain:", addError);
                alert("❌ Failed to add Monad Testnet. Please check the console.");
            }
        } else {
            console.error("Error switching chain:", switchError);
            alert("❌ Failed to switch to Monad Testnet. Please check the console.");
        }
    }
}

async function sendPayment() {
    const to = "0x000000000000000000000000000000000000dead";
    const amount = "0.001";

    // Ensure the input values are valid (you can enhance this validation)
    if (!to || !amount) {
        alert("❌ Please provide a valid recipient address and amount.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ to, amount }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("🚀 Transaction sent:", data.hash);
        alert(`Transaction sent!\nHash: ${data.hash}`);
    } catch (err) {
        console.error("Error:", err);
        alert("❌ Transaction failed — check backend or CORS settings.");
    }
}