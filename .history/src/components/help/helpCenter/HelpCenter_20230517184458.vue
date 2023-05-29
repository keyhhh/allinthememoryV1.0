<template>
  <!-- 让el-col居中对齐 -->
  <!-- justify=center 居中对齐
       justify=start 左对齐
       justify=end 右对齐
       justify=space-between 空格间距在中间对齐
       justify=space-around 左右各占半格空格对齐 -->
  <el-row type="flex" justify="center">
    <!--el-col的属性，通过便利的index取消哪些卡片的style :offset="index % 2 > 0 ? 2 : 0"  
        el-col的样式中删除了 flex: 0 0 35%,-->
    <el-col
      style="margin-bottom: 50px; width: 40%"
      v-for="(help, index) in helpData"
      :key="help.id"
      :span="905"
      :offset="index % 2 > 0 ? 2 : 0"
    >
      <el-card
        shadow="always"
        :body-style="{ padding: '0px', margin: '20px' }"
        @click.stop="toShowhelp($event, help.id, help.title, help.message, help.userId)"
      >
        <div v-if="help.image != ''">
          <img
            v-for="index in 2"
            :key="index"
            :src="require('../../../assets/ALMIMG/' + help.image[0])"
            style="width: 45%; margin-right: 5%"
          />
        </div>
        <div style="padding: 14px">
          <span class="help-little-tittle">{{ help.title }}</span>
          <!-- 寻找内容标签 -->
          <el-tag
            v-for="(index, id) in help.tag.length"
            :key="index"
            class="ml-2"
            type="warning"
            >{{ help.tag[id] }}</el-tag
          >

          <div class="bottom">
            <time class="help-little-msg" style="width: 70%;line-height: 20px;text-indent:2em;">{{ help.message.slice(0, 60) }}......</time>
            <span text class="data-section">{{ help.datePublish.slice(0, 10) }}</span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import { getHelp } from "@/axios/help";

export default {
  setup() {
    const helpData = reactive([
    ]);
    // const currentDate = ref("描述信息的部分内容");
    // const cardNumbers = ref(helpData.length); //求助信息的卡片数量

    const router = useRouter();

    //点击求助信息的路由，携带路由信息id的参数
    function toShowhelp(event, helpMsgId, helpDetailMsgTitle, helpMessage, helpUserId) {
      router.push({
        name: "helpDetail",
        query: {
          helpMsgId: helpMsgId, //传递关键数据，用于进行详细展示
          helpDetailMsgTitle: helpDetailMsgTitle,
          helpMessage: helpMessage,
          helpUserId: helpUserId
        },
      });
    }

    let help = {
      datePublish: new Date(),
      message: "message",
      image: null,
      tag: null,
      title: "title",
    };
    getHelp(help).then((res) => {
      if (res.data.code) {
        console.log("resresresres", res);
        for (let index = 0; index < res.data.data.length; index++) {
          helpData.push({
            image: res.data.data[index].image.split(","),
            title: res.data.data[index].title,
            message: res.data.data[index].message,
            tag: res.data.data[index].tag.split(","),
            datePublish: res.data.data[index].datePublish,
            id: res.data.data[index].helpId,
            userId:  res.data.data[index].userId,
          });
        }
      } else {
        console.log("切换失败");
      }
    });

    return { helpData, toShowhelp };
  },
};
</script>

<style>
.help-little-tittle {
  font-size: 22px;
}

.help-little-msg {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 日期区间span */
.data-section {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.ml-2 {
  margin-left: 10px;
}
</style>