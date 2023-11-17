<template>
  <div class="frame">
    <div class="card">rainbow</div>
  </div>
</template>
<script>

</script>
<style scoped>
/* css animation demo */
.frame {}

.card {
  margin: 0 auto;
  height:200px;
  width: 200px;
  border-radius: 3px;
  /*border: 1px solid;*/
  background-color: #FF0000;
  text-align: center;
  line-height: 200px;
  font-size: 24px;
  color: white;
}

.card:hover {
  animation: 2s rainbow2 infinite;
}

@keyframes rainbow {
  0% { background: #FF0000; }
  50% { background: orange; }
  100% { background: yellowgreen; }
}

@keyframes rainbow2 {
  0% {
    background-color: #FF0000; /* 红色 */
  }
  14.28% {
    background-color: #FF7F00; /* 橙色 */
  }
  28.56% {
    background-color: #FFFF00; /* 黄色 */
  }
  42.84% {
    background-color: #00FF00; /* 绿色 */
  }
  57.12% {
    background-color: #0000FF; /* 蓝色 */
  }
  71.40% {
    background-color: #4B0082; /* 靛色 */
  }
  85.68% {
    background-color: #800080; /* 紫色 */
  }
  100% {
    background-color: #FF0000; /* 回到红色 */
  }
}
</style>