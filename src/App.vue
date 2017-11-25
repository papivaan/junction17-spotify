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
    color: #fff;
    padding-top: 60px;
  }

  .btn {
    display: inline-block;
    font-size: 1.65rem;
    font-weight: 500;
    text-decoration: none;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: .5rem 1rem;
    border-radius: .35rem;
    margin: 1rem;
    -webkit-transition: all .3s ease-in;
    -o-transition: all .3s ease-in;
    transition: all .3s ease-in;
  }
  .btn-primary {
    border: 2px solid #fff;
    background-color: transparent;
    color: #fff;
  }
  .btn-primary:hover {
    border: 2px solid #000;
    background-color: #84bd00;
    color: #000;
  }
  .btn-secondary {
    border: 2px solid #fff;
    background-color: transparent;
    color: #fff;
  }
  .btn-secondary:hover {
    border: 2px solid #000;
    background-color: #84bd00;
    color: #000;
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

  #request {
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
      -webkit-box-shadow: 0 0 0 20px rgba(124,252,0, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(124,252,0, 0);
  }
  }

  @keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
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
