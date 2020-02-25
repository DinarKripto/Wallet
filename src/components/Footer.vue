<style scoped>
html {
  position: relative;
  min-height: 100%;
}
footer {
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;
  height: auto;
  width: 100%;
}
</style>


<template>
  <footer id="footer" class="footer text-right">{{ new Date().getFullYear() }} © dinarkripto.com</footer>
</template>

<script>
export default {};

function footerAlign() {
  $("footer").css("display", "block");
  $("footer").css("height", "auto");
  var footerHeight = $("footer").outerHeight();
  $("body").css("padding-bottom", footerHeight);
  $("footer").css("height", footerHeight);
}

$(document).ready(function() {
  footerAlign();
});

$(window).resize(function() {
  footerAlign();
});
</script>