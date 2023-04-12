<template>
  <div>
    <h4>创建胶囊</h4>
    <img :src="src" class="addCapsuleImg"  :ke/>
  </div>
  
  
</template>

<script>
import {ref} from 'vue'

import beforeClickImg from '@/assets/添加按钮浅蓝色.png'
import afterClickImg from '@/assets/添加按钮深蓝色.png'

export default {
  setup(){
    let src = ref(beforeClickImg)


    return{src}
  }
}
</script>

<style>

.addCapsuleImg{

}
</style>