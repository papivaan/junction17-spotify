<template>
  <div class="playlist-manager">
    <h1>{{ msg }}</h1>
    <button @click="search">Give me samba!</button>
    <div class="panel-body">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Artist</th>
          <th>Song name</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="song in songs">
          <td>{{song.artists[0].name}}</td>
          <td>{{song.name}}</td>
          <td><button @click="confirmSong(song)">Confirm</button></td>
          <td><button @click="declineSong(song)">Decline</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'

  let config = {
    apiKey: 'AIzaSyAJ3Xjh_ieIKqeEvP7nEXxtJy7-RiDrz_Q',
    authDomain: 'junction17-spotify-user.firebaseapp.com',
    databaseURL: 'https://junction17-spotify-user.firebaseio.com',
    projectId: 'junction17-spotify-user',
    storageBucket: 'junction17-spotify-user.appspot.com',
    messagingSenderId: '9333696788'
  }

  let app = Firebase.initializeApp(config)
  let db = app.database()

  let requestedRef = db.ref('requested')

  export default {
    name: 'PlaylistManager',
    firebase: {
      requested: requestedRef
    },
    data () {
      return {
        msg: 'Manage your Party Playlist here!'
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    max-width: 56rem;
    margin: auto;
  }

  .table {
    text-align: left;
  }

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
