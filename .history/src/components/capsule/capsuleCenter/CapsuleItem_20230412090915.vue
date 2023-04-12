<template>
  <div class="capsule-item">
    <!-- <h1>我是胶囊组件的item</h1>
    <img src="@/assets/记忆胶囊蓝.png"> -->
    <div class="block">
      <span class="demonstration">Default</span>
      <el-image :src="src" />
    </div>
    <div class="block">
      <span class="demonstration">Custom</span>
      <el-image :src="src">
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>
.capsule-itemr .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
}
.capsule-itemr .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.capsule-itemr .el-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
}

.capsule-itemr.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 14px;
}
.demo-image__placeholder .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}
</style>