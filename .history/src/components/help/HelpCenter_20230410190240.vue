<template>
  <!-- 让el-col居中对齐 -->
  <!-- justify=center 居中对齐
       justify=start 左对齐
       justify=end 右对齐
       justify=space-between 空格间距在中间对齐
       justify=space-around 左右各占半格空格对齐 -->

       
  <el-row type="flex" justify="center">
    <!--el-col的属性，通过便利的index取消哪些卡片的style :offset="index % 2 > 0 ? 2 : 0"  
        el-col-->
    <el-col
      style="margin-bottom: 50px; flex: 0 0 35%,"
      v-for="(o,index) in helpAllTestData"
      :key="o"
      :span="8"
      :offset="index % 2 > 0 ? 2 : 0"
    >
      <el-card
        shadow="always"
        :body-style="{ padding: '0px' ,margin:'20px'}"
        @click.stop="toShowHelpDetail($event,o.id)"
      >
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>{{ o.title }}</span>
          <!-- 寻找内容标签 -->
          <el-tag class="ml-2" type="success">寻人</el-tag>
          <el-tag class="ml-2">寻物</el-tag>
          <el-tag class="ml-2" type="warning">其他</el-tag>
          <div class="bottom">
            <time class="time">{{ o.name}}</time>
            <span text class="data-section">1900-2000</span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {  reactive} from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const helpAllTestData = reactive([
      //求助信息
      { id: 11, title: "1111", name: "第一条" },
      { id: 22, title: "22222", name: "第二条" },
      { id: 33, title: "333", name: "第三条" },
      { id: 44, title: "44444444", name: "第四条" },
      { id: 55, title: "5555", name: "第五条" },
    ]);
    // const currentDate = ref("描述信息的部分内容");
    // const cardNumbers = ref(helpAllTestData.length); //求助信息的卡片数量

    const router = useRouter();

    //点击求助信息的路由，携带路由信息id的参数
    function toShowHelpDetail(event,helpDetailMsgId) {
      router.push({
        name: "helpDetail",
        query: {
          helpDetailMsgId: helpDetailMsgId, //传递关键数据，用于进行详细展示
        },
      });
    }

    return { helpAllTestData, toShowHelpDetail };
  },
};
</script>

<style>
.time {
  font-size: 12px;
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