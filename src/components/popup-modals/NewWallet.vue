<style scoped>
.invalid-feedback {
  color: #ef5350;
}

p {
  color: #ef5350 !important;
}

.text-white {
  color: rgba(255, 255, 255, 0.8) !important;
}
</style>
<template>
  <div>
    <div
      id="new_wallet"
      class="modal fade"
      role="dialog"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">{{ $t('Create_New_Account') }}</h4>
          </div>
          <div class="modal-body">
            <div class="text-center">
              <div
                style="text-align:center; color:#337ab7; margin-bottom: 10px;"
              >Already have a wallet?</div>
              <a class="btn btn-default text-center" @click="accessWallet()">Access My Wallet</a>
            </div>
            <h4>{{$t('wallet_detail')}}</h4>
            <div class="alert alert-danger">
              <p>
                <strong>{{$t('password_suggestion')}}</strong>
              </p>
              <p>
                <span
                  class="translation_missing"
                  title="translation missing: en.views.accounts.newaccount.recommend"
                >{{$t('Recommend')}}</span>
                <a href target="_blank">{{$t('Common_Password_Mistakes')}}</a>
              </p>
              <p>{{$t('save_password')}}</p>
              <p>
                <strong>{{$t('large_amount_message')}}</strong>
              </p>
              <p>
                <strong>{{$t('dinarkripto_message')}}</strong>
              </p>
            </div>

            <div id="reg">
              <form @submit.prevent="handleSubmit">
                <div class="form-group">
                  <label for="password">{{$t('Password')}}</label>
                  <input
                    type="password"
                    v-model="user.password"
                    v-validate="{ required: true, min: 9 }"
                    name="password"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('password') }"
                  />
                  <div v-if="submitted && errors.has('password')" class="invalid-feedback">
                    {{
                    errors.first('password') }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="password">{{$t('Confirm_Password')}}</label>
                  <input
                    type="password"
                    v-model="user.cnf_password"
                    v-validate="{required: true, min: 9,confirmed:user.password}"
                    name="cnf_password"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('cnf_password') }"
                  />
                  <div v-if="submitted && errors.has('cnf_password')" class="invalid-feedback">
                    {{
                    errors.first('cnf_password') }}
                  </div>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary">{{$t('Create_Password')}}</button>
                </div>
              </form>
            </div>

            <div v-if="step == 4">
              <fieldset>
                <div class="nav nav-pills">
                  <div class="form-group">
                    <label>Wallet</label>
                    <div class="checkbox checkbox-info checkbox-circle">
                      <input id="myCheck" @click="step = 1;disableCheckbox()" type="checkbox" />
                      <label for="myCheck">
                        <a data-toggle="pill" href="#homeNewWallet">DinarCoin</a>
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div v-if="step == 1">
              <div class="form-group">
                <div class="form-group">
                  <label></label>
                  <!-- <input type="text" value=""  v-model="walletName" class="form-control "> -->
                </div>
              </div>
              <div class="tab-content">
                <div id="homeNewWallet" class="tab-pane fade in active">
                  <button
                    id="myBtn"
                    @click="disabledWalletBtn();createNewWallet()"
                    class="btn btn-primary waves-effect waves-light"
                    type="button"
                  >
                    <!--<span class="spinner  spinner&#45;&#45;small" >Loading…</span>-->
                    {{ createWallet }}
                  </button>
                </div>
              </div>
            </div>
            <div class="form-group" v-if="step == 2">
              <h3>Save your Keystore File.</h3>
              <!-- <div class="form-group"><p class="help-block">You now need to supply a secure password for this account.</p></div> -->
              <button class="btn btn-lg btn-primary" @click="saveFile($event)">
                Save
                keystore/json
              </button>
              <p class="text-white">
                **Do not lose it!** It cannot be recovered if you lose it.
                **Do not share it!** Your funds will be stolen if you use this file on a
                malicious/phishing site.
                **Make a backup!** Secure it like the millions of dollars it may one day be
                worth.
              </p>
            </div>
          </div>

          <div id="spinnerr" style="display: none">
            <vue-simple-spinner></vue-simple-spinner>
          </div>

          <div id="asd" class="form-group" v-if="step == 3">
            <div data-v-92875dbe class="form-group">
              <label data-v-92875dbe>
                Save your
                private key
              </label>
              <input type="text" v-model="acconntPrivateKey" id="prvtKey" class="form-control" />
              <button @click="copyKey()">Copy text</button>
              <p class="text-white">
                **Do not lose it!** It cannot be recovered if you lose it.
                **Do not share it!** Your funds will be stolen if you use this file on a
                malicious/phishing site.
                **Make a backup!** Secure it like the millions of dollars it may one day be
                worth.
              </p>
            </div>
            <button
              class="btn btn-lg btn-primary"
              data-dismiss="modal"
              @click="removeClick()"
            >I Understand Continue</button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default waves-effect"
              data-dismiss="modal"
            >{{$t('Close')}}</button>
            <!-- <button type="button" class="btn btn-primary waves-effect waves-light" @click="step = 2">Save changes</button> -->
          </div>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>
<script>
import axios from "axios";
// Import web3 Library
import Web3 from "web3";
// Import Web3-eth-accounts
import Web3EthAccounts from "web3-eth-accounts";
// Import ethereumjs-wallet
//import ethereumJsWallet  from 'ethereumjs-wallet';
var ethereumJsWallet = require("ethereumjs-wallet");
import router from "./../../router";
// Initialize the Web3 provider
//var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/Lc2vdbhIswp6iQDRcmSa'));

//var WalletService = require('./wallet');
var WalletService = require("./../../services/wallet");
var Constant = require("./../../const");

var web3 = new Web3(new Web3.providers.HttpProvider(Constant.default.INFURA));
import {
  addressesBlancess,
  dncAddressesBlancess
} from "./../../services/wallet";

var DncTokenBalance = require("./../../services/getTokenBalance");
var userKeyClient = require("./../../services/importAccount");

export default {
  data: function() {
    return {
      step: 0,
      ethstep: 0,
      loaderr: false,
      myDate: new Date().toISOString().slice(0, 10),
      web3: "",
      account: "",
      newAccountAddress: "",
      newAccount: "",
      acconntPrivateKey: "",
      key: "",
      walletFromPrivateKey: "",
      fileData: "",
      createWallet: "Create Wallet",
      user: {
        password: "",
        cnf_password: ""
      },
      submitted: false
    };
  },

  methods: {
    async getImportAccountDetail(accountAddress) {
      var accountResposne;
      var accountResponse = await PrivateClient.getImportAccountDetail().then(
        res => {
          dataResponse = JSON.stringify(res.address);
        }
      );
    },
    accessWallet(e) {
      router.push("/importaccounts");
      $("div.modal-backdrop").removeClass("modal-backdrop");
      $("#new_wallet").hide();
    },
    copyKey(e) {
      /* Get the text field */
      var copyText = document.getElementById("prvtKey");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");
    },
    handleSubmit(e) {
      this.submitted = true;

      this.$validator.validate().then(valid => {
        if (valid) {
          // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user))
          this.step = 4;
          $("#reg").hide();
        }
      });
    },
    disabledWalletBtn: function() {
      var _this = this;
      _this.createWallet = "Creating Wallet";
      document.getElementById("myBtn").disabled = true;
    },
    saveFile: function(event) {
      event.preventDefault();
      var _this = this;
      //Random String
      var chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz-";
      var string_length = 46;
      var randomstring = "";
      for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
      }
      const data = this.fileData;
      const blob = new Blob([data], { type: "text/plain" });
      const e = document.createEvent("MouseEvents"),
        a = document.createElement("a");
      a.download = `UTC-${this.myDate}-.${randomstring}`;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ["utc/json", a.download, a.href].join(":");
      e.initEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);

      _this.step = 3;
    },
    createNewWallet: function() {
      $("#spinnerr").show();
      var _this = this;
      setTimeout(function() {
        _this.web3 = WalletService.initializeWalletProvider();
        //var account = web3.eth.accounts.create();

        _this.newAccountAddress = web3.eth.accounts.create();

        _this.newAccount = _this.newAccountAddress.address;

        _this.generateKeyStoreFile();
        // WalletService.getBalance();

        _this.step = 2; // this one should be here because we want the stoep 2 to arrive after completing the process, or else it will arrive just after clicking button
        $("#spinnerr").hide();
        _this.createWallet = "Create Wallet";
      }, 500);
    },
    generateKeyStoreFile: function() {
      var _this = this;
      //    console.log('Account Balance' + web3.eth.getBalance(this.newAccount));
      _this.acconntPrivateKey = "" + _this.newAccountAddress.privateKey;
      _this.acconntPrivateKey = _this.acconntPrivateKey.substring(2);

      //  this.key = Buffer.from(this.private,'hex');
      _this.key = new Buffer(_this.acconntPrivateKey, "hex");
      _this.walletFromPrivateKey = ethereumJsWallet.fromPrivateKey(this.key);
      _this.fileData = _this.walletFromPrivateKey.toV3String(
        _this.user.password
      );
    },
    clearDinarCheckBox: function() {
      document.getElementById("myCheck").checked = false;
    },
    disableCheckbox: function() {
      document.getElementById("myCheck").disabled = true;
    },

    removeClick: async function() {
      $("#spinnerr").show();

      var _this = this;
      _this.user.password = "";
      var fromValue = _this.acconntPrivateKey;

      _this.loader = true;

      _this.walletResponse = userKeyClient.getImportAccountDetail(
        _this.acconntPrivateKey
      );
      // _this.walletResponse = JSON.stringify(_this.walletResponse);
      // console.log('Response is   ' + JSON.stringify(response));

      // _this.walletResponse = WalletService.unlockAccount(_this.acconntPrivateKey, '123456789');

      WalletService.addresses.push(_this.walletResponse.address);

      //Eth Private Balance
      var myBalance;
      var balance = await WalletService.getBalance(
        _this.walletResponse.address
      ).then(res => {
        myBalance = res;
      });
      WalletService.addressesBlancess.push(myBalance);

      //DNC Private Balance
      var myDNCBalance;
      var balancednc = await DncTokenBalance.getDncBalance(
        _this.walletResponse.address
      ).then(dncres => {
        myDNCBalance = dncres;
      });

      WalletService.dncAddressesBlancess.push(myDNCBalance);

      // alert('Unlocked address ===> ' + WalletService.addresses);

      $("#new_wallet").hide();
      $("#spinnerr").hide();
      router.push("/home");
    }
  },

  mounted: function() {
    $(function() {
      $("input:checkbox").on("click", function() {
        // in the handler, 'this' refers to the box clicked on
        var $box = $(this);
        if ($box.is(":checked")) {
          // the name of the box is retrieved using the .attr() method
          // as it is assumed and expected to be immutable
          var group = "input:checkbox[name='" + $box.attr("name") + "']";
          // the checked state of the group/box on the other hand will change
          // and the current value is retrieved using .prop() method
          $(group).prop("checked", false);
          $box.prop("checked", true);
        } else {
          $box.prop("checked", false);
        }
      });
    });
  }
};
</script>
