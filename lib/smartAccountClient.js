import { ethers } from "ethers";

export async function initSmartAccount(ethereum) {
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = await provider.getSigner();

  return {
    address: await signer.getAddress(),
    provider,
    signer,
    sendTransaction: async (tx) => {
      const txResponse = await signer.sendTransaction(tx);
      return await txResponse.wait();
    },
  };
}