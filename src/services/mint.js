const Web3 = require("web3");
var Constant = require('./../const');
// const web3 = new Web3();
const Tx = require("ethereumjs-tx");

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    Constant.default.INFURA
  )
);

var abi = Constant.default.ABI;

var contractAddress = Constant.default.CONTRACTADDRESS;
var contract = new web3.eth.Contract(abi, contractAddress);


var txHash;
var fromAddress;

export function hi() {
  alert("Hi to everyOne");
}

var data;
var gasPrice;
var gasLimit;
var privateKey;

export function getAddressAndTokenValues(toAddress, tokenValue) {
  tokenValue = ""+tokenValue;
  tokenValue = web3.utils.toWei(tokenValue, 'ether');
 
  data = contract.methods.MinterFunction(toAddress, tokenValue).encodeABI();
  return data;
}

var gasValue = localStorage.getItem('gas-value');
var gasPrice = gasValue ? gasValue : 1000000000;
var gasLimit = 500000;
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
        gasPrice: web3.utils.toHex(gasPrice),
        gasLimit: web3.utils.toHex(gasLimit),
        to: contractAddress,
        data: data,
        from: fromAddress,
        _chainId: 0x01
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
    });
}

export async function trxHash() {
  return txHash;
}
