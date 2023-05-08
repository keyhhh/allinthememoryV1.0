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
        @click.stop="toShowhelp($event, help.id, help.title, help.message)"
      >
        <div v-if="help.image">
          <img
            v-for="(index, id) in help.image.length"
            :key="index"
            :src="require('../../../assets/ALMIMG/' + help.image[id])"
            style="width: 45%; margin-right: 5%"
          />
        </div>
        <div style="padding: 14px">
          <span class="help-little-tittle">{{ help.title }}</span>
          <!-- 寻找内容标签 -->
          <el-tag class="ml-2" type="success">{{ help.tag }}</el-tag>
          <div class="bottom">
            <time class="help-little-msg">{{ help.message }}</time>
            <span text class="data-section">{{ help.datePublish }}</span>
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
      //求助信息
      // { id: 11, title: "标题标题标题标题标题", name: "第一条我的撒旦坏哦短短是否我仿佛为无法微服务服务额范文芳我无法违法违法违法违法微服务而非我二分                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ..." },
      // { id: 22, title: "22222", name: "第二大时代花都年的海域我带的怀孕的话条..." },
      // { id: 33, title: "333", name: "第三条撒大苏打快速的话都还哦库很嗲或多个..." },
      // { id: 44, title: "44444444", name: "第四条大三大四大苏打撒旦阿达啊阿达阿达的啊..." },
      // { id: 55, title: "5555", name: "第五条委屈委屈饿去企鹅请二位驱蚊器恶趣味..." },
    ]);
    // const currentDate = ref("描述信息的部分内容");
    // const cardNumbers = ref(helpData.length); //求助信息的卡片数量

    const router = useRouter();

    //点击求助信息的路由，携带路由信息id的参数
    function toShowhelp(event, helpMsgId, helpDetailMsgId, helpMessage) {
      router.push({
        name: "helpDetail",
        query: {
          helpMsgId: helpMsgId, //传递关键数据，用于进行详细展示
          helpDetailMsgTirle: helpDetailMsgId,
          helpMessage: helpMessage
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
            tag: res.data.data[index].tag,
            datePublish: res.data.data[index].datePublish,
            id: res.data.data[index].helpId
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