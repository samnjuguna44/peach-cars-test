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
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div
              class="d-flex justify-content-between p-4 align-items-center bg-white border-secondary shadow-sm"
            >
              <span class="farm-span">FARMS</span>
              <h3 class="fs-1 feed-number">2</h3>
              <div>
                <p class="county-title">| KIAMBU COUNTY</p>
                <button class="feed-button btn rounded-pill">
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
                <button class="sell-button btn rounded-pill">
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
    <div class="p-3 bg-light">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div
              class="d-flex justify-content-between p-4 align-items-center bg-white border-secondary shadow-sm"
            >
              <!-- <img src="../assets/wonton-soup.jpg" alt=""/> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

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
</style>
