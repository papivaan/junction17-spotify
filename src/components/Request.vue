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
    name: 'Request',
    firebase: {
      requested: requestedRef
    },
    data () {
      return {
        msg: 'Add your music to party list! WOOPWOOP!',
        songs: [],
        bearer: 'BQCjYDbxBTKx1VjGznUe5rtzZ3K1Ybamrll30YFfvam7qew0n1BRShIZfA7kAxFFxMWJ3DXCdweG45PXCg4ZLQ'
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
        requestedRef.push(song)
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
