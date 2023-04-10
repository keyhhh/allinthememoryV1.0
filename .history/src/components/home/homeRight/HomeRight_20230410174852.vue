<template>
  <div id="home-right">
    <!-- <h1>测试</h1> -->
    <HomeUserinfo />
    <HomeButtonLink />
  </div>
</template>

<script>
import HomeUserinfo from "../; //头像、信息
import HomeButtonLink from "../homeRight/HomeButtonLink.vue"; //功能按钮

export default {
  components: {
    HomeUserinfo,
    HomeButtonLink,
  },
};
</script>

<style scoped>
#home-right {
    /* 不知为何就固定了div */
  /* position: absolute; */
  position: fixed;
  height: 100%;
  text-align: center;
}
</style>