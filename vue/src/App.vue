<template>
  <div id="app">
    <header>
      <span>CMS Development</span>
      <img src="https://pbs.twimg.com/profile_images/1196384050/nieuwlogoahs_400x400.jpg" alt="AHS logo">
    </header>
    <main>      
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  background-color:#eee;
  height:calc(100vh - 120px);
  padding:32px;
}

header {
  z-index:100;
  margin: 0;
  height: 56px;
  padding: 0 32px;
  background-color: white;
  color: #C09;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
}

header img {
  height:75%;
}

a {
  display:inline-block;
  margin-top:32px;
  background-color:#0AC;
  color:white;
  padding:10px;
  border-radius:5px;
  text-decoration:none;
}
a:hover {
  background-color:#C07;
}
</style>
