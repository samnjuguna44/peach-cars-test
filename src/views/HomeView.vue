<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <img alt="Vue logo" src="../assets/logo.png"> -->
    <LoginPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from '@/components/LoginPage.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginPage
  }
}
</script>
