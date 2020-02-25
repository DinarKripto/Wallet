<template>
  <div class="left side-menu" style="overflow: visible;text-align:left">
    <div class="sidebar-inner slimscrollleft" style="verflow: visible;">
      <div id="sidebar-menu">
        <ul>
          <!--                    <li class="text-muted menu-title">{{$t('Home')}}</li>-->

          <li>
            <router-link to="/" class="waves-effect waves-primary">
              <img src="assets/images/icon/Alternative-Explorer-2-icon.png" />&nbsp;&nbsp;&nbsp;
              <span>{{$t('Home')}}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/home" class="waves-effect waves-primary">
              <img src="assets/images/icon/User-icon.png" />&nbsp;&nbsp;&nbsp;
              <span>Dashboard</span>
            </router-link>
          </li>
          <!--<li>
                        <a data-toggle="modal" data-target="#new_wallet" href="#"
                           class="waves-effect waves-primary"><img
                                src="assets/images/icon/math-add-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                New Wallet </span></a>
          </li>-->
          <li v-if="owner">
            <router-link to="/contracts" class="waves-effect waves-primary">
              <img src="assets/images/icon/Play-Books-icon.png" />&nbsp;&nbsp;&nbsp;
              <span>{{$t('DNC_Contract')}}</span>
            </router-link>
          </li>
          <!--<li>
                        <router-link to="/importaccounts" class="waves-effect waves-primary"><img
                                src="assets/images/icon/Alternative-Explorer-2-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                Import Accounts </span></router-link>
          </li>-->
          <li>
            <a
              target="_blank"
              href="https://explorer.dinarkripto.com"
              class="waves-effect waves-primary"
            >
              <img src="assets/images/icon/dinar-icon.png" />&nbsp;&nbsp;&nbsp;
              <span>DNC Explorer</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://mint.dinarkripto.com/en"
              class="waves-effect waves-primary"
            >
              <img src="assets/images/icon/dnd-icon.png" />&nbsp;&nbsp;&nbsp;
              <span>{{$t('Mint_DNC')}}</span>
            </a>
          </li>
          <li>
            <router-link to="/checkTxStatus" class="waves-effect waves-primary">
              <img src="assets/images/icon/hashtag.png" />&nbsp;&nbsp;&nbsp;
              <span>{{$t('Check_Tx_Status')}}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/TransactionHistory" class="waves-effect waves-primary">
              <img src="assets/images/icon/trans.png" />&nbsp;&nbsp;&nbsp;
              <span>{{$t('Tranasction_History')}}</span>
            </router-link>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
var WalletService = require("./../services/wallet");
var Constant = require("./../const");

import axios from "axios";

export default {
  data: function() {
    return {
      WalletServiceProvider: WalletService,
      Addresses: WalletService.addresses,
      owner: ""
    };
  },
  mounted: function() {
    $(window).on("load", function() {
      $("#new_wallet").modal("show");
    });
  },
  watch: {
    Addresses: function(val) {
      var value = val;
      if (value == Constant.default.OWNERADDRESS) {
        this.owner = val;
      }
    }
  }
};
</script>
<style>
#sidebar-menu > ul > li > a:hover {
  background: #202532 !important;
  border-left: 2px solid #3bafda;
  text-decoration: none;
  z-index: 1000;
}
#wrapper.enlarged .left.side-menu #sidebar-menu > ul > li > a {
  padding: 15px 20px;
}

#wrapper.enlarged .left.side-menu #sidebar-menu > ul > li > a {
  padding-left: 10px;
}
#sidebar-menu > ul > li > a {
  color: #a2acae;
  border-left: 2px solid transparent;
  display: block;
  padding: 12px 25px;
}
#sidebar-menu a {
  line-height: 1.3;
}
#sidebar-menu,
#sidebar-menu ul,
#sidebar-menu li,
#sidebar-menu a {
  border: 0;
  font-weight: normal;
  line-height: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  text-decoration: none;
}
a:hover,
a:focus,
a:visited {
  outline: 0;
  color: #337ab7;
  text-decoration: none;
}
.waves-effect {
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  will-change: opacity, transform;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
a {
  outline: 0;
  color: #337ab7;
  text-decoration: none;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a {
  background-color: transparent;
}
* {
  outline: none !important;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
user agent stylesheet a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  /* text-decoration: underline;*/
}
</style>
