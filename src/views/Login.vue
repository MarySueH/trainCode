<template>
  <div class="login">
    <div class="login_child" style="position:relative;">
      <h2 class="title">搞笑王国儿童教育机构</h2>
    </div>
    <div class="login_child login_main">
      <div class="login_text">
        <div>
          <div class="label">用户名：</div>
          <input type="text" class="input" v-model="user" />
        </div>
        <div>
          <div class="label">密码：</div>
          <input type="password" class="input" v-model="pass" />
        </div>
        <button @click="goLogin" class="loginStyle">登录</button>
      </div>
    </div>
    <div class="login_child"></div>
  </div>
</template>
<script>
  import {
    reactive,
    toRefs
  } from '@vue/composition-api'
  export default {
    name: 'Login',
    setup(props, {
      root
    }) {
      const state = reactive({
        title: '数量',
        num: 0,
        user: 'admin',
        pass: '123123'
      })
      const total = () => {
        state.num += 1
        console.log('aa', state.num)
      }
      const goLogin = () => {
        let {
          user,
          pass
        } = state
        if (!user || !pass) return;
        if (user == 'admin' && pass == '123123') {
          root.$router.push('/home')
        } else {
          alert('请重新输入登录信息')
        }

      }
      return {
        ...toRefs(state),
        total,
        goLogin
      }
    }
  }
</script>
<style scoped lang="scss">
  .title {
    position: absolute;
    left: 30px;
    bottom: 10px
  }

  .login {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .login_child {
      flex: 1;
    }

    .login_child:first-child {
      background: skyblue;
    }

    .login_child:last-child {
      background: skyblue;
    }
  }

  .login_main {
    display: flex;
    justify-content: center;
    align-items: center;

    .login_text {
      div {
        margin-top: 5px;
      }
    }
  }

  .loginStyle {
    width: 200px;
    height: 40px;
    background: cornflowerblue;
    margin-left: 100px;
    margin-top: 30px;
    border: solid 1px;
  }

  .label {
    display: inline-block;
    width: 80px;
    text-align: right;
  }

  .input {
    width: 250px;
    height: 35px;
  }
</style>