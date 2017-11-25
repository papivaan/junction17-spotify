<template>
  <div class="playlist-manager">
    <h1>{{ msg }}</h1>
    <button>Give me samba!</button>
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
  import firebase from '../service/firebase'

  export default {
    name: 'PlaylistManager',
    firebase: {
      songs: firebase.database.ref('requested')
    },
    data () {
      return {
        msg: 'Manage your Party Playlist here!'
      }
    },
    methods: {
      confirmSong (song) {
      },
      declineSong (song) {
      }
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
