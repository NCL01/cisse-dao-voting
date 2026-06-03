async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const account = accounts[0];

      document.getElementById("wallet").innerText =
        "Wallet Connected: " + account;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("MetaMask not detected. Please install MetaMask.");
  }
}