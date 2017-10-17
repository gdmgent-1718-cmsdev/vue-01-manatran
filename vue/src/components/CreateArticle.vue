<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <form action="POST" @submit.prevent="create">
      <label for="title">Article title:</label><br>
      <input id="title" name="title" placeholder="Title" v-model="title">
      <br><br>
      <label for="body">Article body:</label><br>
      <textarea id="body" name="body" placeholder="Tekst" v-model="body"></textarea>
      <br><br>
      <input type="submit" value="Create post">
    </form>
    
    <a href="/">Look at all posts</a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'create-article',
  data () {
    return {
      msg: 'Create post',
      title: '',
      body: ''
    }
  },
  methods: {
    create: function () {
      axios
        .post('http://cmsdev.localhost/node/',
        {
          '_links': {
            'type': {
              'href': 'http://cmsdev.localhost/rest/type/node/article'
            }
          },
          'title': {
            'value': this.title
          },
          'body': {
            'value': this.body
          },
          'type': {
            'target_id': 'article'
          }
        },
        {
          auth: {
            username: 'admin',
            password: 'secret'
          },
          'headers': {
            'Accept': 'application/hal+json',
            'Content-Type': 'application/hal+json',
            'X-CSRF-Token': 'kVoRDNFRpoNTAKHXoLle58r0LXFibDfLPyZmMmXWCGQ'
          }
        }).then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
