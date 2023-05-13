<template>
  <el-timeline>
    <el-timeline-item
      v-for="(record, index) in recordData"
      :timestamp="record.datePublish"
      placement="top"
      :key="record.id"
    >
      <el-card>
        <!-- 要点
            v-for优先级高于v-if，所以需要放在外边
           -->
        <div v-if="record.image[0]">
          <img
            v-for="(index, id) in record.image.length"
            :key="index"
            :src="require('../../../assets/ALMIMG/' + record.image[id])"
            style="width: 45%; margin-right: 5%"
          />
        </div>

        <!-- <video style="width: 45%" src="./《你从未离去》.mp4" controls /> -->
        <h4>{{ record.message }}</h4>
        <el-tag class="ml-2" type="success">{{ record.tag }}</el-tag>
        <!-- 删除按钮 -->
        <el-button type="danger" @click="deleteRecord(index, $event)"
          >删除</el-button
        >
        <!-- 公开开关 -->
        <el-radio-group
          style="float: right"
          v-model.number="record.isPublic"
          size="small"
          @change="radioChange(index, $event)"
        >
          <el-radio :label="1" border>公开</el-radio>
          <el-radio :label="0" border>私密</el-radio>
        </el-radio-group>
      </el-card>
    </el-timeline-item>

    <el-timeline-item placement="top" />
  </el-timeline>
</template>
  
  <script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { getRecordByDate, isOpen, deRecord } from "@/axios/home"; //获取记录api
export default {
  setup() {
    const store = useStore();
    const route = useRoute();


    //传递过来的日期参数
    const searchTagValue = route.query.searchTagValue;

    const recordData = reactive([]);

    /**
     * 切换公开私密状态
     */
    function radioChange(index, value) {
      let record = {
        //创建新的record
        recordId: recordData[index].recordId,
        isPublic: value,
      };
      console.log("record", record);
      isOpen(record).then((res) => {
        //监视是否设置为公开私密
        if (res.data.code) {
          console.log("切换成功");
        } else {
          console.log("切换失败");
        }
      });
    }
    /**
     * 删除记录
     */
    function deleteRecord(index) {
      let record = {
        //创建新的record
        recordId: recordData[index].recordId,
      };
      deRecord(record).then((res) => {
        //监视是否设置为公开私密
        if (res.data.code) {
          console.log("删除成功");
          //1清空记录，2.创建搜索记录的对象，3.再push
          recordData.splice(0, recordData.length);
          let record = {
            userId: store.state.user,
            tag: searchTagValue,
          };
          getRecordByDate(record).then((res) => {
            if (res.data.code) {
              for (let index = 0; index < res.data.data.length; index++) {
                recordData.push({
                  datePublish: res.data.data[index].datePublish.slice(0, 10),
                  image: res.data.data[index].image.split(","),
                  isMemory: res.data.data[index].isMemory,
                  isPublic: res.data.data[index].isPublic,
                  message: res.data.data[index].message,
                  recordId: res.data.data[index].recordId,
                  tag: res.data.data[index].tag,
                  userId: res.data.data[index].userId,
                });
              }
            } else {
              //获取记录信息错误的逻辑
              console.log(res);
            }
          });
        } else {
          console.log("切换失败");
        }
      });
    }

    /**
     * 获取后端记录数据
     *datePublish: "2023-05-02T22:09:27";
     *image: '"./communist_party.jpg"';
     *isPublic: 1;
     *message: "我是数据库测试的数据，我看你能不能展示出来嗷";
     *recordId: "1";
     *tag: "啥也不会";
     *userId: "1579094138604703745";
     */
    
    let record = {
      userId: store.state.user.userId,
      datePublish: searchTagValue,
    };
    console.log(record.userId);
    getRecordByDate(record).then((res) => {
      if (res.data.code) {
        for (let index = 0; index < res.data.data.length; index++) {
          recordData.push({
            datePublish: res.data.data[index].datePublish.slice(0, 10),
            image: res.data.data[index].image.split(","),
            isMemory: res.data.data[index].isMemory,
            isPublic: res.data.data[index].isPublic,
            message: res.data.data[index].message,
            recordId: res.data.data[index].recordId,
            tag: res.data.data[index].tag,
            userId: res.data.data[index].userId,
          });
        }
      } else {
        //获取记录信息错误的逻辑
        console.log(res);
      }
    });

    return { recordData, radioChange, deleteRecord };
  },
};
</script>
  
  <style>
</style>