<template>
  <div class="about">
    <h1>This is an 胶囊 page</h1>
  </div>
</template>
  
  <script>
import { useStore } from "vuex";
export default {
  name: "CapsuleView",
  components: {},
  setup() {
    const store = useStore();
    store.dispatch("changeWhichPage", 2);
  },
};
</script>
  
  <style >
</style>