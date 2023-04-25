<template>
  
  
  <el-row :gutter="20">
    <el-col :span="19" id="help-center">
      <CollectivityTest/>
    </el-col>

    <el-col :span="5" id="help-right"  style="padding:0">
      <HomeRight/>
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