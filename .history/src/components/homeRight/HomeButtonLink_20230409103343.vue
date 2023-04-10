<template>
  <!-- <div class="button-link-div"> -->
  <el-badge :value="12" class="item">
    <el-button type="primary">
      求助信息<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button>
  </el-badge>
  <el-badge :value="12" class="item">
    <el-button>comments</el-button>
  </el-badge>
  <a-button id="button-link" type="primary" block>记忆胶囊</a-button>
  <a-button id="button-link" type="primary" block>集体记忆</a-button>
  <!-- </div> -->
  <div class="button-link-div">
    <img src="./gitee.jpg" />
    <img src="./gitee.jpg" />
    <img src="./gitee.jpg" />
  </div>
</template>

<script>
import {
  ArrowLeft,
  ArrowRight,
} from './element-plus/icons-vue'
export default {

};
</script>

<style>
.button-link-div {
  display: block;
  align-items: center;
  margin-top: 20px;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}

.button-link-div img {
  width: 30px;
  height: 30px;
  margin: 30px 15px;
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

/* .button-link-div :hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
} */
</style>




<!-- <div class="button-link">
    class="button-help"
    <button>求助信息</button>
    class="button-capsule"
    <button>记忆胶囊</button>
    class="button-collective"
    <button>集体记忆</button>
  </div> -->