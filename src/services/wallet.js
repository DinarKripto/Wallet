var Web3 = require("web3");
var Constant = require('./../const');
var web3 = new Web3(
  new Web3.providers.HttpProvider(
    Constant.default.INFURA
  )
);
var Wallet = require("ethereumjs-wallet");
var Web3EthAccounts = require("web3-eth-accounts");

var DncTokenBalance = require("./../services/getTokenBalance");

export var addresses = [];
//Eth Address Balance
export var addressesBlancess = [];
//DNC Address Baalance
export var dncAddressesBlancess = [];

// Import Address Block Data 
export var blocksData = [];

export function helloWorld() {
  alert("Hello World");
}

export function initializeWalletProvider() {
  return new Web3(
    new Web3.providers.HttpProvider(
      Constant.default.INFURA
    )
  );
}

export function initializeWeb3EthAccount() {
  return new Web3EthAccounts(
    Constant.default.INFURA
  );
}

export async function getBalance(address) {
  var data;
  var addressBalance = await web3.eth.getBalance(address).then(res => {
    data = res;
  });
  var newBalance = web3.utils.fromWei(data, "ether");
  return newBalance;
}

export function unlockAccount(privateKey, password) {
  var userPrivateKey = privateKey;
  if (userPrivateKey.length < 64 || userPrivateKey.length > 64) {
    return false;
  }

  var key = Buffer.from(userPrivateKey, "hex");

  var wallet = Wallet.fromPrivateKey(key);
  var unlocked = wallet.toV3String(password);
  var unlooked_json = JSON.parse(unlocked);
  return unlooked_json;
}
