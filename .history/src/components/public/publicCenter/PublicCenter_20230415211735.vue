<template>
    <el-card  class="box-card" v-for="(card,index) in 10" :key="index">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
  
</template>

<script>
export default {
    setup(){
        
    }

}
</script>

<style>
/**.box-card */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 90%;
  margin:20px auto 
}
</style>