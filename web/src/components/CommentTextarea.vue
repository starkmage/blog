<template>
  <div class="pt-5">
    <div class="d-flex">
      <div class="avatar-box text-center">
        <img
        v-if="userInfo.avatarImg"
        :src="userInfo.avatarImg"
        @click="lookUserInfo"
        alt="热心网友的头像"
        >
        <i v-else @click="lookUserInfo" class="iconfont icon-touxiang hand"></i>
        <p
          class="mt-2 avatar text-center fs-lg text-grey-2"
        >{{userInfo.nickName ? userInfo.nickName : "留言"}}</p>
      </div>
      <div class="flex-1">
        <el-input type="textarea" rowa="4" v-model="messageObj.content" :placeholder="placeholder"></el-input>
        <div class="mt-3 d-flex jc-between position-emoji">
          <button @blur="showEmoji = false" class="bg-postcolor btn-none">
            <i
              class="iconfont icon-Smile hand"
              @click="showBtn = true; showEmoji = !showEmoji"
            ></i>
            <VEmojiPicker
              @focus="showEmoji = true"
              :showSearch="false"
              :emojisByRow="10"
              :emojiSize="30"
              class="emoji-picker"
              v-show="showEmoji"
              :pack="packData"
              @select="selectEmoji"
            />
          </button>
          <el-button type="primary" size="small" :loading="btnLoading" @click="fabuHandle">发表</el-button>
        </div>
      </div>
    </div>
    <el-dialog :append-to-body="true" :visible.sync="dialogVisible" width="300px" center>
      <div :class="{turnAnima: false}">

      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>