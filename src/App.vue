<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <img id="logo" src="../src/assets/logo-spotify.png">
      </div>
    </div>
    <div class="row">
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <router-link id="home" class="btn btn-primary" to="/">Home</router-link>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <router-link id="request" class="btn btn-primary" to="/request">Request</router-link>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <router-link id="dj" class="btn btn-primary" to="/dj">DJ</router-link>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="">
        <router-link id="playlist" class="btn btn-primary" to="/playlist">Playlist</router-link>
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
    max-width: 72rem;
  }

  input {
    color: #000;
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
    margin: .5rem;
    -webkit-transition: all .3s ease-in;
    -o-transition: all .3s ease-in;
    transition: all .3s ease-in;
  }
  .btn-primary {
    min-width: 12rem;
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
    border: 2px solid #84bd00;
    background-color: transparent;
    color: #fff;
  }
  .btn-secondary:hover {
    border: 2px solid #000;
    background-color: #84bd00;
    color: #000;
  }
  .btn-decline {
    border: 2px solid #c4000e;
    background-color: transparent;
    color: #fff;
  }
  .btn-decline:hover {
    border: 2px solid #000;
    background-color: #c4000e;
    color: #000;
  }

  .btn:focus {
    background-color: inherit;
    border-color: #fff;
    color: #fff;
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
    margin-bottom: 2rem;
  }

  #logo:hover {
    animation: pulse 2s infinite;
  }

  table {
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
      -webkit-box-shadow: 0 0 20px 50px rgba(124,252,0, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 50px 0 rgba(124,252,0, 0);
  }
  }

  @keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(124,252,0, 0.4);
    box-shadow: 0 0 0 0 rgba(124,252,0, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 20px 10px rgba(124,252,0, 0.4);
      box-shadow: 0 0 20px 10px rgba(124,252,0, 0.4);
  }
  100% {
      -moz-box-shadow: 0 0 50px 0 rgba(124,252,0, 0.2);
      box-shadow: 0 0 50px 0 rgba(124,252,0, 0.2);
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
