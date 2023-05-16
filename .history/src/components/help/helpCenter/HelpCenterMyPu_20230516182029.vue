<template>
  <el-row type="flex" justify="center">
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
        @click.stop="
          toShowhelp($event, help.id, help.title, help.message, help.userId)
        "
      >
        <div v-if="help.image != ''">
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
          <el-tag
            v-for="(index, id) in help.tag.length"
            :key="index"
            class="ml-2"
            type="warning"
            >{{ help.tag[id] }}</el-tag
          >
          <!-- 删除按钮 -->
          <br/>
          <el-button
            style="margin-top: 2%;margin-bottom: ;"
            type="danger"
            @click.stop="deleteHelp(help.helpId, $event)"
            >删除</el-button
          >
          <div class="bottom">
            <time class="help-little-msg" style="width: 60%"
              >{{ help.message.slice(0, 60) }}......</time
            >
            <span text class="data-section">{{
              help.datePublish.slice(0, 10)
            }}</span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import { getHelpMyPu } from "@/axios/help";

export default {
  setup() {
    const helpData = reactive([]);

    const router = useRouter();

    //点击求助信息的路由，携带路由信息id的参数
    function toShowhelp(
      event,
      helpMsgId,
      helpDetailMsgTitle,
      helpMessage,
      helpUserId
    ) {
      router.push({
        name: "helpDetail",
        query: {
          helpMsgId: helpMsgId, //传递关键数据，用于进行详细展示
          helpDetailMsgTitle: helpDetailMsgTitle,
          helpMessage: helpMessage,
          helpUserId: helpUserId,
        },
      });
    }

    let user = {
      userId: localStorage.getItem("userInfo"),
    };
    getHelpMyPu(user).then((res) => {
      if (res.data.code) {
        console.log("resresresres", res);
        for (let index = 0; index < res.data.data.length; index++) {
          helpData.push({
            helpId: res.data.data[index].helpId,
            image: res.data.data[index].image.split(","),
            title: res.data.data[index].title,
            message: res.data.data[index].message,
            tag: res.data.data[index].tag.split(","),
            datePublish: res.data.data[index].datePublish,
            id: res.data.data[index].helpId,
            userId: res.data.data[index].userId,
          });
        }
      } else {
        console.log("切换失败");
      }
    });

    function deleteHelp(helpId){
      console.log("helpIdhelpIdhelpIdhelpIdhelpId",helpId);
    }

    return { helpData, toShowhelp ,deleteHelp};
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