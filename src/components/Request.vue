<template>
  <div class="container-fluid">
    <h1>{{ msg }}</h1>
    <button id="search" @click="search">Give me samba!</button>
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
          <td>{{song.artists[0].name}}</td>
          <td>{{song.name}}</td>
          <td><button id="request" @click="requestSong(song)">Request</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import firebase from '../service/firebase'

  export default {
    name: 'Request',
    data () {
      return {
        msg: 'Add your music to party list! WOOPWOOP!',
        songs: [],
        bearer: 'BQCC7Umexbpd0Qq2NIx8i_5oJKoO0U-1nda3rxpNBYX3PLhCv1CxSfvTJIoJzDo194csMF7bNpTDrk_upvtNKw'
      }
    },
    methods: {
      search () {
        let items = []
        axios.get('https://api.spotify.com/v1/search?q=haistakaa&type=track', {
          headers: {
            Authorization: 'Bearer ' + this.bearer
          }
        })
          .then(function (response) {
            let tracks = response.data.tracks.items
            for (let i = 0; i < tracks.length; i++) {
              items.push(tracks[i])
            }
          })
          .catch(function (error) {
            console.log(error)
          })
        this.songs = items
      },
      requestSong (song) {
        firebase.database.ref('requested').push(song)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
