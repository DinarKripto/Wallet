const Web3 = require("web3");
// const web3 = new Web3();
const Tx = require("ethereumjs-tx");
var Constant = require('./../const');
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    Constant.default.INFURA
  )
);
var abi = Constant.default.ABI;

var contractAddress = Constant.default.CONTRACTADDRESS;

// Get ERC20 Token contract instance
let contract = new web3.eth.Contract(abi, contractAddress);

export function hi() {
  alert("heyyyy");
}

export async function getDncBalance(address) {
  var data;
  var addressBalance = await contract.methods
    .balanceOf(address)
    .call()
    .then(balance => {
      data = balance;
    });

  var addresssBalanceInDecimals = await contract.methods
    .decimals()
    .call()
    .then(decimals => {
      data = data / 10 ** decimals;
    });

  return data;
}
