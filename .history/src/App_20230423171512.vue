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
    let result = reactive({});
    let rest = result.data

    test().then((res) => {
      console.log("@@@@@@@@@res.data.data=", res.data.data);
      console.log("@@@@@@@@@res.data=", res.data);
      console.log("@@@@@@@@@res=", res);
      result = res.data
    });

    return { result, rest };
  },
  mounted() {

  },
};
</script>



<style>
</style>
