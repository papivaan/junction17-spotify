<template>
  <div class="playlist-manager">
    <h1>{{ msg }}</h1>
    <div class="panel-body">
      <table class="table table-dark">
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
          <td><button id="conf" class="btn btn-secondary" @click="confirmSong(song)">Confirm</button></td>
          <td><button id="dec" class="btn btn-decline" @click="declineSong(song)">Decline</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import firebase from '../service/firebase'
  import toastr from 'toastr'
  import axios from 'axios'

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
        axios.post('https://junction17-spotify-proxy.herokuapp.com/api/users/rennehir/playlists/0KRmcOHYYZ8OjNyXSTsYVZ/tracks?uris=' + song.uri)
          .then(function (response) {
            toastr.success('Successfully added! Have you tried samba yet?')
            firebase.database.ref('requested').child(song['.key']).remove()
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      declineSong (song) {
        firebase.database.ref('requested').child(song['.key']).remove()
        toastr.warning('Song successfully removed from requests')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
