const Web3 = require("web3");
// const web3 = new Web3();
var Constant = require('./../const');
const Tx = require("ethereumjs-tx");

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    Constant.default.INFURA
  )
);

import router from "./../router";
var abi =Constant.default.ABI;

var contractAddress = Constant.default.CONTRACTADDRESS;
var contract = new web3.eth.Contract(abi, contractAddress);

export function hi() {
  alert("Hi to everyOne");
}

var data;
var gasPrice;
var gasLimit;
var privateKey;
var fromAddress;

var gasValue = localStorage.getItem('gas-value');
gasPrice = gasValue ? gasValue : 1000000000;
gasLimit = 500000;

var txHash;

export async function sendDNCToken(fromAddress ,toAddress,tokenValue,userKey){
 let tokenData = await getAddressAndTokenValues(toAddress,tokenValue);
 web3.eth
    .getTransactionCount(web3.eth.defaultAccount)
    .then(count => {
      var rawTransaction = {
        nonce: web3.utils.toHex(count),
        gasPrice: web3.utils.toHex(1500000000),
        gasLimit: web3.utils.toHex(gasLimit),
        to: contractAddress,
        data: tokenData,
        from: fromAddress,
        _chainId: 0x03
      };

      const tx = new Tx(rawTransaction);
      console.log("Trasnaction objecct "+tx);

      tx.sign(privKey);
      var serializedTx = tx.serialize().toString("hex");
       console.log("Serialized " + serializedTx);

      var res = web3.eth.sendSignedTransaction("0x" + serializedTx, function(
        error,
        transactionHash
      ) {
        if (!error) {
          console.log("Transacction hash ::" + transactionHash);
          txHash = transactionHash;
          console.log("Txx Hashhh" + txHash);
        } else {
          console.log("Error is " + error);
          txHash = error;
        }
      });

      return txHash;
    })
    .catch(error => {
      console.log(error);
      return error;
    });


 

 

}
export function getAddressAndTokenValues(toAddress, tokenValue) {
  data = contract.methods.transfer(toAddress, tokenValue).encodeABI();
  return data;
}

var Wallet = require("ethereumjs-wallet");

export async function getTransactionCount(privateKey) {
  var privKey = new Buffer(privateKey, "hex");
  var wallet = Wallet.fromPrivateKey(privKey);
  var unlocked = wallet.toV3String("123456789");

  var unlooked_json = JSON.parse(unlocked);
  var add_0x = "0x";
  fromAddress = add_0x + unlooked_json.address;
  web3.eth.defaultAccount = fromAddress;

  web3.eth
    .getTransactionCount(web3.eth.defaultAccount)
    .then(count => {
      var rawTransaction = {
        nonce: web3.utils.toHex(count),
        gasPrice: web3.utils.toHex(1500000000),
        gasLimit: web3.utils.toHex(gasLimit),
        to: contractAddress,
        data: data,
        from: fromAddress,
        _chainId: 0x03
      };

      const tx = new Tx(rawTransaction);

      tx.sign(privKey);
      var serializedTx = tx.serialize().toString("hex");

      var res = web3.eth.sendSignedTransaction("0x" + serializedTx, function(
        error,
        transactionHash
      ) {
        if (!error) {
          txHash = transactionHash;
        } else {
          txHash = error;
        }
      });

      return txHash;

    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export async function trxHash() {
  return txHash;
}

export async function transactionStatus(txStatus) {
  var data;

  await web3.eth.getTransaction(txStatus).then(res => {
    
    data = res;
  });

  return JSON.stringify(data);
}
