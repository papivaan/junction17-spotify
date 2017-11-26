<template>
  <div class="playlist">
    <h1>{{ msg }}</h1>
    <div class="panel-body">
      <table class="table table-dark">
        <thead>
        <tr>
          <th>Artist</th>
          <th>Song name</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="song in songs">
          <td>{{song.track.artists[0].name}}</td>
          <td>{{song.track.name}}</td>
          <td><button id="dec" class="btn btn-decline" @click="removeSong(song)">Remove</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  // import toastr from 'toastr'

  export default {
    name: 'Playlist',
    data () {
      return {
        msg: 'Your Party Playlist is here!',
        songs: []
      }
    },
    created () {
      let items = []
      axios.get('https://junction17-spotify-proxy.herokuapp.com/api/users/mi_ba/playlists/7Em91nUmHmjFAePCZ1wwJu/tracks')
        .then(function (response) {
          let tracks = response.data.items
          for (let i = 0; i < tracks.length; i++) {
            items.push(tracks[i])
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      this.songs = items
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
