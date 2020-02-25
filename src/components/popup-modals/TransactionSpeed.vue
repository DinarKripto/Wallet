<style scoped>
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}

[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 12px;
  height: 12px;
  background: #f87da9;
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>

<template>
  <div>
    <div
      class="modal fade"
      id="transaction-speed"
      tabindex="-1"
      role="dialog"
      aria-labelledby="transaction-speed1"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="transaction-speed1">Transaction Speed</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleSubmit">
              <div>
                <p>
                  <input type="radio" id="economy" v-model="gas.value" value="2" name="economy" />
                  <label for="economy">Economy (2 GWEI)</label>
                </p>
                <p>
                  <input type="radio" id="normal" v-model="gas.value" value="3" name="normal" />
                  <label for="normal">Economy (3 GWEI)</label>
                </p>
                <p>
                  <input type="radio" id="simple" v-model="gas.value" value="5" name="simple" />
                  <label for="simple">Economy (5 GWEI)</label>
                </p>
                <p>
                  <input type="radio" id="testing" v-model="gas.value" value="8" name="testing" />
                  <label for="testing">Economy (8 GWEI)</label>
                </p>

                <p>
                  <input type="radio" id="general" v-model="gas.value" value="10" name="general" />
                  <label for="general">Economy (10 GWEI)</label>
                </p>
                <p>
                  <input type="radio" id="regular" v-model="gas.value" value="15" name="regular" />
                  <label for="regular">Regular ( 15 GWEI)</label>
                </p>
                <p>
                  <input type="radio" id="fast" v-model="gas.value" value="20" name="radio-group" />
                  <label for="fast">Fast (20 GWEI)</label>
                </p>

                <p>
                  <label for="custom">
                    <div class="form-group">
                      <input
                        type="text"
                        name="gwei"
                        v-model="gas.value"
                        readonly
                        class="form-control"
                        placeholder="GWEI"
                        aria-required="true"
                        aria-invalid="false"
                      />
                    </div>
                  </label>
                </p>
              </div>

              <div class="form-group text-right m-b-0">
                <button
                  type="submit"
                  class="btn btn-default waves-effect waves-light"
                  @click="handleSubmit"
                >SAVE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gas: {
        value: 0
      }
    };
  },
  mounted: function() {
    this.gas.value = localStorage.getItem("gas-value") / 1000000000;
  },

  methods: {
    handleSubmit() {
      // Put the object into storage
      // this.gas.value  = this.gas.value * x;
      localStorage.setItem("gas-value", this.gas.value * 1000000000);
      $("#transaction-speed").hide();
      $("div.modal-backdrop").removeClass("modal-backdrop");
    }
  }
};
</script>