const backendUrl = "http://localhost:5000"; // your backend API

// Function to check balance
async function checkBalance() {
  const res = await fetch(`${backendUrl}/api/balance`);
  const data = await res.json();
  document.getElementById("balance").innerText = `
    Address: ${data.address}
    Balance: ${data.balance} ETH
  `;
}

// Function to send transaction
async function sendTransaction() {
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;

  const res = await fetch(`${backendUrl}/api/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to, amount }),
  });

  const data = await res.json();
  if (data.success) {
    alert(\`✅ Transaction sent! Hash: \${data.hash}\`);
  } else {
    alert(\`❌ Error: \${data.error}\`);
  }
}
