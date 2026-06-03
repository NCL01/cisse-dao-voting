let yesVotes = 0;
let noVotes = 0;

function voteYes() {
  yesVotes++;
  document.getElementById("yes").innerText = yesVotes;
}

function voteNo() {
  noVotes++;
  document.getElementById("no").innerText = noVotes;
}
function connectWallet() {
  document.getElementById("wallet").innerText =
    "Wallet Connected: 0xCisse1234";
}