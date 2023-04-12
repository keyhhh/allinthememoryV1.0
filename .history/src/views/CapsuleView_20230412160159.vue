<template>
  <el-row :gutter="20">
    <!-- /**capsule-left     span:栅格占据的列数 */ 
    路由显示点击胶囊后信息
    -->
    <el-col :span="4" id="capsule-left">
      <router-view id="capsuleLeft" name="capsuleLeft"></router-view>
     </el-col>

    <!-- /**capsule-center */ -->
    <el-col :span="15" id="capsule-center">
      <router-view id="capsuleCenter" name="capsuleCenter"></router-view>
    </el-col>

    <!-- /**capsule-rignt */ -->
    <el-col :span="5" id="capsule-right" style="padding: 0">
      <HomeRight></HomeRight>
    </el-col>
  </el-row>
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
</template>
  
  <script>
import { useStore } from "vuex";
import { ref } from "vue";
import HomeRight from "../components/home/homeRight/HomeRight.vue";
export default {
  name: "CapsuleView",
  components: {  HomeRight },
  setup() {
    const store = useStore();
    store.dispatch("changeWhichPage", 2);
  },
};
</script>
  
<style >
.el-row {
  margin-bottom: 20px;
  /* background-color: aqua; */
}
.el-row:last-child {
  margin-bottom: -10px;
  /* background-color: blue; */
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

/**capsule-left */
#capsule-left {
  background-color: #f5f7fa;
}

/**capsule-center */
#capsule-center {
  /* background-color: darkgreen; */
  margin-bottom: 60px;
}

/**capsule-right */
#capsule-right {
  border-left: 1px solid #000;
  background-color: #dedfe0;
}
</style>