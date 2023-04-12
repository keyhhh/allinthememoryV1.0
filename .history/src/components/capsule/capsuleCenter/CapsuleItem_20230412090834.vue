<template>
  <div>
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

</style>