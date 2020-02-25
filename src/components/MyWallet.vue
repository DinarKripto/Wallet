<template>
  <div>
    <div class="content m-t-40">
      <div class="container">
        <!-- Page-Title -->
        <div class="row">
          <div class="card-box">
            <div data-v-7e9f727e class="alert alert-danger">
              <p data-v-7e9f727e>
                <strong data-v-7e9f727e>For your security</strong>: After Send/Burn the updated balance will be shown by reimporting your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="spinnerr == true">
      <vue-simple-spinner></vue-simple-spinner>
    </div>
    <div class="row">
      <div
        class="col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 text-center"
      >
        <div class="box-price-feed m-b-25">
          <div class="title-w title-usddnc">DNC Prices</div>
          <div class="flex-r m-t-20">
            <div class="dncusd">DNC/USD</div>
            <div class="draw-border dncrate">{{dncUsdValue}}</div>
          </div>
          <div class="flex-r m-t-20">
            <div class="dncusd">DNC/ETH</div>
            <div class="draw-border dncrate">{{dncEthValue}}</div>
          </div>
          <div class="flex-r m-t-20">
            <div class="dncusd">DNC/BTC</div>
            <div class="draw-border dncrate">{{dncBtcValue}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12" v-for="(addr,index) in userAddresses " :key="'eth'+index">
        <div class="card-box">
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <h4 class="header-title m-t-10 text-left">Wallet Information</h4>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12 text-right">
              <router-link to="/importaccounts">
                <button type="button" class="btn btn-primary waves-effect m-r-10">Add Account +</button>
              </router-link>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <h4 class="header-title margin-acc text-left">Account {{index + 1}}</h4>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-12 text-left">
              <div class="row">
                <div class="col-md-12">
                  <div class="title-w">Wallet Address</div>

                  <div class="address-w">{{addr}}</div>
                </div>
                <div class="col-md-12 m-t-20">
                  <div class="title-w">
                    <img src="/assets/images/dnc.png" width="12px;" height="17px" />&nbsp;Balance
                  </div>

                  <div class="address-w">
                    <img src="assets/images/dnc-w.png" width="12px;" height="17px;" />
                    &nbsp;&nbsp;{{DNCAddressesBalance[index]}}
                    <span class="f-w-600">DNC</span>
                  </div>
                </div>
                <div class="col-md-12 m-t-20">
                  <div class="title-w">
                    <img src="assets/images/icon/eth-icon2.png" />&nbsp;Balance
                  </div>

                  <div class="address-w">
                    <img src="assets/images/icon/eth-icon2.png" />
                    &nbsp;{{userAddressesBalance[index]}}
                    <span class="f-w-600">ETH</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12 text-center">
              <div class="row">
                <div class="col-md-12 dnc-btns">
                  <button
                    type="button"
                    class="btn draw-border m-r-10"
                    v-bind:id="'demo-'+index"
                    @click="showQRCode(addr,index)"
                  >Deposit</button>
                  <router-link to="/burnToken">
                    <button type="button" class="btn draw-border m-r-10">Burn DNC</button>
                  </router-link>

                  <router-link to="/sendToken">
                    <button
                      type="button"
                      @click="sendDNCRoute($event,addr)"
                      class="btn draw-border m-r-10"
                    >Send DNC</button>
                  </router-link>

                  <button
                    type="button"
                    class="btn draw-border m-r-10"
                    @click="sendEthRoute($event,addr)"
                  >Send ETH</button>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 m-t-30"></div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group qr-code-pos" v-bind:id="'qrcode-'+index" style="display:none">
                <input readonly class="form-control qr-code" type="text" v-bind:value="value" />
                <button class="btn copy-btn" data-clipboard-target=".qr-code">Copy</button>
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
import axios from "axios";
import router from "./../router";
export default {
  data: function() {
    return {
      WalletServiceProvider: WalletService,
      // DNC Variables
      DNCAddresses: WalletService.addresses,
      DNCAddressesBalance: WalletService.dncAddressesBlancess,
      //Eth Variables
      userAddresses: WalletService.addresses,
      userAddressesBalance: WalletService.addressesBlancess,
      spinnerr: false,
      value: "",
      dncEthValue: 0,
      dncUsdValue: 0,
      dncBtcValue: 0
    };
  },
  beforeCreate() {
    var _this = this;
    setTimeout(() => {
      _this.spinnerr = true;
      // console.log('created')
    }, 100);
  },
  methods: {
    showQRCode(address, index) {
      var _this = this;
      _this.value = address;

      $("#qrcode-" + index).css("display", "block");
      $("#demo-" + index).attr("disabled", true);

      var qrcode = new QRCode(document.getElementById("qrcode-" + index), {});
      qrcode.makeCode(address);
    },
    sendEthRoute(event, address) {
      event.preventDefault();
      this.$router.push("/sendEth/" + address);
    },
    sendDNCRoute(event, address) {
      event.preventDefault();
      this.$router.push("/sendToken/" + address);
    }
  },

  mounted:  function() {
    var _this = this;
    _this.value = "";
    setTimeout(() => {
      this.userBalance = WalletService.addressesBlancess[0];
      _this.spinnerr = false;

      // WalletService.refreshBalances();
      // console.log('destroyed')
      jQuery(window).on("load", function() {
        $("#new_wallet").modal("show");
      });

      // console.log('destroyed2222')
    }, 2000);
    axios.get(`https://explorer.dinarkripto.com/api/getRates`).then(res => {
      var result = res.data.data;
      _this.dncUsdValue = Math.round(result.dnc_sell_rate * 1000) / 1000;
      _this.dncEthValue =
        Math.round(result.dnc_eth_sell_rate * 100000000) / 100000000;
      _this.dncBtcValue =
        Math.round(result.dnc_btc_sell_rate * 100000000) / 100000000;
    });

    $("div.modal-backdrop").removeClass("modal-backdrop");
  }
};
</script>
