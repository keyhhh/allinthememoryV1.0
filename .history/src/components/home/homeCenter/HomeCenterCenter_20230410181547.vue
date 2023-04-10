<template>
  <el-timeline  v-for="o in 15" :key="o">
    <el-timeline-item  timestamp="2018/4/12" placement="top">
      <el-card style="margin-left: 0;">
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <img src="" />
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>

    <el-timeline-item  timestamp="2018/4/2" placement="top">
      <el-card>
        <img src="./communist_party.jpg" />
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <img src="./favicon.jpg" />
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <img src="./favicon.jpg" />
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>

    <el-timeline-item  placement="top"/>

  </el-timeline>
</template>

<script>
import { reactive } from "vue";
export default {
  setup(){
    const myMemoryTestData = reactive([
      {id:1,msg:"模拟数据1",data:"模拟时间",mood:{"happy",}}
    ])
  }
};
</script>

<style>
</style>