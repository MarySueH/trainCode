<template>
  <div class="home">
    <el-container class="main">
      <el-header style="height:120px">
        <div class="header_top">
          <div class="top_left">
            <el-image :src="logoImg" style="width:120px;height:100%;border-radius:50%"></el-image>
          </div>
          <div class="top_right">
            <div class="nav_top">
              <h1>搞笑王国儿童教育机构</h1>
            </div>
            <!-- <div class="nav_bot">
              <NavMenu></NavMenu>
            </div> -->
            <ul class="nav_bott" style="margin-top:30px;">
              <!-- <ul> -->
                <li v-for="(item,i) in navArr" :key="i" class="li_top" @click="getVal(i)">
                  <div>
                    <el-image :src="require(`../../assets/img/${item.titleImg}`)" class="imgInner"></el-image>
                    <div class="commonFont">{{item.title}}</div>
                  </div>
                  <div :class="currentNum==i?mask1:mask"></div>
                </li>
              <!-- </ul> -->
            </ul>
            <div style="display:flex;">
              <div class="welcome">
                <span v-popover:popover class="commonFont">欢迎您，admin</span>
                <el-popover placement="bottom" width="100" trigger="hover" ref="popover">
                  <div class="editpass commonFont">修改密码</div>
                </el-popover>
              </div>
              <div class="exit commonFont">
                <span>退出</span>
              </div>
            </div>
          </div>
        </div>
        <div class="header_bottom">

        </div>
      </el-header>
      <el-container class="main_cont">
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Aside from './navmenu/aside'
  // import NavMenu from './navmenu/navmenu'
  export default {
    name: 'Home',
    components: {
      Aside,
      // NavMenu
    },
    data() {
      return {
        currentNum:0,
        logoImg: require('../../assets/img/logo.jpg'),
        navArr: [{
          titleImg: 'bad.jpg',
          title: '坏习惯'
        }, {
          titleImg: 'money.jpg',
          title: '财务'
        }, {
          titleImg: 'move.jpg',
          title: '电影推荐'
        }, {
          titleImg: 'problem.jpg',
          title: '问题反馈'
        }, {
          titleImg: 'smailer.jpg',
          title: '正能量'
        }, {
          titleImg: 'teacher.jpg',
          title: '教师管理'
        }]

      }
    }

  }
</script>
<style scoped lang="scss">
  .commonFont {
    font-size: 16px;
  }

  .home {
    height: 100%;
  }

  .main {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url('../../assets/img/bg.jpg') no-repeat;
    background-size: 100% 100%;
  }

  .el-header {
    background-color: cadetblue;
    color: #333;
    padding-left: 0;
    padding-right: 0;
    ;

    // opacity: 0.85;
    .header_top {
      display: flex;
      flex-direction: row;
      height: 100%;

      .top_left {
        width: 225px;
        text-align: center;
      }

      .top_right {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-left: 10px;
        margin-right: 20px;

        .nav_top {
          min-width: 380px;
        }

        .nav_bott {
          width: 100%;
        }
      }

    }
  }

  .el-aside {
    background: cadetblue;
    opacity: 0.85;
  }

  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
    opacity: 0.85;
  }

  .welcome {
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }

  .welcome:hover {
    color: #fff;
  }

  .exit:hover {
    background: #fff;
  }

  .editpass {
    cursor: pointer;
  }

  .editpass:hover {
    background: #e5e5e5;
  }

  .exit {
    // margin-left:20px;
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }

  .imgInner {
    width: 90px;
    height: 90px;
  }

  .nav_bott>li {
    width: 130px;
    height: 130px;
    text-align: center;
    float: left;
  }

  h1 {
    font-size: 26px;
  }
  .li_top{
    position: relative;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 130px;
    height: 130px;
    background: #000;
    opacity: 0.7;
  }
  .mask1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 130px;
    height: 130px;
    background: #000;
    opacity: 0.7;
  }
</style>