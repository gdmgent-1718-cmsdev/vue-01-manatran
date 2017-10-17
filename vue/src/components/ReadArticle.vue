<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ post.title }}</h3>
    <span v-html="post.body"></span>
    
    <a href="/#/create">Create new post</a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'read-article',
  data () {
    return {
      msg: 'Read post',
      post: {
        title: '',
        body: ''
      }
    }
  },
  created () {
    axios
    .get('http://cmsdev.localhost/node/1?_format=hal_json')
    .then(response => {
      this.post.title = response.data.title[0].value
      this.post.body = response.data.body[0].value
    })
    .catch(({ message: error }) => {
      console.info(error)
    })
  }
}
</script>
