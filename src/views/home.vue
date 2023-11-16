<template>
  <div class="container">
    <h2>100 days css challenges</h2>
    <ul>
      <li v-for="ch in challenges"><router-link :to="ch.path">{{ch.name}}</router-link></li>
    </ul>
  </div>
</template>
<script>
import challenges from "../router/challenges";
export default {
  setup(){
    return {
      challenges
    }
  }
}
</script>
<style scoped>
.container {
  width:300px;
  margin: 0 auto;
}
h2 {
  text-align: center;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  text-align: left;
}

li a {
  text-decoration: none;
  display: block;
  width: 200px;

  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
  -o-transition: font-size 0.3s ease, background-color 0.3s ease;
  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
  transition: font-size 0.3s ease, background-color 0.3s ease;
}
</style>
