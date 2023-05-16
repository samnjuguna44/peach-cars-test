<!-- eslint-disable no-unused-vars -->
<template>
  <section class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Nairobi Sausages</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <h1 class="pigs-header">Submit a batch</h1>
    <br />
    <div>
      <input
        type="range"
        class="form-range"
        :min="min"
        :max="max"
        :step="step"
        v-model="value"
      />
      <p class="mt-2">Selected Pigs: {{ value }}</p>
      <br />
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="pig-panel bg-white text-left">
            <form action="">
              <div class="form-group">
                <label for="breed" class="input-label">Breed</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Hampshire Pig"
                />
              </div>
              <div class="form-group">
                <label for="age" class="input-label">Age</label>
                <input type="number" class="form-control" placeholder="1" />
              </div>
              <div class="form-group">
                <label for="weight" class="input-label">Average Weight</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="120 Kgs"
                />
              </div>
              <div class="form-group">
                <label for="weight" class="input-label"
                  >Ask price per pig</label
                >
                <input type="number" class="form-control" placeholder="0.00" />
              </div>
              <br />
              <div class="form-group d-flex justify-content-center">
                <button
                  class="btn rounded-pill feed-submit"
                  @click.prevent="feeds"
                  v-if="!isLogging"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      value: this.min,
    };
  },
  methods: {
    feeds() {
      this.isLoggingIn = true;

      setTimeout(() => {
        this.isLoggingIn = false;
        setTimeout(() => this.redirect(), 1000);
      }, 1000);
    },

    redirect() {
      this.$router.push({ path: "/received" });
    },
  },
};
</script>

<style lang="scss">
.pigs-header {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #595959;
  font-family: "Roboto", sans-serif;
  margin-top: 30px;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #f5f5f5;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}

input[type="range"]:hover {
  opacity: 1;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #517148;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #007bff;
  cursor: pointer;
}

p {
  font-size: 16px;
  font-weight: bold;
  font-weight: 600;
  color: #517148;
  font-family: "Roboto", sans-serif;
}

.input-label {
  padding-top: 30px;
  padding-bottom: 8px;
  color: #1c1b1f;
  font-weight: 400;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
}
</style>
