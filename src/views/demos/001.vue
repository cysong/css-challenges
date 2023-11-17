<template>
  <div>
    <h2>css transition demos</h2>
    <div class="frame">
      <div v-for="num in numbers" :class="transClass(num)">{{num}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "transition",
  setup(){
    const numbers = Array.from({ length: 20 }, (_, index) => index + 1)
    return {
      numbers
    }
  },
  methods:{
    transClass(index){
      return 'card trans-' + index;
    }
  }
}
</script>
<style lang="scss" scoped>
/* css transition demo */
.frame {
}

.card {
  height: 150px;
  width: 150px;
  line-height: 150px;
  display: inline-block;
  margin: 0px 15px 30px;
  float: left;
  text-align: center;
  background-color: slategray;
  color: #ffffff;
  font-size: 60px;
  font-weight: 700;
}

.trans-1:hover {
  color: red;
  background-color: blue;
  transition: 1s color, 1s background-color;
}

.trans-2:hover {
  font-size: 120px;
  transition: 1s font-size;
}
.trans-3 {
  border-radius: 0 100%;
}
.trans-3:hover {
  border-radius: 100% 0;
  transition: 1s border-radius;
}

.trans-4:hover {
  height: 75px;
  width: 75px;
  transition: 0.5s width, 0.5s 0.5s height;
}

.trans-5:hover {
  transform: translate(0px, -300px);
  transition: 1s transform;
}

.trans-6:hover {
  transform: rotate(180deg);;
  transition: 1s;
}

.trans-7:hover {
  transform: scale(1.5);
  transition: 1s;
}

.trans-8:hover {
  transform: skew(-30deg, -30deg);
  transition: 1s;
}

.trans-9:hover {
  transform: translate(0px, -300px) scale(1.5);
  transition: 1s;
}
</style>