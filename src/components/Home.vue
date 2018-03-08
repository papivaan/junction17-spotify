<template>
  <div>
  <div class="playlist">
    <h1>{{ msg }}</h1>
  </div>
    <div class="description">
      <p>Welcome to use our Spotify API powered party music list!</p>
      <p>
        On <b>Request</b> tab you can search songs
        by song name and then ask for the DJ to confirm
        them to be added to the playlist. Or simply search for samba.
        We recommend samba!
      </p>
      <p>
        <b>DJ</b> tab is for the DJ to see all the requested songs
        and either <b>confirm</b> or <b>decline</b> them.
      </p>
      <p>
        The <b>Playlist</b> tab is where you can see all the songs added
        to the playlist.
      </p>
    </div>
    <div class="tech">
      <p>This project was built using <b>Vue.js</b>, <b>Node.js</b>,
      <b>Firebase</b> and <b>Heroku</b>.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Party Music List',
        songs: []
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
