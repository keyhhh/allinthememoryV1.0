<template>
  <div>
    <h1>tittle</h1>
    <p>
      
    </p>
  </div>
</template>

<script>
export default {
  setup(){
    const capsuleId = route.query.capsuleId; //胶囊界面传递的胶囊id


    return {capsuleId}
  }
};
</script>

<style>
</style>