<template>
     <div>

    <!-- banner -->
    <div class="message-banner">
      <!-- 弹幕输入框 -->
      <div class="message-container">
        <h1 class="message-title">留言板</h1>
        <div class="animate__animated animate__fadeInUp message-input-wrapper">
          <input v-if="userVo == null"
              style="color: #1b1c1d; width: 20%"
              v-model="messageNickname"
              @click="show = true"
              @keyup.enter="addToList"
              placeholder="昵称"
          />
          <input
              style="color: #1b1c1d;"
              v-model="messageContent"
              @click="show = true"
              @keyup.enter="addToList"
              placeholder="说点什么吧"
          />
          <el-button
              round
              type="info"
              class="ml-3 animate__animated animate__backInRight"
              @click="addToList"
              v-show="show"
          >
            发送
          </el-button>
        </div>
      </div>
      <!-- 弹幕列表 -->
      <div class="barrage-container">
        <vue-baberrage :barrageList="barrageList">
          <template v-slot:default="slotProps">
            <span class="barrage-items">
              <img
                  :src="slotProps.item.avatar"
                  width="30"
                  height="30"
                  style="border-radius:50%"
              />
              <span class="ml-2">{{ slotProps.item.nickname }} :</span>
              <span class="ml-2">{{ slotProps.item.messageContent }}</span>
            </span>
          </template>
        </vue-baberrage>
      </div>
    </div>
  </div>
</template>


<script>

export default {

}
</script>

<style>

</style>