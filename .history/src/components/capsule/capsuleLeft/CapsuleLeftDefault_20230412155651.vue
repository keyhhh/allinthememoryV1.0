<template>
  <div class="capsule-left-default">
    <h4>创建胶囊</h4>
    <img :src="src" class="addCapsuleImg" @click="toAddCapsule" />
  </div>
</template>

<script>
import { ref } from "vue";
import router from "@/router";
import beforeClickImg from "@/assets/添加按钮浅蓝色.png";
// import afterClickImg from "@/assets/添加按钮深蓝色.png";

export default {
  setup() {
    let src = ref(beforeClickImg);//添加胶囊图片
    const router = 

    const toAddCapsule = () => {

    };

    return { src, toAddCapsule };
  },
};
</script>

<style>





/* 图片的阴影效果 */
.addCapsuleImg:active {
  border-radius: 20px;
  background-color: aquamarine;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}

</style>