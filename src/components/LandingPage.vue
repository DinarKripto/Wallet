<template>
  <!-- BEGIN HEADER AND NAVIGATION -->
  <header id="header">
    <div
      class="c-overlay header__img"
      style="background-image: url('assets/images/header-bg.jpg');"
    ></div>
    <div class="c-overlay s-back-grad op88"></div>

    <!-- BEGIN HERO SECTION -->
    <div id="home" class="hero">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="hero__info">
              <a>
                <img class="img-logo" alt="logo" src="assets/images/logo.png" />
              </a>
              <h2 class="dnc-title">DINAR COIN WALLET</h2>
              <p
                class="dnc-p"
              >Dinar Coin (DNC) is a free client side interface helping you interact with the Ethereum Blockchain</p>
              <p
                class="dnc-p"
              >Easy-to-use, open-source platform allows you to generate wallet and interact with DNC smart contract directly.</p>
            </div>
            <div class="hero__download">
              <router-link class="c-btn c-btn--action -big" to="/home">Create a new wallet</router-link>
              <router-link class="c-btn c-btn--primary -big" to="/importaccounts">
                <span>Access My Wallet</span>
              </router-link>
            </div>
          </div>
          <div class="hidden-xs hidden-sm hero__img">
            <img class="software-img" src="assets/images/mockup-2.png" alt="Software Mockup" />
          </div>
        </div>
      </div>
    </div>
    <!-- END HERO SECTION -->

    <!-- BEGIN HERO SHADOW -->
    <div class="hero__shadow"></div>
    <!-- END HERO SHADOW -->
  </header>
  <!-- END HEADER AND NAVIGATION -->
</template>
<script>
//import router from './../router';
export default {
  mounted: function() {
    // $('div.modal-backdrop').removeClass('modal-backdrop');
  }
};
</script>
