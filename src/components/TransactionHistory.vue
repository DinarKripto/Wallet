<style scoped>
.padding-none {
  padding: 0;
}

.width-100 {
  width: 100%;
}
.table-txs-width {
  white-space: nowrap;
  width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<template>
  <div>
    <div class="content m-t-40">
      <div class="container text-left bg-contract">
        <div class="row">
          <div class="col-md-12 padding-none">
            <div class="card-box">
              <h1 class="header-title m-t-0 text-left">{{$t('Tranasction_History')}}</h1>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>{{$t('Wallet_Address')}}</label>
                    <div class="input-group width-100">
                      <select class="form-control" @change="changeAddress($event)">
                        <option value selected disabled>Choose</option>
                        <option
                          v-for="(addr,index) in userAddresses"
                          :value="addr"
                          :key="index"
                        >{{ addr }}</option>
                      </select>
                      <div class="input-group-btn">
                        <button type="button" @click="copyKey()" class="btn btn-primary">
                          <i class="fa fa-copy"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label>{{$t('Wallet_Balance_DNC')}}</label>
                    <input
                      readonly
                      type="text"
                      v-bind:value="DncBalance"
                      :disabled="true"
                      id="wallet-balance"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                      <label>{{$t('Total_Transactions')}}</label>
                      <input
                        readonly
                        type="text"
                        v-bind:value="blocksLength"
                        :disabled="true"
                        id="total-trasactions"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>{{$t('Wallet_Balance_ETH')}}</label>
                    <input
                      readonly
                      type="text"
                      v-bind:value="EthBalance"
                      :disabled="true"
                      id="eth-balance"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div v-if="spinnerr == true">
                <vue-simple-spinner></vue-simple-spinner>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <h2 class="header-title m-t-20 m-b-20 text-left">{{$t('Transactions')}}</h2>
                  <div class="table-responsive">
                    <table class="table table-striped table-color">
                      <thead>
                        <tr>
                          <th>{{$t('TXN_Hash')}}</th>
                          <th>{{$t('Block')}}</th>
                          <th>{{$t('Age')}}</th>
                          <th>{{$t('From')}}</th>
                          <th>{{$t('To')}}</th>
                          <th>{{$t('Value')}}</th>

                          <th>{{$t('TXN_Status')}}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(addr,index) in blocksData" :key="'eth'+index">
                          <td>
                            <div class="table-txs-width">{{addr["hash"]}}</div>
                          </td>
                          <td>{{addr["blockNumber"]}}</td>
                          <td>{{format_date(addr['timeStamp'])}}</td>
                          <td>
                            <div class="table-txs-width">{{addr["from"]}}</div>
                          </td>
                          <td>
                            <div class="table-txs-width">{{addr["to"]}}</div>
                          </td>
                          <td>{{addr["value"]/1000000000000000000}} ETH</td>
                          <td>
                            <strong
                              class="text-warning"
                            >{{addr["txreceipt_status"] == '1' ? 'Success':'Failed'}}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
import axios from "axios";
export default {
  data: function() {
    return {
      WalletServiceProvider: WalletService,
      blocksData: [],
      DNCAddressesBalance: WalletService.dncAddressesBlancess,
      userAddresses: WalletService.addresses,
      userAddressesBalance: WalletService.addressesBlancess,
      spinnerr: false,
      blocksLength: 0,
      selectedAddress: "",
      selectedIndex: "",
      EthBalance: 0,
      DncBalance: 0
    };
  },
  methods: {
    getBlocksData(address) {
      console.log("Address tx: " + address);
      this.spinnerr = true;
      var url =
        "https://explorer.dinarkripto.com/api/getTransactionData/" + address;
      axios
        .get(url)
        .then(response => {
          if (response.data.data.result.length > 0) {
            this.blocksData = response.data.data.result;
            this.blocksLength = this.blocksData.length;
          }
          this.spinnerr = false;
        })
        .catch(error => {});
    },
    changeAddress(event) {
      this.selectedAddress =
        event.target.options[event.target.options.selectedIndex].text;
      this.selectedIndex =
        event.target.options[event.target.options.selectedIndex];

      let index = event.target.selectedIndex;
      this.selectedIndex = index - 1;
      // alert('Selected index ' +  this.selectedIndex);
      var ethereumBalance = this.userAddressesBalance.toString().split(",");
      var dncBalance = this.DNCAddressesBalance.toString().split(",");
      this.EthBalance = ethereumBalance[this.selectedIndex];
      this.DncBalance = dncBalance[this.selectedIndex];

      this.getBlocksData(this.selectedAddress);
    },
    format_date(date) {
      var ts = new Date(date * 1000);
      var seconds = Math.floor((new Date() - ts) / 1000);

      var interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
        return interval + " years ago";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
        return interval + " months ago";
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
        return interval + " days ago";
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
        return interval + " hours ago";
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
        return interval + " minutes ago";
      }
      return Math.floor(seconds) + " seconds  ago";
    },
    copyKey(e) {
      /* Get the text field */
      var copyText = document.getElementById("wallet-address-tx");
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");
    }
  },
  beforeCreate() {
    var _this = this;
    setTimeout(() => {
      _this.spinnerr = true;
    }, 100);
  },
  mounted: function() {
    var _this = this;
    _this.value = "";
    setTimeout(() => {
      _this.spinnerr = false;
    }, 2000);
    $("div.modal-backdrop").removeClass("modal-backdrop");
  }
};
</script>