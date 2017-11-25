<template>
  <div class="container-fluid">
    <h1>{{ msg }}</h1>
    <form id="search" v-on:submit.prevent="search">
      <label for="search">Search by song name</label>
      <input title="search" type="text" v-model="searchTerm" />
      <input class="btn btn-secodary" type="submit" value="Search" />
    </form>
    <button class="btn btn-primary" @click="samba">Give me samba!</button>
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
  import toastr from 'toastr'

  export default {
    name: 'Request',
    data () {
      return {
        msg: 'Add your music to party list! WOOPWOOP!',
        searchTerm: '',
        songs: []
      }
    },
    methods: {
      search () {
        let items = []
        axios.get('https://junction17-spotify-proxy.herokuapp.com/api/search?q=' + this.searchTerm + '&type=track')
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
      samba () {
        this.searchTerm = ''
        let items = []
        axios.get('https://junction17-spotify-proxy.herokuapp.com/api/search?q=samba%20de%20janeiro&type=track')
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
        toastr.success('Well done! You have successfully requested a song. Keep up the good samba! ;-)')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
