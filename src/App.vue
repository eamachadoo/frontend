<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const logo_src = ref('/img/logo.png')
const app_name = ref('UserManager')
</script>

<template>
  <div class="app-container">
    <Navbar :logo="logo_src" :alt="app_name" />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style>
  *{
    font-family: Arial;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .content {
    flex: 1 0 auto;
  }
  .main-container {
    margin:0px;
    min-height: 250px;
  }
  h1 {
    text-align: center;
    font-size: 35px;
    margin-bottom: 30px;
  }
</style>

