<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="search">Give me samba!</button>
    <ul>
      <li v-for="song in songs">{{ song.name }}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Add your music to party list! WOOPWOOP!',
        songs: [],
        bearer: 'BQA7KFZSFlPOCzR5Mf_WOARFjgKw8V_sfdD_XvnFj24H3nhYQCz3WqV2eAe14O2KmvKZf9XBJqBqdNfahGjk5A'
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
