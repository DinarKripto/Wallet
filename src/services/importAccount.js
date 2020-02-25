var Web3 = require("web3");
var Constant = require('./../const');

var web3 = new Web3(
  new Web3.providers.HttpProvider(
    Constant.default.INFURA
  )
);

export function getImportAccountDetail(accountAddress) {
  var import_account = web3.eth.accounts.privateKeyToAccount(accountAddress);

  return import_account;
}
