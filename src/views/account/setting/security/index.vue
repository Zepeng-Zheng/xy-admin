<template>
  <div class="account-security-wraper">
    <div class="item">
      <div class="header">
        账户密码
        <router-link to="/account/setting/password">修改</router-link>
      </div>
      <p>当前密码强度：{{mapPasswordStrength[user.passwordStrenth]}}</p>
    </div>
    <a-divider />
    <!-- <div class="item">
      <div class="header">
        密保手机
        <router-link to="/account/setting/phone">{{user.phone ? '修改' : '绑定'}}</router-link>
      </div>
      <p v-if="user.phone">已绑定手机：{{user.phone}}</p>
      <p v-else>未绑定手机</p>
    </div>
    <a-divider /> -->
    <div class="item">
      <div class="header">
        绑定邮箱
        <router-link to="/account/setting/email">修改</router-link>
      </div>
      <p>已绑定邮箱：{{user.email}}</p>
    </div>
    <a-divider />
    <!-- <div class="item">
      <div class="header">
        密保问题
        <a>设置</a>
      </div>
      <p>未设置密保问题，密保问题可有效保护账户安全</p>
    </div>
    <a-divider /> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      mapPasswordStrength: {
        'weak': '弱',
        'good': '中',
        'strong': '强'
      }
    }
  },
  computed: {
    user(){
      let user = this.$store.getters && this.$store.getters.user;
      if (!user) user = this.$storage.get('user') || {};
      return user;
    },
  }
}
</script>

<style lang="scss">
.account-security-wraper{
  .header{
    display: flex;
    justify-content: space-between;
  }
  p{
    color: #999;
    margin: 6px 0;
  }
  .ant-divider{
    margin: 20px 0;
  }
}
</style>