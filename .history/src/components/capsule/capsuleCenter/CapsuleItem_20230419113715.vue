<template>
  <div class="capsule-item" v-for="x in 2   " :key="x" @click="toCapsuleDetail($event,value)">
    <span style="font-size: 20px;">{{ capsuleItemTittle }} </span><br /><br />

      <div >
      <el-countdown format="DD [days] HH:mm:ss" :value="countdown">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            <el-icon style="margin-right: 4px" :size="12">
              <Calendar />
            </el-icon>
            Still to go until open capsule 
          </div>
        </template>
      </el-countdown>
      <div class="countdown-footer">{{ countdown.format('YYYY-MM-DD') }}</div>
    </div>

      <img class="capsule-img" :src="openCapsuleSrc" />
      <img class="capsule-status-img" :src="lockImgSrc" />
    <el-divider></el-divider>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import dayjs from 'dayjs'
import { Calendar } from '@element-plus/icons-vue'

import ImgCapsuleClose from "@/assets/记忆胶囊蓝.png";
import ImgCapsuleOpen from "@/assets/胶囊开蓝.png";
import ImgUnLock from "@/assets/开启.png";
import ImgLock from "@/assets/沙漏.png";

export default {
  components:{
    Calendar
  },
  setup() {
    const router = useRouter();
    // const route = useRoute();

    const lockOrNot = true; //接受后端胶囊是否开启的
    let openCapsuleSrc = ImgCapsuleClose //胶囊关闭图片
    let lockImgSrc = ImgLock; //胶囊关闭状态图片

    const tittle = "致给自己测试";
    const capsuleItemTittle = ref(tittle);

    if (lockOrNot) {
      //判断胶囊状态的，默认式locked
      lockImgSrc = ImgUnLock;
      openCapsuleSrc = ImgCapsuleOpen
    }

    //如果解锁了跳转到胶囊的详细界面，妹解锁路由左侧内容
    const toCapsuleDetail = (event,value) =>{
      router.push({
        name:"capsuleDetail"
      })
      console.log(event, value)
    }


    const countdown = ref(dayjs().add(1, 'month').startOf('month'))    //倒计时

    return { capsuleItemTittle,openCapsuleSrc, lockImgSrc, toCapsuleDetail, countdown };
  },
};
</script>

<style>
.capsule-item {
  /* padding-left: 10%*/
  /* display: table; */
  text-align: center;
}
.capsule-item span {
  margin-top: 5%;
}
.capsule-img {
  width: 20%;
  margin-right: 30%;
}

/* 胶囊状态图片 */
.capsule-status-img {
  width: 5%;
  height: 5%;
  background-color: aliceblue;
  border-radius: 15px;
  margin-bottom:  8%;
}
</style>