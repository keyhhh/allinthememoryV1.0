<template>
  <!-- <div class="button-link-div"> -->
  <el-badge style="width: 80%; text-align: center" :value="12" class="item">
    <router-link to="/help"><el-button id="button-link-first" type="primary" >
      求助信息<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button></router-link>
  </el-badge>
  <el-button id="button-link-other" type="primary">
    记忆胶囊<el-icon class="el-icon--right"><ArrowRight /></el-icon>
  </el-button>
  <el-button id="button-link-other" type="primary">
    集体记忆<el-icon class="el-icon--right"><ArrowRight /></el-icon>
  </el-button>
  <!-- </div> -->
  <!-- 链接按钮组 -->
  <div class="button-link-div">
    <img src="./gitee.jpg" />
    <img src="./gitee.jpg" />
    <img src="./gitee.jpg" />
  </div>
</template>
<!-- element-plus/icons-vue, -->
<script>
import { ArrowRight } from "@element-plus/icons-vue";
export default {
  components: {
    ArrowRight,
  },
};
</script>

<style>
/* badge徽章的class */
.item {
  margin-top: 31px;

  margin-bottom: 31px;
}

#button-link-first{
  width: 100%;
  height: 50px;
  background-color: skyblue;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 1px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
}


#button-link-other {
  width: 80%;
  margin: 31px 2px;
  height: 50px;
  background-color: skyblue;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 1px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
}

.el-button :hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

/* 链接按钮组的div */
.button-link-div {
  display: block;
  align-items: center;
  margin-top: 20px;
}

.button-link-div img {
  width: 30px;
  height: 30px;
  margin: 30px 15px;
}
</style>




<!-- <div class="button-link">
    class="button-help"
    <button>求助信息</button>
    class="button-capsule"
    <button>记忆胶囊</button>
    class="button-collective"
    <button>集体记忆</button>
  </div> -->