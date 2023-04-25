<template>
  <div>
    <router-view />
  </div>
</template>

<script>

import {test} from '@/axios/home'

export default ({
  setup() {
    
  },
  mounted(){
    test
  }
})
</script>



<style>

</style>
