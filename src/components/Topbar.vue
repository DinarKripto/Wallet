<template>
  <div class="topbar">
    <!-- LOGO -->
    <div class="topbar-left">
      <div class="text-center">
        <a href class="logo">
          <img src="/assets/images/logo.png" width="200" height="60" alt="Logo" />
        </a>
      </div>
    </div>
    <!-- Navbar -->
    <div class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class>
          <div class="pull-right">
            <button class="button-menu-mobile open-left waves-effect">
              <i class="md md-menu"></i>
            </button>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <img src="assets/images//icon/settings-icon.png" alt="user-img" class="img-circle" />
                <span class="m-t-0 m-b-0 m-l-10">Settings</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a data-toggle="modal" data-target="#transaction-speed" href="javascript:void(0)">
                    <i class="md md-clear-all"></i>
                    {{$t('Transaction_Speed')}}
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.dinarkripto.com/t-c/">
                    <i class="md md-apps"></i>
                    {{$t('Terms')}}
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.dinarkripto.com/">
                    <i class="md md-apps"></i>
                    {{$t('About_us')}}
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item language">
              <button
                v-for="entry in languages"
                :key="entry.title"
                @click="changeLocale(entry.language)"
              >
                <flag :iso="entry.flag" v-bind:squared="false" />
                {{entry.title}}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import i18n from "@/plugins/i18n";
export default {
  data: function() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "my", language: "myr", title: "Malay" }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>
