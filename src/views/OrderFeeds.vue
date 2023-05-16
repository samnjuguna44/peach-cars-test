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
    <h1 class="feeds-header d-flex justify-content-center">Order Feeds</h1>
    <br />
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <div class="feed-panel bg-white text-left">
          <form action="">
            <div class="form-group">
              <label for="weight" class="input-label">Average Weight</label>
              <input type="number" class="form-control" placeholder="40 Kgs" />
            </div>
            <div class="form-group">
              <label for="weight" class="input-label">Ask price per kg</label>
              <input
                type="number"
                class="form-control"
                placeholder="0.00 Kgs"
              />
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLogginIn: false,
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
.navbar-brand {
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #1c1b1f;
  font-family: "Roboto", sans-serif;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.feeds-header {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #595959;
  font-family: "Roboto", sans-serif;
  margin-top: 30px;
}

.input-label {
  padding-top: 30px;
  padding-bottom: 8px;
  color: #1c1b1f;
  font-weight: 400;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
}

.form-control {
  height: 48px;
  background: #eeeeee;
}

.feed-submit {
  background: #212427;
  border-radius: 40px;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  width: 312px;
  margin-top: 32px;
  height: 48px;
  font-family: "Roboto", sans-serif;
}
</style>
