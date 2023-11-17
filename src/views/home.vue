<template>
  <div class="container">
    <h2>100 css challenges</h2>
    <ul>
      <li v-for="ch in challenges">
        <router-link :to="'/challenge/' + ch.path" :title="ch.meta.desc">{{ch.name}}</router-link>
      </li>
    </ul>
    <h2>100 css demos</h2>
    <ul>
      <li v-for="demo in demos">
        <router-link :to="'/demo/' + demo.path" :title="demo.meta.desc">{{demo.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import challenges from "../router/challenges";
import demos from "../router/demos";

export default {
  setup(){
    return {
      challenges,
      demos
    }
  }
}
</script>
<style scoped>
.container {
  width:300px;
  margin: 0 auto;
  white-space:nowrap;
  padding: 0 5px;
  overflow: hidden;
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
  transition: font-size 0.3s ease, background-color 0.3s ease;
}
</style>
