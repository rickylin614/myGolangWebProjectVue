<template>
  <div id="app">
    
    <router-view/>

    <div class="myFooter">
      made by rickylin614
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

.container {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}

.button {
    margin: 5px;
  }

.myFooter {
  background: lightblue;
  position: fixed;
  width: 100%;
  top: 100%;
  margin-top: -18px;
  /* left:0; */
}

 .Footer .inner {
    /* display: flex; */
    height: 50px;
    /* text-align: center; */
    /* align-items: center; */
  }

html, body, #app {
  height: 100%;
}

body {
    /* background: -webkit-linear-gradient(lightblue, white); */
    /* background: -o-linear-gradient(lightblue, white); */
    /* background: -moz-linear-gradient(lightblue, white); */
    /* background: linear-gradient(lightblue, white); */
    margin: 0px;
}

section.section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.title {
    color: white;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
