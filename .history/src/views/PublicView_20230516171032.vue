<template>
  <el-row :gutter="20">
    <!-- /**public-left     span:栅格占据的列数 */ -->
    <el-col :span="4" id="public-left">
      <publicLeft/>
     </el-col>

    <!-- /**public-center */ -->
    <el-col :span="15" id="public-center">
      <PublicCenter/>
    </el-col>

    <!-- /**public-rignt */ -->
    <el-col :span="5" id="public-right" style="padding: 0">
      <HomeRight></HomeRight>
    </el-col>
  </el-row>
</template>

<script>
import publicLeft from "@/components/public/publicLeft/PublicLeft.vue"
import PublicCenter from "@/components/public/publicCenter/PublicCenter.vue"
import HomeRight from "../components/home/homeRight/HomeRight.vue";
export default {
    name:"PublicView",
    components:{publicLeftHomeRight, PublicCenter},

}
</script>

<style>
.el-row {
  margin-bottom: 20px;
  /* background-color: aqua; */
}
.el-row:last-child {
  margin-bottom: -10px;
  /* background-color: blue; */
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

/**public-left */
#public-left {
  background-color: #f5f7fa;
}

/**public-center */
#public-center {
  /* background-color: darkgreen; */
  margin-bottom: 60px;
}

/**public-right */
#public-right {
  border-left: 1px solid #000;
  background-color: #dedfe0;
}
</style>