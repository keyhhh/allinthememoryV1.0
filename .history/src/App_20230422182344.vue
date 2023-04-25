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
    test().then(res ->{
      console.log();
    })
  }
})
</script>



<style>

</style>
