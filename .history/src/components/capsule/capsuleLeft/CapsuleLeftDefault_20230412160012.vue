<template>
  <div class="capsule-left-default">
    <h4>创建胶囊</h4>
    <img :src="src" class="addCapsuleImg" @click="toAddCapsule" />

    <el-button text @click="dialogFormVisible = true">
      open a Form nested Dialog
    </el-button>

    <el-dialog v-model="dialogFormVisible" title="Shipping address">
      <el-form :model="form">
        <el-form-item label="Promotion name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
// import { useRouter } from "vue-router";
import beforeClickImg from "@/assets/添加按钮浅蓝色.png";
// import afterClickImg from "@/assets/添加按钮深蓝色.png";

export default {
  setup() {
    let src = ref(beforeClickImg);//添加胶囊图片
    const dialogFormVisible = ref(false)
    // const router = useRouter()

    const toAddCapsule = () => {

    };

    return { src, toAddCapsule ,};
  },
};
</script>

<style>
/* 图片的阴影效果 */
.addCapsuleImg:active {
  border-radius: 20px;
  background-color: aquamarine;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}
</style>