<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="left">
        <router-link id="home" to="/">Home</router-link>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <img id="logo"src="src/assets/logo-spotify.png">
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="right">
        <router-link id="dj" to="/dj">DJ</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
    padding-bottom: 20px;
    color: white;
  }

  .panel-body {
      max-width: 56rem;
      margin-left: auto;
      margin-right: auto;
    }

  .table {
    text-align: left;
  }

  #home, #dj {
    font-weight: bolder;
    font-size: 16px;
  }

  #logo {
    border-radius: 50%;
    max-width: 250px;
  }

  #logo:hover {
    animation: pulse 2s infinite;
  }

  #request, #conf, #dec {
    color: black;
  }

  tr {
    color: white;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }


  @-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(124,252,0, 0.4);
  }
  70% {
      -webkit-box-shadow: 0 0 0 50px rgba(124,252,0, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(124,252,0, 0);
  }
  }

  @keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(124,252,0, 0.4);
    box-shadow: 0 0 0 0 rgba(124,252,0, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(124,252,0, 0.4);
      box-shadow: 0 0 0 10px rgba(124,252,0, 0.4);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(124,252,0, 0.4);
      box-shadow: 0 0 0 0 rgba(124,252,0, 0.4);
  }
}

  #left {
    padding-top: 110px;
    padding-bottom: 110px;
    text-align: right;
  }

  #right {
    padding-top: 110px;
    padding-bottom: 110px;
    text-align: left;
  }

</style>
