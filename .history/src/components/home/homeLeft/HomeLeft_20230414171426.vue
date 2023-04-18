<template>
    <HomeSearch/>
    <HomeAddRecord style="margin-top:30%;"/>
    <BackToTop/>
</template>

<script>
import HomeSearch from "./HomeSearch.vue";
import BackToTop from "@/components/common/BackToTop.vue";
import HomeAddRecord from "./HomeAddRecord.vue"

export default {
  components: { HomeSearch, BackToTop, HomeAddRecord },
};
</script>

<style>
</style>