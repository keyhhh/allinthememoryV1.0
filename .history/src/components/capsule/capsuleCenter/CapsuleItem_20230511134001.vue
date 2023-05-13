<template>
  <div
    class="capsule-item"
    v-for="capsule in cpasuleItem"
    :key="capsule.id"
    @click="toCapsuleDetail($event, capsule.isLocked, capsule.capsuleId)"
  >
    <span style="font-size: 20px">{{ capsule.tittle }} </span><br /><br />

    <div>
      <div style="display: inline-flex; align-items: center; font-size: 25px">
        <el-icon style="margin-right: 4px" :size="25">
          <Calendar />
        </el-icon>
        {{ capsule.title }}
      </div>

      <div class="countdown-footer" style="margin-top: 1%">
        {{ capsule.dateSend.slice(0, 10) }} 解锁
      </div>
    </div>

    <!-- 胶囊样式图片 -->
    <img
      v-if="!capsule.isLocked"
      class="capsule-img"
      src="@/assets/胶囊开蓝.png"
    />
    <img v-else class="capsule-img" src="@/assets/记忆胶囊蓝.png" />

    <!-- 胶囊状态样式图片 -->
    <img
      v-if="!capsule.isLocked"
      class="capsule-status-img"
      src="@/assets/开启.png"
    />
    <img v-else class="capsule-status-img" src="@/assets/沙漏.png" />

    <el-divider></el-divider>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import dayjs from "dayjs";
import { Calendar } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus"; //elementui

import { getCapsule } from "@/axios/capsule";

// import ImgCapsuleClose from "@/assets/记忆胶囊蓝.png";
// import ImgCapsuleOpen from "@/assets/胶囊开蓝.png";
// import ImgUnLock from "@/assets/开启.png";
// import ImgLock from "@/assets/沙漏.png";

export default {
  components: {
    Calendar,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    //模拟的胶囊数据
    const cpasuleItem = reactive([]);

    //如果解锁了跳转到胶囊的详细界面，妹解锁路由左侧内容
    const toCapsuleDetail = (event, isLocked, capsuleId) => {
      console.log(
        "eventevent",
        event,
        "isLockedisLocked",
        isLocked,
        "capsuleIdcapsuleIdcapsuleId",
        capsuleId
      );
      if (isLocked) {
        ElMessage.success("别急，请等到时间");
      } else {
        router.push({
          name: "capsuleDetail",
          query: {
            capsuleId: capsuleId, //传递关键数据，用于进行详细展示
          },
        });
      }
    };

    const countdown = ref(dayjs().add(1, "month").startOf("month")); //倒计时的截止时间

    //获取记忆胶囊信息
    getCapsule(store.state.user).then((res) => {
      console.log("resresresrserse", res);
      if (res.data.code) {
        for (let index = 0; index < res.data.data.length; index++) {
          cpasuleItem.push({
            // userId:
            capsuleId: res.data.data[index].capsuleId,
            title: res.data.data[index].title,
            dateCreate: res.data.data[index].dateCreate,
            dateSend: res.data.data[index].dateSend,
            typeSend: res.data.data[index].typeSend, //0:手机  1：邮件
            isLocked: res.data.data[index].isLocked, //
            message: res.data.data[index].message,
          });
        }
        console.log("cpasuleItem", cpasuleItem);
      } else {
        console.log("不对啊！！");
      }
    });

    return {
      cpasuleItem,
      toCapsuleDetail,
      countdown,
    };
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
  margin-bottom: 8%;
}
</style>