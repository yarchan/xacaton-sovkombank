<template>
  <div class="app-wrapper">
    <header>
      <Header/>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
.app-wrapper{
  width: 100%;
  max-width: 1920px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
}

</style>

<script>
import Header from './components/Header.vue'
import './styles/reset.css';
import './styles/main.css';

export default {
  components:{
    Header
  },
}
</script>
