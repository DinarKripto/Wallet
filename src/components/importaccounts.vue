<style scoped>
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
.bg-importaccount {
  margin: 1.5rem 2rem !important;
  background-color: #262c3b;
  -webkit-box-shadow: 16px 16px 47px 2px rgba(0, 0, 0, 0.07);
  box-shadow: 16px 16px 47px 2px rgba(0, 0, 0, 0.07);
  padding: 1.5rem 2rem;
  min-height: 1.5rem;
  margin: 1rem auto;
  position: relative !important;
}
</style>
<template>
  <div>
    <div class="content m-t-40">
      <div class="container text-left bg-importaccount">
        <div class="row">
          <div class="col-md-12 col-md-offset-2">
            <ul class="nav nav-pills">
              <li class="active">
                <a data-toggle="pill" href="#home">{{$t('Keystore')}}</a>
              </li>
              <li>
                <a data-toggle="pill" href="#menu1">{{$t('Private_Key')}}</a>
              </li>
            </ul>

            <div class="tab-content">
              <div id="home" class="tab-pane fade in active">
                <section class="col-md-8 col-sm-6">
                  <div>
                    <h4 translate="ADD_Radio_2_alt">{{$t('Select')}}</h4>
                    <h5 style="color:  rgb(217, 83, 79);">{{$t('not_reommended')}}</h5>
                    <div
                      class="form-group"
                      style="color:  rgba(255, 255, 255, 0.8);"
                    >{{$t('Entering_private_key')}}</div>
                    <ul style="color: white;">
                      <li>
                        <a
                          href="https://metamask.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >{{$t('MetaMask')}}</a>
                        {{$t('or')}}
                        <a
                          href="https://wallet.trezcr.com/#/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >{{$t('A_hadware')}}</a>
                        or
                        <a
                          href="https://www.myetherwallet.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >{{$t('running_MEM')}}</a>
                      </li>
                      <li>
                        <a href target="_blank" rel="noopener noreferrer">{{$t('How_to_protect')}}</a>
                      </li>
                    </ul>
                    <br />
                    <div class="form-group" v-if="step == 1">
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
                  </div>
                  <div v-if="step == 2">
                    <form>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="user.password" class="form-control" />
                        <!--<div style="color:red" v-if="submitted && errors.has('password')"-->
                        <!--class="invalid-feedback">{{ errors.first('password') }}-->
                        <!--</div>-->
                      </div>
                      <!--passWord section-->
                      <button
                        type="submit"
                        @click="showLoader"
                        id="btn_password"
                        class="btn btn-primary"
                      >Enter Password</button>
                    </form>
                  </div>
                  <div v-if="loader == true">
                    <vue-simple-spinner></vue-simple-spinner>
                  </div>
                </section>
                <!--passWord section-->
              </div>

              <!--second tab menu-->
              <div id="menu1" class="tab-pane fade">
                <div id="selectedTypeKey" class="col-md-8">
                  <h4 translate="ADD_Radio_3" class>Paste Your Private Key</h4>
                  <h5 style="color:  rgb(217, 83, 79);">{{$t('not_reommended')}}</h5>
                  <div
                    class="form-group"
                    style="color: rgba(255, 255, 255, 0.8);"
                  >{{$t('Entering_private_key')}}</div>
                  <ul style="color: white;">
                    <li>
                      <a
                        href="https://metamask.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >{{$t('MetaMask')}}</a>
                      or
                      <a
                        href="https://wallet.trezcr.com/#/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >{{$t('A_hadware')}}</a>
                      {{$t('or')}}
                      <a
                        href="https://www.myetherwallet.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >{{$t('running_MEM')}}</a>
                    </li>
                    <li>
                      <a href target="_blank" rel="noopener noreferrer">{{$t('How_to_protect')}}</a>
                    </li>
                  </ul>
                  <!---->
                  <br />

                  <div id="hideImportKey">
                    <form @submit.prevent="handlePrivateKey">
                      <div class="form-group">
                        <label for="userKey">Private Key</label>
                        <input
                          type="text"
                          v-model="userKey"
                          autocomplete="off"
                          v-validate="{required:true,min:64,max:64}"
                          name="userKey"
                          class="form-control"
                          :class="{ 'is-invalid': submitted && errors.has('userKey') }"
                        />
                        <div
                          style="color:red"
                          v-if="submitted && errors.has('userKey')"
                          class="invalid-feedback"
                        >{{ errors.first('userKey') }}</div>
                      </div>
                      <button type="submit" class="btn btn-primary">Enter Key</button>
                    </form>
                  </div>

                  <div v-if="loader == true">
                    <vue-simple-spinner></vue-simple-spinner>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var WalletService = require("./../services/wallet");
var demoData = require("./blockData.js");
import router from "./../router";
import {
  addressesBlancess,
  dncAddressesBlancess,
  blocksData
} from "../services/wallet";
var DncTokenBalance = require("./../services/getTokenBalance");

var Web3 = require("web3");
var Constant = require("./../const");

var web3 = new Web3(new Web3.providers.HttpProvider(Constant.default.INFURA));

import axios from "axios";

export default {
  data: function() {
    return {
      loader: false,
      step: 1,
      userKey: "",
      userPassword: "",
      fileName: "",
      walletResponse: [],
      submitted: false,
      user: {
        password: ""
      },

      btnText: "Enter key",
      json_Data: ""
    };
  },
  methods: {
    upload_link(e) {
      e.preventDefault();
      $("#upload:hidden").trigger("click");
    },

    onFileSelected(e) {
      e.preventDefault();
      //    console.log(e);
      this.fileName = e.target.files[0].name;
      var newFileName = this.fileName.split(".");
      if (newFileName[1].length > 46 || newFileName[1].length < 46) {
        alertify.set("notifier", "position", "top-right");
        alertify.error("Invalid file format");
        this.fileName = "";
        return false;
      }

      var _this = this;
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
          _this.step = 2;
        };
        // Start the reader job - read file
        reader.readAsText(input.files[0]);
      }
    },
    handlePrivateKey(e) {
      var _this = this;
      e.preventDefault();
      var fromValue = _this.userKey;

      _this.submitted = true;

      _this.$validator.validate().then(valid => {
        if (valid) {
          _this.loader = true;
          setTimeout(() => {
            _this.walletResponse = WalletService.unlockAccount(
              _this.userKey,
              "123456789"
            );
            if (_this.walletResponse === false) {
              alertify.set("notifier", "position", "top-right");
              alertify.error("Invalid Private key");
              _this.userKey = "";
              _this.user.password = "";
              _this.step = 1;
              _this.loader = false;
            } else {
              var addressFound = false;
              WalletService.addresses.forEach(address => {
                if (address == "0x" + _this.walletResponse.address) {
                  alertify.set("notifier", "position", "top-right");
                  alertify.error("You already added this account");
                  _this.userKey = "";
                  _this.user.password = "";
                  addressFound = true;
                  // _this.step = 1;
                  _this.loader = false;
                  // router.push('/importaccounts');
                  return;
                }
              });
              if (addressFound == false) {
                setTimeout(function() {
                  // To do here will write axios call

                  WalletService.addresses.push(
                    "0x" + _this.walletResponse.address
                  );

                  //Eth Private Balance
                  var myBalance;
                  var balance = WalletService.getBalance(
                    _this.walletResponse.address
                  ).then(res => {
                    myBalance = res;
                  });
                  setTimeout(() => {
                    WalletService.addressesBlancess.push(myBalance);
                  }, 3000);

                  //DNC Private Balance
                  var myDNCBalance;
                  var balancednc = DncTokenBalance.getDncBalance(
                    _this.walletResponse.address
                  ).then(dncres => {
                    myDNCBalance = dncres;
                  });

                  setTimeout(() => {
                    // console.log("Balcne i get for dnc is" + myDNCBalance);

                    WalletService.dncAddressesBlancess.push(myDNCBalance);
                  }, 3000);
                }, 1000);

                router.push("/home");

                $("#spinnerr").hide();
              }
            }
          }, 2000);
        }
      });
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
      var _this = this;

      e.preventDefault();

      _this.submitted = true;

      var password = _this.user.password;
      var jsonBackResposne = false;
      var jsonResponseError = false;

      setTimeout(function() {
        _this
          .getAccountFromJson()
          .then(res => {
            jsonBackResposne = true;
            if (jsonBackResposne) {
              _this.listing();
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
              document.getElementById("btn_password").disabled = false;
              return;
            }
          });
      }, 500);
    },
    listing: async function() {
      var _this = this;
      console.log("addresses are " + WalletService.addresses);
      var addressFound = false;
      WalletService.addresses.forEach(address => {
        if (address == "0x" + _this.json_Data.address) {
          alertify.set("notifier", "position", "top-right");
          alertify.error("You already added this account");
          addressFound = true;
          _this.step = 1;
          _this.loader = false;
          router.push("/importaccounts");
          return;
        }
      });

      if (addressFound == false) {
        WalletService.addresses.push("0x" + _this.json_Data.address);

        // To do here will write axios call

        //Eth key Store Balance
        var keystoreBalance;
        var balance = await WalletService.getBalance(
          _this.json_Data.address
        ).then(res => {
          keystoreBalance = res;
        });

        WalletService.addressesBlancess.push(keystoreBalance);

        //DNC  Keystore Balance

        var myDNCkeyStoreBalance;
        var keystoreBalancednc = await DncTokenBalance.getDncBalance(
          _this.json_Data.address
        ).then(dncres => {
          myDNCkeyStoreBalance = dncres;
        });

        WalletService.dncAddressesBlancess.push(myDNCkeyStoreBalance);

        _this.loader = false;
        router.push("/home");
      }
    }
  },

  mounted: function() {
    $("div.modal-backdrop").removeClass("modal-backdrop");
  }
};
</script>
