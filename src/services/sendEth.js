var Constant = require('./../const');
const Web3 = require("web3");
 var web3 = new Web3(new Web3.providers.HttpProvider(Constant.default.INFURA));
//var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/2bc13e3573de4156b18a4c56445071b2'));
const Tx = require('ethereumjs-tx');


var fromAddress = "Enter_from_address";
var privateKey = "Enter_Private_Key_of_from_address";
var toAddress = "Enter_to_address";
var Value = "1"; //Enter value to send

var trasctionResponse = '';

export function setTranasctionResponse(data){
       trasctionResponse = data;
       return trasctionResponse;
}

export function hi() {
    alert("Hi to Ether js");
}
export async function sendEther(fromAddress, toAddress, value, pvtkey) {

    var Value = web3.utils.toWei(value, 'ether');
    Value = parseInt(Value);
    console.log("Eth Value "+Value);

    web3.eth.defaultAccount = fromAddress;

    var gasValue = localStorage.getItem('gas-value');
    var gasPrice = gasValue ? gasValue : 1000000000;

    var gasLimit = 500000;

    await web3.eth.getTransactionCount(web3.eth.defaultAccount).then(count => {
        var rawTransaction = {
            nonce: web3.utils.toHex(count),
            gasPrice: web3.utils.toHex(gasPrice),
            gasLimit: web3.utils.toHex(gasLimit),
            to: toAddress,
            value: Value,
            from: fromAddress,
            _chainId: 0x01
        };
        sendSigned(rawTransaction, pvtkey);

    }).catch((error) => {
        console.log('Testingzzz ' + error);
    });


}

async function sendSigned(rawTransaction, key) {
    var privKey = new Buffer(key, 'hex');
    const tx = new Tx(rawTransaction);

    tx.sign(privKey);
    var serializedTx = tx.serialize().toString('hex');
    web3.eth.sendSignedTransaction('0x' + serializedTx).on('transactionHash',  (hash) => {
        console.log("My hash "+hash);
        web3.eth.getTransaction(hash).then((res)=>{
            console.log('Inside transaction response'  + res);
            setTranasctionResponse(res);
        }
           
        );
    }).catch((error) => {
        setTranasctionResponse({
            blockHash: 'abc',
            blockNumber : 'number',
            from:'Hello from',
            gas: 50000,
            gasPrice:2033,
            hash:'ddfdd33434',
            to:'to Hello'
            });
        console.log('Testing Error ' + error);
    });
}