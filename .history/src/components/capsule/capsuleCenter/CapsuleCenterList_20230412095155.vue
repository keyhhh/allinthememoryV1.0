<template>
  <div class="capsule-list-div">
    <CapsuleItem/>
    <CapsuleItem/>
    <CapsuleItem/>
    <CapsuleItem/>
    <CapsuleItem/>
  </div>
</template>

<script>
import CapsuleItem from "./CapsuleItem.vue";
export default {
  components: { CapsuleItem },
};
</script>

<style>
.capsule-list-div{
  /* display: table; */
}
CapsuleItem{
  /* display: table-cell;
  width: 100%; */
}
</style>