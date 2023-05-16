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

        <el-tag
          v-for="(index, id) in record.tag.length"
          :key="index"
          class="ml-2"
          type="success"
          >{{ record.tag[id] }}</el-tag
        >

        <!-- 删除按钮 -->

        <el-popconfirm
          confirm-button-text="Yes"
          cancel-button-text="No"
          :icon="InfoFilled"
          icon-color="#626AEF"
          title="确定要删除吗?"
          @confirm.stop="deleteRecord(index, $event)"
          @cancel.stop="cancelEvent"
        >
          <template #reference>
            <el-button
              style="margin-left: 15%"
              type="danger"
              >删除</el-button
            >
          </template>
        </el-popconfirm>

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
// import { useRouter } from "vue-router";

import { ElMessage } from "element-plus"; //elementui

import { getRecord, isOpen, deRecord } from "@/axios/home"; //获取记录api

export default {
  setup() {
    const store = useStore();
    // const router = useRouter();
    const recordData = reactive([
      //#region
      // //模拟我的记录信息
      // {
      //   id: 1,
      //   msg: "模拟数据我们现在能够确认距今约3000多年的甲骨文已经是非常成熟的文字体系，于1899年被发现。可以考证的汉字发展经历了甲骨文、金文、大篆、小篆、汉隶、楷书、行书、草书等过程。其中，楷书由隶书演变而成，始于东汉，通行。汉字可以划分为两个大阶段。从甲骨文字到小篆是一个阶段；从秦汉时代的隶书以下是另一个阶段。前者属于古文字的范畴 [12]  ，后者属于近代文字的范畴。现代汉字是在汉隶的基础上隶变楷化而来的，即汉字正楷字形。1",
      //   data: "模拟时间2023.4.9",
      //   recordTag: ["happy", "sad"],
      //   recordOpenOrNot:true
      // },
      // {
      //   id: 2,
      //   msg: "模拟数据2汉字是中文的书写体系，即是记录汉民族语言的书面符号体系。 [10]  它是世界上最古老的文字之一，距今已有几千多年的历史。汉字主要起源于记事的象形性图画，象形字是汉字体系得以形成和发展的基础。后来的演变经历了几千年的漫长历程，经历了甲骨文、金文、篆书、隶书、楷书、草书、行书等阶段，普遍使用楷书。",
      //   data: "模拟时间2023.4.10",
      //   recordTag: ["happy", "mad"],
      //   recordOpenOrNot:true
      // },
      // {
      //   id: 3,
      //   msg: "模拟数据3sasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      //   data: "模拟时间2023.4.11",
      //   recordTag: ["happy", "anxious"],
      //   recordOpenOrNot:true
      // },
      // {
      //   id: 4,
      //   msg: "模拟数据4",
      //   data: "模拟时间2023.4.12",
      //   recordTag: ["happy", "bored"],
      //   recordOpenOrNot:false
      // },
      // { id: 5, msg: "模拟数据5", data: "模拟时间2023.4.13", recordTag: ["happy"],recordOpenOrNot:true },
      //#endregion
    ]);

    /**
     * 切换公开私密状态
     */
    function radioChange(index, value) {
      // console.log("index", index,"value",value);//index是找到哪个记录，value是改变后的值
      // console.log(recordData[index].recordId);//获取改变的记录id

      let record = {
        //创建新的record
        recordId: recordData[index].recordId,
        isPublic: value,
      };
      console.log("record", record);
      isOpen(record).then((res) => {
        //监视是否设置为公开私密
        if (res.data.code) {
          ElMessage.success(res.data.msg);
        } else {
          recordData[index].is
          ElMessage.error(
            "无法设置公开，您的文章存在敏感词汇！" +
              "包括(" +
              res.data.data +
              ")等内容"
          );
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
          //清空记录，再push
          recordData.splice(0, recordData.length); //清空数组的方法
          getRecord(store.state.user).then((res) => {
            if (res.data.code) {
              for (let index = 0; index < res.data.data.length; index++) {
                recordData.push({
                  datePublish: res.data.data[index].datePublish.slice(0, 10),
                  image: res.data.data[index].image.split(","),
                  isMemory: res.data.data[index].isMemory,
                  isPublic: res.data.data[index].isPublic,
                  message: res.data.data[index].message,
                  recordId: res.data.data[index].recordId,
                  tag: res.data.data[index].tag.split(","),
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
    getRecord(store.state.user).then((res) => {
      if (res.data.code) {
        for (let index = 0; index < res.data.data.length; index++) {
          recordData.push({
            datePublish: res.data.data[index].datePublish.slice(0, 10),
            image: res.data.data[index].image.split(","),
            isMemory: res.data.data[index].isMemory,
            isPublic: res.data.data[index].isPublic,
            message: res.data.data[index].message,
            recordId: res.data.data[index].recordId,
            tag: res.data.data[index].tag.split(","),
            userId: res.data.data[index].userId,
          });
        }
      } else {
        //获取记录信息错误的逻辑
        console.log(res);
      }
    });

    function cancelEvent(){
      console.log("5");
    }

    return { recordData, radioChange, deleteRecord,cancelEvent };
  },
};
</script>

<style>
</style>