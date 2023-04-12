<template>
  <div>
    <h4>创建胶囊</h4>
    <img :src="src" class="addCapsuleImg" @click="addImgKeydown" />
  </div>
</template>

<script>
import { ref } from "vue";

import beforeClickImg from "@/assets/添加按钮浅蓝色.png";
import afterClickImg from "@/assets/添加按钮深蓝色.png";

export default {
  setup() {
    let src = ref(beforeClickImg);

    const addImgKeydown = () => {
      src.value = afterClickImg;
    };

    return { src, addImgKeydown };
  },
};
</script>

<style>
.addCapsuleImg:active {
  src: url("@/");
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  /*考虑浏览器兼容性*/
  -moz-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}
</style>