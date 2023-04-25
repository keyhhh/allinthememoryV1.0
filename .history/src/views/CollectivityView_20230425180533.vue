<template>
  
  
  <el-row :gutter="20">
    <!-- /**help-left
       span:栅格占据的列数
       */ -->
    <el-col :span="4" id="help-left">
      <!-- <div class="grid-content ep-bg-purple" /> -->
      <HelpLeft/>
    </el-col>

    <!-- /**help-center */
        路由显示点击原始求助卡片详细信息
    --> 
    <el-col :span="15" id="help-center">
      <CollectivityTest/>
    </el-col>

    <!-- /**help-rignt */ -->
    <el-col :span="5" id="help-right"  style="padding:0">
      <HomeRight></HomeRight>
    </el-col>
  </el-row>
</template>

<script>
import CollectivityTest from '../components/collectivity/CollectivityMain.vue'
import HomeRight from "../components/home/homeRight/HomeRight.vue"
export default {
  components:{CollectivityTest, HomeRight},
  setup(){

  },

}
</script>

<style>

</style>