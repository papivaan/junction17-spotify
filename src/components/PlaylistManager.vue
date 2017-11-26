<template>
  <div class="playlist-manager">
    <h1>{{ msg }}</h1>
    <button class="btn btn-primary">Login</button>
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
  import * as SpotifyWebApi from 'spotify-web-api-js'

  let spotify = new SpotifyWebApi()

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
        spotify.addTracksToPlaylist(
          'rennehir',
          '3GztKOtXsDfFBGohvBw8y8',
          [song.uri],
          {
            access_token: 'BQC8C5EqdmmsTBKFGueXxgeGI0w4kOjhRf0_EvSDL47C-YGQnwlCvH_9UWDl9K_eqnH_C0dTKyyB2swOLJ43NvREX-yaQOQKcHg5vpDeHfz8j8KNGC3nAJAe0DGOplxCsj_VpP97GAbx9ePToZ-BH7OrzmgZY_74yOKmhbHOFkUpCxRoIO4pPmoyq9qLadoDEoDVU_hhbQ'
          },
          function (error, response) {
            if (error) {
              console.log('Error: ' + error)
            } else {
              toastr.success('Nice choice! Song successfully added to the playlist.')
              firebase.database.ref('requested').child(song['.key']).remove()
            }
          }
        )
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
