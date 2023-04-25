<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { test } from "@/axios/home";

import { reactive } from "vue";

export default {
  setup() {
    const res = reactive();

    test().then((res) => {
      this.res = 
    });

    return { res };
  },
  mounted() {
    test().then((res) => {
      console.log("@@@@@@@@@res.data.data=", res.data.data);
      console.log("@@@@@@@@@res.data=", res.data);
      console.log("@@@@@@@@@res=", res);
    });
  },
};
</script>



<style>
</style>
