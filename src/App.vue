<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!-- <router-link to='/editor'>Editor</router-link> -->
      <router-link to="/about">About</router-link>
    </div>
    <tiptap />

    <router-view />
  </div>
</template>

<script>
import Tiptap from './components/Tiptap.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

export default {
  name: 'App',
  components: {
    Home,
    About,
    Tiptap,
  }
}
</script>
