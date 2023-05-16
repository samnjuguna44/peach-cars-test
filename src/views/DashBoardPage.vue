<template>
  <section class="container-fluid page">
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
    <h1 class="dash-heading">Dashboard</h1>
    <br />
    <div class="p-3 bg-light">
      <div class="container-fluid cont">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div
              class="d-flex justify-content-between p-4 align-items-center bg-white border-secondary shadow-sm"
            >
              <span class="farm-span">FARMS</span>
              <h3 class="fs-1 feed-number">2</h3>
              <div>
                <p class="county-title">| KIAMBU COUNTY</p>
                <button class="feed-button btn rounded-pill" @click.prevent="feeding" v-if="!isLogging">
                  Order Feeds
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div
              class="d-flex justify-content-between p-4 align-items-center bg-white border-secondary shadow-sm"
            >
              <span class="pigs-span">PIGS</span>
              <h3 class="fs-1 pig-number">36</h3>
              <div>
                <p class="county-title">| LARGE WHITE</p>
                <button class="sell-button btn rounded-pill" @click.prevent="selling" v-if="!isLogging">
                  Sell a Batch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="dash-heading">Latest</h1>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <img
              src="../assets/wonton-soup.jpg"
              class="card-img-top"
              alt="wonton"
            />
            <div class="card-body">
              <h5 class="card-title">Wonton - Soup</h5>
              <p class="card-text">(20 minute version)</p>
              <button class="btn rounded-pill food-button">Wonton</button>
              <button class="btn rounded-pill food-button-i">Bok Choy Soup</button>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src="../assets/chocolate-chip.jpg" class="card-img-top" alt="chocolate" />
            <div class="card-body">
              <h5 class="card-title">Chocolate Chip Muffin</h5>
              <p class="card-text">Chocolaty Bliss</p>
              <button class="btn btn rounded-pill food-button">Banana</button>
              <button class="btn btn rounded-pill food-button-i">Chocolate</button>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src="../assets/overnight-casserole.jpg" class="card-img-top" alt="Image 2" />
            <div class="card-body">
              <h5 class="card-title">Overnight Casserole</h5>
              <p class="card-text">Casserole</p>
              <button class="btn rounded-pill food-button">Casserole</button>
              <button class="btn rounded-pill food-button-i">Breakfast</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isLogginIn: false,
    }
  },
  methods: {
    feeding() {
      this.isLoggingIn = true

      setTimeout(() => {
           this.isLoggingIn = false
           setTimeout(() => this.redirect(), 1000)
      }, 1000)
    },

    redirect() {
      this.$router.push({ path: '/feeds' })
    },
    selling() {
      this.isLoggingIn = true

      setTimeout(() => {
           this.isLoggingIn = false
           setTimeout(() => this.redirectTo(), 1000)
      }, 1000)
    },

    redirectTo() {
      this.$router.push({ path: '/batch' })
    },
  },
}
</script>

<style lang="scss">
.farm-number {
  text-align: left;
}

.page {
  background-color: #f5f5f5;
}

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

.dash-heading {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #595959;
  font-family: "Roboto", sans-serif;
  margin-top: 30px;
}

.cont {
  max-width: 1500px;
}

.county-title {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  color: #595959;
}

.farm-span {
  position: relative;
  left: -5px;
  top: -40px;
  font-weight: 700;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
  color: #517148;
}

.pigs-span {
  font-weight: 700;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
  color: #517148;
  position: relative;
  top: -40px;
  left: -5px;
}

.pig-number {
  position: relative;
  left: -45px;
}

.feed-number {
  position: relative;
  left: -45px;
}

.feed-button {
  background: #f3d052;
  color: #000000;
  border-radius: 40px;
  font-weight: 700;
  font-size: 15px;
}

.sell-button {
  background: #517148;
  color: #ffffff;
  border-radius: 40px;
  font-weight: 700;
  font-size: 15px;
}

.card {
  width: 18rem;
}

@media (max-width: 767px) {
  .card {
    margin-bottom: 1.5rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .card {
    margin-right: 1.5rem;
  }
  .card:last-child {
    margin-right: 0;
  }
}

@media (min-width: 992px) {
  .card {
    margin-right: 1.5rem;
  }
  .card:nth-child(3n) {
    margin-right: 0;
  }
}

.food-button {
  background: rgba(82, 137, 244, 0.2);
  border: 1px solid rgba(82, 137, 244, 0.9);
  border-radius: 50px;
  color: #6092F5;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
}

.food-button-i {
  background: rgba(95, 0, 153, 0.14);
  border: 1px solid rgba(95, 0, 153, 0.9);
  border-radius: 40px;
  color: #6D16A2;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  margin-left: 5px;
}
</style>
