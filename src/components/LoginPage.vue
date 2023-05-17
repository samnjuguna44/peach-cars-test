<template>
  <section class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-4">
        <div class="login-panel bg-white text-left">
          <img class="cover-logo d-flex justify-content-center" src="../assets/image.png" alt="cover"/>
          <img
            src="../assets/nairobi-sausages.png"
            class="logo-image"
            alt="logo"
          />
          <br />
          <form action="">
            <div class="form-group">
              <label for="email" class="input-label"
                >Enter your email address</label
              >
              <input
                type="email"
                class="form-control"
                placeholder="Email address"
              />
            </div>
            <div class="form-group">
              <label for="password" class="input-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <br />
            <div class="form-group d-flex justify-content-center">
              <button class="btn rounded-pill" @click.prevent="login" v-if="!isLogging">Login</button>
            </div>
          </form>
          <br />
          <p class="reg-ctrl d-flex justify-content-center">
            Don't have an account? Register
          </p>
          <p class="pass-ctrl d-flex justify-content-center">Forgot Password</p>
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
    }
  },
  methods: {
    login() {
      this.isLoggingIn = true

      setTimeout(() => {
           this.isLoggingIn = false
           setTimeout(() => this.redirect(), 1000)
      }, 1000)
    },

    redirect() {
      this.$router.push({ path: '/dashboard' })
    }
  }
}
</script>

<style lang="scss">
.widget {
  margin: 0;
  height: unset;
}

.login-panel {
  .input-label {
    padding-top: 30px;
    padding-bottom: 8px;
    color: #1c1b1f;
    font-weight: 400;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
  }

  .cover-logo {
    max-width: 100%;
    
  }

  .logo-image {
    margin-left: 100px;
  }

  .form-control {
    height: 48px;
    background: #eeeeee;
  }

  .reg-ctrl {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    color: #595959;
  }

  .pass-ctrl {
    text-decoration-line: underline;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    color: #595959;
  }

  .btn {
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
}
</style>
