<style scoped>
.bg-contract {
  margin: 1.5rem 2rem !important;
  background-color: #262c3b;
  -webkit-box-shadow: 16px 16px 47px 2px rgba(0, 0, 0, 0.07);
  box-shadow: 16px 16px 47px 2px rgba(0, 0, 0, 0.07);
  padding: 1.5rem 2rem;
  min-height: 1.5rem;
  margin: 1rem auto;
  position: relative !important;
}

.bg-contract1 {
  margin: 1.5rem 2rem !important;
  /*background-color: #262c3b;*/
  -webkit-box-shadow: 16px 16px 47px 2px rgba(0, 0, 0, 0.07);
  box-shadow: 16px 16px 47px 2px rgba(0, 0, 0, 0.07);
  padding: 1.5rem 2rem;
  min-height: 1.5rem;
  margin: 1rem auto;
  position: relative !important;
}

input,
select,
textarea,
button {
  border-radius: 0px;
  height: 40px;
}

.form-group label {
  font-size: 16px;
}

textarea {
  height: 150px;
}

.container.text-left {
  padding-bottom: 60px;
}
</style>
<template>
  <div>
    <div class="content m-t-40">
      <div class="container text-left bg-contract">
        <div class="col-md-12 col-md-offset-2">
          <div class="row">
            <div class="col-md-8">
              <div class="alert alert-danger" v-if="txError">
                <strong>Transaction Failed :</strong>
                {{txError}}
              </div>

              <div id="trxResponse" v-if="txResposne">
                <table class="table">
                  <thead>
                    <tr>
                      <th>TXN HASH : {{txResposne.hash}}</th>
                    </tr>
                    <tr>
                      <th>STATUS : Pending</th>
                    </tr>
                    <tr>
                      <th>BLOCK : {{txResposne.blockHash}}</th>
                    </tr>
                    <tr>
                      <th>FROM : {{txResposne.from}}</th>
                    </tr>
                    <tr>
                      <th>TO : {{txResposne.to}}</th>
                    </tr>
                    <tr>
                      <th>VALUE : {{txResposne.value/1000000000000000000}} ETH</th>
                    </tr>
                    <tr>
                      <th>GAS FEE : {{txResposne.gas}}</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <div class="col-md-8">
              <div class="tab-content">
                <div id="home" class="tab-pane fade in active">
                  <div class="tab-content">
                    <h1 class="title-eth m-t-10 text-left">Send ETHER</h1>

                    <div id="Mintt" class="tab-pane active">
                      <br />
                      <form
                        action="#"
                        data-parsley-validate
                        novalidate="novalidate"
                        @submit.prevent="getValues"
                      >
                        <div class="form-group">
                          <label>Recipient Address</label>
                          <input
                            type="text"
                            id="target-field"
                            placeholder="Address"
                            required="required"
                            v-model="address"
                            data-parsley-id="8"
                            class="form-control"
                          />

                          <input type="button" class="paste" value="Paste" onclick="paste()" />
                        </div>
                        <div class="form-group">
                          <label>Value</label>
                          <input
                            type="number"
                            placeholder="Amount"
                            name="recepientAmount"
                            v-model="balance"
                            data-parsley-id="8"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group text-right m-b-0">
                          <button
                            type="submit"
                            data-target="#sendToken-modal"
                            class="btn btn-default waves-effect waves-light"
                          >Generate Transaction</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div v-if="sendTokenTxHash">
                    <h2>Save your hash</h2>
                    <p style="color:white;word-break: break-all;">{{ sendTokenTxHash }}</p>
                  </div>
                </div>
                <div id="menu1" class="tab-pane fade">
                  <div class="tab-content">
                    <div id="menu11" class="tab-pane active">
                      <br />
                      <form
                        action="#"
                        data-parsley-validate
                        novalidate="novalidate"
                        @submit.prevent="getTokenValue"
                      >
                        <div class="form-group">
                          <label>Value</label>
                          <input
                            type="number"
                            placeholder="Amount"
                            v-model="burnTokenValue"
                            data-parsley-id="8"
                            class="form-control"
                          />
                        </div>
                        <!--<p style="color:white;"> {{ burnTokenTxHash}}</p>-->
                        <div class="form-group text-right m-b-0">
                          <button
                            type="submit"
                            data-target="#sendToken-modal"
                            class="btn btn-default waves-effect waves-light"
                          >Generate Transaction</button>
                        </div>
                      </form>
                    </div>
                    <div v-if="burnTokenTxHash">
                      <h2>Save your hash</h2>
                      <p style="color:white;word-break: break-all;">{{ burnTokenTxHash }}</p>
                    </div>
                  </div>
                </div>
                <div id="menu2" class="tab-pane fade">
                  <div class="tab-content">
                    <div id="menu22" class="tab-pane active">
                      <br />
                      <ul style="    color: #e5e5e6;">
                        <li>This functionality is for the Admin of DNC Smart Contract only</li>
                        <li>
                          <strong>NOTE</strong>: Check the existing total supply of the DNC before making any transaction
                        </li>
                        <li>Verify the transaction from the Explorer by using the transaction hash provided after the transaction.</li>
                        <li>
                          Current status of the contract is avaliable on the
                          <link />
                        </li>
                      </ul>
                      <br />

                      <br />
                      <form
                        action="#"
                        data-parsley-validate
                        novalidate="novalidate"
                        @submit.prevent="getMintValues"
                      >
                        <div class="form-group">
                          <label>Recipient Address</label>
                          <input
                            type="text"
                            placeholder="Address"
                            v-model="mintAddress"
                            data-parsley-id="8"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group">
                          <label>Value</label>
                          <input
                            type="number"
                            placeholder="Amount"
                            v-model="mintBalance"
                            data-parsley-id="8"
                            class="form-control"
                          />
                        </div>
                        <!--<p style="color:white;"> {{ mintTokenTxHash}}</p>-->
                        <div class="form-group text-right m-b-0">
                          <button
                            type="submit"
                            data-target="#sendToken-modal"
                            class="btn btn-default waves-effect waves-light"
                          >Generate Transaction</button>
                        </div>
                      </form>
                    </div>
                    <div v-if="mintTokenTxHash">
                      <h2>Save your hash</h2>
                      <p style="color:white;word-break: break-all;">{{ mintTokenTxHash }}</p>
                    </div>
                  </div>
                </div>

                <div id="menu3" class="tab-pane fade">
                  <div class="tab-content">
                    <div id="menu33" class="tab-pane active">
                      <br />
                      <form
                        action="#"
                        data-parsley-validate
                        novalidate="novalidate"
                        @submit.prevent="getPauseValues"
                      >
                        <!--<p style="color:white;"> {{ pauseTokenTxHash}}</p>-->
                        <ul style="    color: #e5e5e6;">
                          <li>This functionality is for the Admin of DNC Smart Contract only</li>
                          <li>
                            <strong>NOTE</strong>: By making this transaction, all the functionality available in the contract will be paused.
                          </li>
                          <li>
                            Current status of the contract is avaliable on the
                            <link />
                          </li>
                        </ul>
                        <div class="form-group text-center m-b-0">
                          <button
                            type="submit"
                            data-target="#sendToken-modal"
                            class="btn btn-default waves-effect waves-light"
                          >Generate Transaction</button>
                        </div>
                      </form>
                    </div>
                    <div v-if="pauseTokenTxHash">
                      <h2>Save your hash</h2>
                      <p style="color:white;word-break: break-all;">{{ pauseTokenTxHash }}</p>
                    </div>
                  </div>
                </div>

                <div id="menu4" class="tab-pane fade">
                  <div class="tab-content">
                    <div id="menu44" class="tab-pane active">
                      <br />
                      <ul style="    color: #e5e5e6;">
                        <li>This functionality is for the Admin of DNC Smart Contract only</li>
                        <li>
                          <strong>NOTE</strong>: Please check the current status of contract. It will be used only the contract is in paused state.
                        </li>
                        <li>
                          Current status of the contract is avaliable on the
                          <link />
                        </li>
                      </ul>
                      <form
                        action="#"
                        data-parsley-validate
                        novalidate="novalidate"
                        @submit.prevent="getUnPauseValues"
                      >
                        <!--<p style="color:white;"> {{ unPauseTokenTxHash}}</p>-->
                        <div class="form-group text-center m-b-0">
                          <button
                            type="submit"
                            data-target="#sendToken-modal"
                            @click="step = true"
                            class="btn btn-default waves-effect waves-light"
                          >Generate Transaction</button>
                        </div>
                      </form>
                    </div>
                    <div v-if="unPauseTokenTxHash">
                      <h2>Save your hash</h2>
                      <p style="color:white;word-break: break-all;">{{ unPauseTokenTxHash }}</p>
                    </div>
                  </div>
                </div>

                <div id="menu5" class="tab-pane fade">
                  <div class="tab-content">
                    <div id="menu55" class="tab-pane active">
                      <br />
                      <ul style="    color: #e5e5e6;">
                        <li>This functionality is for the Admin of DNC Smart Contract only.</li>
                        <li>NOTE: Check the current rate of the currency.</li>
                        <li>
                          Current status of the contract is avaliable on the
                          <link />
                        </li>
                      </ul>
                      <br />
                      <form
                        action="#"
                        data-parsley-validate
                        novalidate="novalidate"
                        @submit.prevent="getUpdateTokenValue"
                      >
                        <!--<p style="color:white;"> {{ updateTokenTxHash}}</p>-->
                        <div class="form-group">
                          <label>Value</label>
                          <input
                            type="number"
                            placeholder="Amount"
                            name="balance"
                            v-model="updateTokenValue"
                            data-parsley-id="8"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group text-right m-b-0">
                          <button
                            type="submit"
                            data-target="#sendToken-modal"
                            class="btn btn-default waves-effect waves-light"
                          >Generate Transaction</button>
                        </div>
                      </form>
                    </div>
                    <div v-if="updateTokenTxHash">
                      <h2>Save your hash</h2>
                      <p style="color:white;word-break: break-all;">{{ updateTokenTxHash }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--modal start -->
    <div v-if="step === true" id="userModal">
      <div class="bg-contract1">
        <div class="p-0" style="margin-top: 15px">
          <ul class="nav nav-tabs navtab-custom nav-justified">
            <li class="active">
              <a href="#privateKey" data-toggle="tab" aria-expanded="true">
                <span>Private key</span>
              </a>
            </li>
            <li class>
              <a href="#jasonFile" data-toggle="tab" aria-expanded="false">
                <span>JSON File</span>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="privateKey" class="tab-pane active">
              <form
                action="#"
                id="getKey"
                @submit.prevent="getPrivateKey"
                data-parsley-validate
                novalidate="novalidate"
              >
                <div class="form-group">
                  <label>Enter Your Private Key</label>
                  <input
                    v-model="privateKey"
                    v-validate="{ required: true, min: 64,max:64 }"
                    name="password"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('password') }"
                    data-v-92875dbe
                    type="password"
                    placeholder
                    data-parsley-id="8"
                  />
                </div>
                <div
                  style="color:red;"
                  v-if="submitted && errors.has('password')"
                  class="invalid-feedback"
                >{{ errors.first('password') }}</div>

                <div class="form-group text-right m-b-0">
                  <button
                    type="submit"
                    class="btn btn-default waves-effect waves-light"
                  >Send Transaction</button>
                </div>
              </form>

              <div v-if="loader == true">
                <vue-simple-spinner></vue-simple-spinner>
              </div>
            </div>
            <div id="jasonFile" class="tab-pane">
              <div>
                <h4 translate="ADD_Radio_2_alt">Select Your Wallet File</h4>
                <h5 style="color:  rgb(217, 83, 79);">
                  This is
                  <u>not</u> a recommended way to access your wallet.
                </h5>
                <div class="form-group" style="color:  rgba(255, 255, 255, 0.8);">
                  Entering your private key on a website dangerous. If our website
                  is
                  compromised or you accidentally visit a different website, your
                  funds will
                  be stolen. Please consider:
                </div>
                <ul style="color: white;">
                  <li>
                    <a
                      href="https://metamask.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >MetaMask</a>
                    or
                    <a
                      href="https://wallet.trezcr.com/#/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >A Hardware Wallet</a>
                    or
                    <a
                      href="https://www.myetherwallet.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Running MEW Offline &amp; Locally</a>
                  </li>
                </ul>
                <br />
                <div v-if="jsonStep == 1" class="form-group">
                  <input id="upload" type="file" @change="onFileSelected" style="display:none" />
                  <a
                    tabindex="0"
                    type="file"
                    role="button"
                    class="btn btn-primary ng-hide"
                    id="upload_link"
                    @click="upload_link"
                    translate="ADD_Label_6_short"
                  >
                    SELECT
                    WALLET
                    FILE...
                  </a>
                  &nbsp;
                  <span style="color:#fff">{{this.fileName}}</span>
                </div>
                <div v-if="jsonStep == 2">
                  <form @submit.prevent="showLoader">
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" v-model="user.password" class="form-control" />
                      <!--<div style="color:red" v-if="submitted && errors.has('password')"-->
                      <!--class="invalid-feedback">{{ errors.first('password') }}-->
                      <!--</div>-->
                    </div>
                    <!--passWord section-->
                    <button type="submit" id="btn_password" class="btn btn-primary">
                      Enter
                      Password
                    </button>
                  </form>
                </div>
                <div v-if="loader == true">
                  <vue-simple-spinner></vue-simple-spinner>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
    </div>
    <!--modal end-->
  </div>
</template>
<script>
var sendTokens = require("./../services/sendToken");
var burnTokens = require("./../services/burnToken");
var mintTokens = require("./../services/mint");
var pauseTokens = require("./../services/pause");
var unPauseTokens = require("./../services/unpause");
var updateToken = require("./../services/updateRate");
var sendEth = require("./../services/sendEth");
var getAccountFroomJson = require("./../services/getAccountFromJson");
import router from "./../router";
import VueRouter from "vue-router";
const Web3 = require("web3");
var Constant = require("./../const");
var web3 = new Web3(new Web3.providers.HttpProvider(Constant.default.INFURA));
// var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/2bc13e3573de4156b18a4c56445071b2'));
const Tx = require("ethereumjs-tx");

export default {
  data: function() {
    return {
      //Json import file
      fileName: "",
      tabValue: "",
      //send Token
      address: "",
      fromAddress: "",
      balance: "",
      privateKey: "",
      step: false,
      submitted: false,
      //Burn Tokens
      burnTokenValue: "",
      //Mint Token
      mintAddress: "",
      mintBalance: "",
      txResposne: false,
      txError: "",

      //Update Toekn  price
      updateTokenValue: "",
      loader: false,
      //tx hash variables

      sendTokenTxHash: "",
      burnTokenTxHash: "",
      mintTokenTxHash: "",
      pauseTokenTxHash: "",
      unPauseTokenTxHash: "",
      updateTokenTxHash: "",

      //import file private key
      importPrivateKey: "",
      json_Data: "",
      jsonStep: 1,
      user: {
        password: ""
      }
    };
  },
  mounted: function() {
    this.fromAddress = this.$route.params.address;
  },
  methods: {
    getValues: function() {
      var _this = this;
      if (_this.address === "") {
        alertify.set("notifier", "position", "top-right");
        alertify.error("Address field is required");
      } else if (_this.address.substring(0, 2) != "0x") {
        alertify.set("notifier", "position", "top-right");
        alertify.error("Address field start with 0x");
      } else if (_this.address.length > 42) {
        alertify.set("notifier", "position", "top-right");
        alertify.error("Invalid Address");
      } else if (_this.address.length < 42) {
        alertify.set("notifier", "position", "top-right");
        alertify.error("Invalid Address");
      } else if (_this.balance <= 0) {
        alertify.set("notifier", "position", "top-right");
        alertify.error("Amount field is required");
      } else {
        _this.step = true;
      }
    },

    getPrivateKey: async function(e) {
      var _this = this;
      e.preventDefault();
      _this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          _this.loader = true;
          _this.sendEthereum(
            _this.fromAddress,
            _this.address,
            _this.balance,
            _this.privateKey
          );
          _this.loader = false;
          $("#Mintt").hide();
          $("#userModal").hide();
        }
      });
    },

    // get tx hash when importing file to get private key
    getimportsendTokenTxHash: async function() {
      var _this = this;
      var response;

      response = await sendTokens
        .getTransactionCount(_this.importPrivateKey)
        .then(res => {
          response = res;
        })
        .catch(e => {});
    },

    //Import file
    upload_link(e) {
      e.preventDefault();
      $("#upload:hidden").trigger("click");
    },
    onFileSelected(e) {
      e.preventDefault();
      var _this = this;
      this.fileName = e.target.files[0].name;
      var newFileName = this.fileName.split(".");
      // console.log('New File name zzzzzzzzzzzzzzzz' + newFileName[1].length);

      if (newFileName[1].length > 46 || newFileName[1].length < 46) {
        alertify.set("notifier", "position", "top-right");
        alertify.error("Invalid file format");
        this.fileName = "";
        return false;
      }
      // console.log('File Name ' + this.fileName);

      // Reference to the DOM input element
      var input = e.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job

        reader.onload = e => {
          _this.json_Data = e.target.result;

          _this.json_Data = JSON.parse(_this.json_Data);
          _this.jsonStep = 2;
        };
        // Start the reader job - read file
        reader.readAsText(input.files[0]);
      }
    },
    showLoader: function(e) {
      document.getElementById("btn_password").disabled = true;
      e.preventDefault();
      var _this = this;

      if (_this.user.password.length < 9) {
        alertify.set("notifier", "position", "top-right");
        alertify.error("Password must be greater than 0 or equal to 9");
        _this.user.password = "";

        document.getElementById("btn_password").disabled = false;

        return;
      }
      this.loader = true;
      _this.handlePassword(e);
    },
    getAccountFromJson: async function() {
      var _this = this;
      var account = await web3.eth.accounts.decrypt(
        _this.json_Data,
        _this.user.password
      );
      return account;
    },
    sendEthereum: async function(fromAddress, toAddress, value, pvtkey) {
      var _this = this;
      var Value = web3.utils.toWei(value, "ether");
      Value = parseInt(Value);

      web3.eth.defaultAccount = fromAddress;

      var gasValue = localStorage.getItem("gas-value");
      var gasPrice = gasValue ? gasValue : 1000000000;

      var gasLimit = 500000;

      await web3.eth
        .getTransactionCount(web3.eth.defaultAccount)
        .then(count => {
          var rawTransaction = {
            nonce: web3.utils.toHex(count),
            gasPrice: web3.utils.toHex(gasPrice),
            gasLimit: web3.utils.toHex(gasLimit),
            to: toAddress,
            value: Value,
            from: fromAddress,
            _chainId: 0x01
          };
          _this.sendSignedEthereum(rawTransaction, pvtkey);
        })
        .catch(error => {
          _this.txError = error;
        });
    },
    sendSignedEthereum: async function(rawTransaction, key) {
      var _this = this;
      var privKey = new Buffer(key, "hex");
      const tx = new Tx(rawTransaction);

      tx.sign(privKey);
      var serializedTx = tx.serialize().toString("hex");
      web3.eth
        .sendSignedTransaction("0x" + serializedTx)
        .on("transactionHash", hash => {
          web3.eth.getTransaction(hash).then(res => {
            _this.txResposne = res;
          });
        })
        .catch(error => {
          error = error.toString().split(":");
          _this.txError = error[2];
        });
    },
    handlePassword: async function(e) {
      var _this = this;
      e.preventDefault();
      var password = _this.user.password;
      var jsonBackResposne = false;
      var jsonResponseError = false;

      setTimeout(function() {
        _this
          .getAccountFromJson()
          .then(res => {
            _this.importPrivateKey = res.privateKey.substring(2);
            jsonBackResposne = true;
            if (jsonBackResposne) {
              jsonBackResposne = false;
              var fromAddress = res.address;
              var toAddress = _this.address;
              var userKey = _this.importPrivateKey;
              var amount = _this.balance;

              _this.sendEthereum(fromAddress, toAddress, amount, userKey);

              _this.loader = false;
              $("#Mintt").hide();
              $("#userModal").hide();

              document.getElementById("btn_password").disabled = false;
            }
          })
          .catch(e => {
            jsonResponseError = true;
            if (jsonResponseError) {
              alertify.set("notifier", "position", "top-right");
              alertify.error("Possibly Wrong Password");
              _this.user.password = "";
              _this.loader = false;

              jsonResponseError = false;

              document.getElementById("btn_password").disabled = false;
              return;
            }
          });
      }, 500);
    }
  }
};
</script>
