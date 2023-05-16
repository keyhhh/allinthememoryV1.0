<template>
  <div>
    <h1>{{ capsuleShow.title }}</h1>
    <p style="text-indent:2em;line-height: 50px;letter-spacing:1px">
      {{ capsuleShow.message }}
    </p>
    <el-popconfirm
            confirm-button-text="Yes"
            cancel-button-text="No"
            :icon="InfoFilled"
            icon-color="#626AEF"
            title="确定要删除吗?"
            @confirm.stop="deleteCapsule"
            @cancel.stop="cancelEvent"
          >
            <template #reference>
              <el-button style="margin-top: 5%;float: right;margin-right: 10%;" type="danger"  @click.stop=""
                >删除</el-button
              >
            </template>
          </el-popconfirm>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRoute } from "vue-router";

import { getCapsuleById,deCapsule } from "@/axios/capsule";
export default {
  setup(){
    const route = useRoute();
    const capsuleId = route.query.capsuleId; //胶囊界面传递的胶囊id

    //模拟胶囊数据，这里应该只会显示一组
    const capsuleShow = reactive({
      capsuleId: "",
      title: "",
      message: "",
    });

    /**
     * 根据胶囊传来的胶囊id，查询胶囊的全部信息
     */
     let capsule = {
      capsuleId: capsuleId
    }
    getCapsuleById(capsule).then((res) =>{
      if (res.data.code) {
        console.log("详细界面的饭hi之2",res);
        capsuleShow.capsuleId= res.data.data.capsuleId,
        capsuleShow.title= res.data.data.title,
        capsuleShow.message= res.data.data.message
        console.log("capsuleShowcapsuleShowcapsuleShow",capsuleShow);
      }else{
        console.log();
      }
    })

    
    
    //删除时的旗袍弹出框点击yes的方法
    function deleteCapsule()  {
      deCapsule(capsule).then((res) =>{
        if (res.data.code) {}else{
          
        }
      })
    }

    
    //删除时的旗袍弹出框点击no的方法
    function cancelEvent()  {
      console.log("cancel!");
    }

    return {capsuleId,capsuleShow}
  }
};
</script>

<style>
</style>