<template>
  <div>
    <div
      id="DNC-modal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
      style="display: none;"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content p-0">
          <ul class="nav nav-tabs navtab-custom nav-justified">
            <li class="active">
              <a href="#dnc-details" data-toggle="tab" aria-expanded="true">
                <span>Details</span>
              </a>
            </li>
            <li class>
              <a href="#dnc-send-transfer" data-toggle="tab" aria-expanded="false">
                <span>Send/Transfer</span>
              </a>
            </li>
            <li class>
              <a href="#dnc-mint-burn" data-toggle="tab" aria-expanded="false">
                <span>Burn</span>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="dnc-details">
              <div>
                <div class="row">
                  <div class="col-lg-4">
                    <p>
                      <img src="assets/images/icon/dinar-icon3.png" /> DinarCoin (DNC)
                    </p>
                    <ul class="list-unstyled">
                      <li>
                        <i class="fa fa-desktop" aria-hidden="true"></i> Website
                      </li>
                      <li>
                        <i class="fa fa-search" aria-hidden="true"></i> Explorer
                      </li>
                      <li>
                        <i class="fa fa-tasks" aria-hidden="true"></i> Whitepapper
                      </li>

                      <li>
                        <i class="fa fa-tags" aria-hidden="true"></i>

                        <small>
                          <span class="label label-success" style="margin-left:5px;">Mineable</span>
                        </small>

                        <small style="margin-left: 10px;">
                          <span class="label label-success">Currency</span>
                        </small>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-8">
                    <p>Market Free</p>
                    <h3>$ 588.15 (1.37 %)</h3>
                    <div class="table-responsive">
                      <table class="table m-0">
                        <thead>
                          <tr>
                            <th>Market Cap</th>
                            <th>Volume(24H)</th>
                            <th>Available Supply</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>$ 00,000&nbsp;</td>
                            <td>$ 00,000</td>
                            <td>00,000 DNC</td>
                          </tr>
                          <tr>
                            <td>00,000 BTC</td>
                            <td>00,000 BTC</td>
                            <td>&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <br />
                    <ul class="nav nav-tabs navtab-custom">
                      <li class="active">
                        <a href="#dinar_chart2" data-toggle="tab" aria-expanded="true">
                          <span class="visible-xs">
                            <i class="fa fa-list-alt" aria-hidden="true"></i>
                          </span>
                          <span class="hidden-xs">Markets</span>
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane active" id="dinar_chart2">
                        <h3>DinarCoin Markets</h3>
                        <p>
                          <br />In Progress
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="dnc-send-transfer">
              <div v-if="!sendTokenTxHash">
                <div class="tab-content">
                  <div id="Mint" class="tab-pane active">
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
                          placeholder="Address"
                          required="required"
                          data-parsley-id="8"
                          class="form-control"
                          v-model="address"
                        />
                      </div>
                      <div class="form-group">
                        <label>Value</label>
                        <input
                          type="number"
                          placeholder="Amount"
                          required="required"
                          data-parsley-id="8"
                          class="form-control"
                          v-model="balance"
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
              </div>
              <div v-if="sendTokenTxHash">
                <div class="form-group" style="margin-top: 20px;">
                  <label>Save your hash</label>
                  <input type="text" v-model="sendTokenTxHash" class="form-control" />
                </div>
              </div>
            </div>

            <div class="tab-pane" id="dnc-mint-burn">
              <p></p>

              <div class="row">
                <div class="col-lg-12">
                  <ul class="nav nav-tabs navtab-custom">
                    <li class="active">
                      <!--<a href="#Mint" data-toggle="tab" aria-expanded="false">-->
                      <!--<span class="visible-xs"><i class="fa fa-home"></i></span>-->
                      <!--<span class="hidden-xs">Mint</span>-->
                      <!--</a>-->
                      <!--</li>-->
                    </li>
                    <li class>
                      <a href="#Burn" data-toggle="tab" aria-expanded="false">
                        <span class="visible-xs">
                          <i class="fa fa-user"></i>
                        </span>
                        <span class="hidden-xs">Burn</span>
                      </a>
                    </li>
                  </ul>
                  <div v-if="!burnTokenTxHash">
                    <div class="tab-content">
                      <div id="Menu11" class="tab-pane active">
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
                              required="required"
                              data-parsley-id="8"
                              class="form-control"
                              v-model="burnTokenValue"
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
                  </div>
                </div>
              </div>
              <p></p>
              <div v-if="burnTokenTxHash">
                <div class="form-group" style="margin-top: 20px;">
                  <label>Save your hash</label>
                  <input type="text" v-model="burnTokenTxHash" class="form-control" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
              <!--<button type="button" class="btn btn-primary waves-effect waves-light" @click="step = 2">Save changes</button>-->
            </div>
            <!--modal start -->
            <div v-if="step === true">
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
                      data-v-92875dbe
                      action="#"
                      @submit.prevent="getPrivateKey"
                      data-parsley-validate
                      novalidate="novalidate"
                    >
                      <div data-v-92875dbe class="form-group">
                        <label data-v-92875dbe>Enter Your Private Key</label>
                        <input
                          v-model="privateKey

"
                          v-validate="{ required: true, min: 64 }"
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

                      <div data-v-92875dbe class="form-group text-right m-b-0">
                        <button
                          type="submit"
                          data-v-92875dbe
                          data-toggle="modal"
                          data-target="#sendToken-modal"
                          class="btn btn-default waves-effect waves-light"
                        >Send Transaction</button>
                      </div>
                    </form>
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
                          <a href target="_blank" rel="noopener noreferrer">MetaMask</a>
                          or
                          <a
                            href
                            target="_blank"
                            rel="noopener noreferrer"
                          >A Hardware Wallet</a>
                          or
                          <a
                            href
                            target="_blank"
                            rel="noopener noreferrer"
                          >Running MEW Offline &amp; Locally</a>
                        </li>
                        <li>
                          <a
                            href
                            target="_blank"
                            rel="noopener noreferrer"
                          >Learning How to Protect Yourself and Your Funds</a>
                        </li>
                      </ul>
                      <br />
                      <!--<div class="form-group">-->

                      <!--<input id="upload" type="file" @change="onFileSelected"-->
                      <!--style="display:none"/>-->
                      <!--<a tabindex="0" type="file" role="button"-->
                      <!--class="btn btn-primary  ng-hide"-->
                      <!--id="upload_link" @click="upload_link"-->
                      <!--translate="ADD_Label_6_short">SELECT-->
                      <!--WALLET-->
                      <!--FILE...-->

                      <!--</a>-->
                      <!--&nbsp;-->
                      <!--<span style="color:#fff">{{this.fileName}}</span>-->

                      <!--</div>-->

                      <div v-if="jsonStep == 1" class="form-group">
                        <input
                          id="upload"
                          type="file"
                          @change="onFileSelected"
                          style="display:none"
                        />
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
                          </div>
                          <!--passWord section-->
                          <button type="submit" id="btn_password" class="btn btn-primary">
                            Enter
                            Password
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div v-if="loader == true">
                    <vue-simple-spinner></vue-simple-spinner>
                  </div>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!--modal end-->
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>
<script>
var sendTokens = require("./../../services/sendToken");
var burnTokens = require("./../../services/burnToken");
var getAccountFroomJson = require("./../../services/getAccountFromJson");

var Web3 = require("web3");
var Constant = require("./../../const");
var web3 = new Web3(new Web3.providers.HttpProvider(Constant.default.INFURA));

export default {
  data() {
    return {
      //Json import file
      fileName: "",
      tabValue: "",
      //send Tokens
      address: "",
      balance: "",
      privateKey: "",
      step: false,
      //Burn Tokens
      burnTokenValue: "",
      submitted: false,

      //tx hash variables

      sendTokenTxHash: "",
      burnTokenTxHash: "",

      //import file private key
      importPrivateKey: "",
      loader: false,
      json_Data: "",
      jsonStep: 1,
      user: {
        password: ""
      }
    };
  },
  methods: {
    // get tx hash when importing file to get private key
    getimportsendTokenTxHash: async function() {
      var _this = this;

      // console.log("under Import file private key :" + _this.importPrivateKey);
      await sendTokens.getTransactionCount(_this.importPrivateKey);
    },
    getimportburnTokenTxHash: async function() {
      var _this = this;
      await burnTokens.getTransactionCount(_this.importPrivateKey);
    },
    //Import file
    upload_link(e) {
      e.preventDefault();
      $("#upload:hidden").trigger("click");
    },

    onFileSelected(e) {
      e.preventDefault();
      //    console.log(e);
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
    handlePassword: async function(e) {
      // console.log("Button  zzzzzzzzzzzzzzzzzz");
      var _this = this;
      e.preventDefault();
      // console.log('two');
      // json_Data = json_Data;
      // console.log("Json resposne is  " + _this.json_Data);

      var password = _this.user.password;
      var jsonBackResposne = false;
      var jsonResponseError = false;

      setTimeout(function() {
        _this
          .getAccountFromJson()
          .then(res => {
            // console.log("Bacck json resposne " + JSON.stringify(res));
            // console.log("Bacck json resposne of private key " + res.privateKey);
            _this.importPrivateKey = res.privateKey.substring(2);
            // console.log("Import file private key :" + _this.importPrivateKey);
            jsonBackResposne = true;
            if (jsonBackResposne) {
              _this.listing();
              jsonBackResposne = false;
              document.getElementById("btn_password").disabled = false;
            }
          })
          .catch(e => {
            jsonResponseError = true;
            // console.log("Error  is" +e);
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
    },
    listing: function() {
      var _this = this;

      switch (this.tabValue) {
        case "SendTokens":
          setTimeout(function() {
            setTimeout(function() {
              $("#Mintt").hide();
            }, 1000);

            // console.log('Send Token value is ' + _this.tabValue);
            _this.getimportsendTokenTxHash();
            setTimeout(function() {
              var response = sendTokens.trxHash();
              response.then(res => {
                //     console.log('Errorrrrrrrrrrrrrrrrr ' + res.split(":"));

                var sendTokenError = res.toString().split(":")[2];
                // console.log("send token tx hash  " + res.toString().split(':')[2]);
                if (sendTokenError) {
                  alertify.set("notifier", "position", "top-right");
                  alertify.error(sendTokenError);
                  _this.sendTokenTxHash = "";
                  $("#Mintt").show();
                } else {
                  _this.sendTokenTxHash = res;
                }
              });
            }, 2000);

            _this.init();
          }, 2000);
          break;
        case "Burn":
          setTimeout(function() {
            setTimeout(function() {
              $("#menu11").hide();
            }, 1000);
            // console.log('Inside burn' + _this.tabValue);
            _this.getimportburnTokenTxHash();
            setTimeout(function() {
              var response = burnTokens.trxHash();
              response.then(res => {
                // console.log("burn token tx hash  " + res);
                var burnTokenError = res.toString().split(":")[2];
                // console.log("burn token tx hash  " + res.toString().split(':')[2]);
                if (burnTokenError) {
                  alertify.set("notifier", "position", "top-right");
                  alertify.error(burnTokenError);
                  _this.burnTokenTxHash = "";
                  $("#menu11").show();
                } else {
                  _this.burnTokenTxHash = res;
                }
              });
            }, 2000);
            _this.init();
          }, 2000);
          break;

        default:
          _this.init();
          break;
      }
    },
    // Send tokens Tab
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
        alertify.error("Amount Filed is required ");
      } else {
        sendTokens.getAddressAndTokenValues(_this.address, _this.balance);
        this.step = true;
        this.tabValue = "SendTokens";
      }
    },
    getTokenValue: function() {
      var _this = this;

      if (_this.burnTokenValue <= 0) {
        alertify.set("notifier", "position", "top-right");
        alertify.error("Amount field is required ");
      } else {
        burnTokens.getTokenValues(_this.burnTokenValue);
        this.step = true;
        this.tabValue = "Burn";
      }
    },

    //get tx hash when providing prviate key from input
    getsendTokenTxHash: async function() {
      var _this = this;
      await sendTokens.getTransactionCount(_this.privateKey);
    },
    getburnTokenTxHash: async function() {
      var _this = this;
      await burnTokens.getTransactionCount(_this.privateKey);
    },

    getPrivateKey: function(e) {
      var _this = this;
      e.preventDefault();
      _this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          _this.loader = true;
          switch (this.tabValue) {
            case "SendTokens":
              setTimeout(function() {
                setTimeout(function() {
                  $("#Mintt").hide();
                }, 1000);

                // console.log('Send Token value is ' + _this.tabValue);
                _this.getsendTokenTxHash();
                setTimeout(function() {
                  var response = sendTokens.trxHash();
                  response.then(res => {
                    //     console.log('Errorrrrrrrrrrrrrrrrr ' + res.split(":"));
                    var sendTokenError = res.toString().split(":")[2];
                    // console.log("send token tx hash  " + res.toString().split(':')[2]);
                    if (sendTokenError) {
                      alertify.set("notifier", "position", "top-right");
                      alertify.error(sendTokenError);
                      _this.sendTokenTxHash = "";
                      $("#Mintt").show();
                    } else {
                      _this.sendTokenTxHash = res;
                    }
                  });
                }, 2000);

                _this.init();
              }, 2000);

              break;
            case "Burn":
              setTimeout(function() {
                setTimeout(function() {
                  $("#menu11").hide();
                }, 1000);
                // console.log('Inside burn' + this.tabValue);
                // burnTokens.getPrivateKey(_this.privateKey);

                _this.getburnTokenTxHash();
                setTimeout(function() {
                  var response = burnTokens.trxHash();
                  response.then(res => {
                    // console.log("burn token tx hash " + res);
                    var burnTokenError = res.toString().split(":")[2];
                    // console.log("burn token tx hash  " + res.toString().split(':')[2]);
                    if (burnTokenError) {
                      alertify.set("notifier", "position", "top-right");
                      alertify.error(burnTokenError);
                      _this.burnTokenTxHash = "";
                      $("#menu11").show();
                    } else {
                      _this.burnTokenTxHash = res;
                    }
                  });
                }, 2000);
                _this.init();
              }, 2000);
              break;

            default:
              alert("Bye");
              _this.init();
              break;
          }
        }
      });
    },

    init: function() {
      var _this = this;
      _this.privateKey = "";
      _this.balance = "";
      _this.address = "";
      _this.burnTokenValue = "";
      _this.step = false;
      _this.tabValue = "";
      _this.submitted = false;
      _this.jsonStep = 1;
      _this.loader = false;
      _this.user.password = "";
      _this.fileName = "";
    }
  }
};
</script>
