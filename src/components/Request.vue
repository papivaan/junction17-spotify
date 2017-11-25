<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="search">Give me samba!</button>
    <div class="panel-body">
      <table class="table table-striped">
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
          <td><button @click="requestSong(song)">Request</button></td>
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
        songs: [],
        bearer: 'BQBM182eVuhR7JmBAw4XbDwvG6yj5mzHJeeYAH75G-D726DmKmmUAPiePhLEp-0Bp6U8TaYFMg8L2AC7EFKuZw'
      }
    },
    methods: {
      search () {
        let items = []
        axios.get('https://api.spotify.com/v1/search?q=samba%20de%20janeiro&type=track', {
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
        toastr.success('Well done! You have successfully requested a song. Keep up the good samba! ;-)')
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
