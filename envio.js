import fetch from "node-fetch";

// replace this with your Envio HyperSync GraphQL endpoint
// For now, i will use the public one to test:
const HYPERSYNC_URL = "https://api.envio.dev/v1/graphql";

async function getTransactions() {
  const query = `
    query {
      transfers(first: 5) {
        id
        from
        to
        value
      }
    }
  `;

  try {
    const response = await fetch(HYPERSYNC_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log(" Envio HyperSync Data:", data);
  } catch (error) {
    console.error("Error fetching from Envio:", error);
  }
}

// Run the function when file executes
getTransactions();

