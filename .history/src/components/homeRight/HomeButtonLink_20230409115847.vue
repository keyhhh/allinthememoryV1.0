<template>
  <!-- <div class="button-link-div"> -->
  <el-badge style="width: 80%; text-align: center" :value="12" class="item">
    <el-button class="button-link" id="button-link-first" type="primary">
      求助信息<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button>
  </el-badge>
  <el-button class="button-link"  id="button-link-other" type="primary">
    记忆胶囊<el-icon class="el-icon--right"><ArrowRight /></el-icon>
  </el-button>
  <el-button class="button-link"  id="button-link-other" type="primary">
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

.button-link{
  
}

#button-link-first {
  height: 50px;
  width: 100%;
  background-color: skyblue;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 1px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  /* margin: 31px 2px; */
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
}

#button-link {
  height: 50px;
  width: 80%;
  background-color: skyblue;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 1px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 31px 2px;
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