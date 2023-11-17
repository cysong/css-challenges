<template>
  <div class="center">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.center {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  ul {
    position: relative;
    width: 500px;
    height: 320px;
    overflow: hidden;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    li {
      list-style: none;
      border-radius: 50%;
      border: 20px solid #000;
      position: absolute;
      top: 100%;
      left: 50%;
      border-bottom-color: transparent !important;
      border-left-color: transparent !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, .5);
      transform: translate(-50%, -50%) rotate(-45deg);
      animation: animate 5s infinite;

      &:nth-child(1) {
        width: 80px;
        height: 80px;
        border-color: #800080; /* 紫色 */
      }

      &:nth-child(2) {
        width: 120px;
        height: 120px;
        border-color: #4B0082; /* 靛色 */
      }

      &:nth-child(3) {
        width: 160px;
        height: 160px;
        border-color: #0000FF; /* 蓝色 */
      }

      &:nth-child(4) {
        width: 200px;
        height: 200px;
        border-color: #00FF00; /* 绿色 */
      }

      &:nth-child(5) {
        width: 240px;
        height: 240px;
        border-color: #FFFF00; /* 黄色 */
      }

      &:nth-child(6) {
        width: 280px;
        height: 280px;
        border-color: #FF7F00; /* 橙色 */
      }

      &:nth-child(7) {
        width: 320px;
        height: 320px;
        border-color: #FF0000; /* 红色 */
      }

    }
  }
}

@keyframes animate {
  0% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(315deg);
  }
}
</style>