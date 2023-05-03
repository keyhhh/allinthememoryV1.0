<template>
  <div>
    <router-view />
  </div>
</template>

<script>
// import { test } from "@/axios/home";

import { reactive } from "vue";

export default {
  setup() {
    let result = reactive([]);

    test().then((res) => {
      console.log("@@@@@@@@@res.data.data=", res.data.data);
      console.log("@@@@@@@@@res.data=", res.data);
      console.log("@@@@@@@@@res=", res);
      result.push(res.data)
    });

    return { result };
  },
  mounted() {

  },
};
</script>



<style>
</style>
