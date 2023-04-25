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
    test().then(res =>{
      console.log(res.data)
      console.log("@@@@@@@@@"res.data)
    })
  }
})
</script>



<style>

</style>
