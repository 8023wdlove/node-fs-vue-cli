

<template>
  <div>
    <div class="header">
      <div class="center">
        <div class="logo">
          <!-- <img src="../../assets/images/logo.png" alt> -->
        </div>
        <div class="nav">
          <ul>
            <li
              v-for="(item, index) in nav"
              @click="select(item.path,index)"
              :class="item.active == true? 'active' : ''"
              :key="index"
            >{{item.name}}</li>
          </ul>
        </div>
        <div class="search">
          <input type="text" placeholder="请输入关键词">
          <!-- <img class="searchEnter" src="../../assets/images/allSearch.png" alt> -->
        </div>
        <div class="loginBox" @mouseenter="enter()" @mouseleave="leave()" >
          <div class="login" @click="login()">
            <span v-show="loginBox2">{{hasLogin}}</span>
            <img v-show="!loginBox2" :src="head_imgurl" :alt="hasLogin">
          </div>
          <div class="hasLogin" v-show='seen'>
            <span class="u_ddl_arrow">
              <em></em>
            </span>
            <div class="topMySelf">
              <ul class="headUl">
                <li>个人中心</li>
                <li>退出登录</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Login v-if="loginBox == true" @closeLogin="closeLogin"></Login> -->
  </div>
</template>

<script>
// import Login from "../login/login";
export default {
  name: "",
  data() {
    return {
      nav: [
        {
          name: "首页",
          path: "/",
          active: false
        },
        {
          name: "公司剖析",
          path: "/dissect",
          active: false
        },
        {
          name: "估值定价",
          path: "/appraisement",
          active: false
        },
        {
          name: "新股询价",
          path: "/enquiry",
          active: false
        },
        {
          name: "行情",
          path: "/market",
          active: false
        },
        {
          name: "意见领袖",
          path: "/leader",
          active: false
        },
        {
          name: "快讯",
          path: "/news",
          active: false
        },
        {
          name: "课堂",
          path: "/classroom",
          active: false
        },
        {
          name: "话题",
          path: "/topic",
          active: false
        }
      ],
      loginBox: false,
      loginBox2: true,
      userInfo: {},
      hasLogin: "",
      head_imgurl: "",
      seen:false,
    };
  },

  components: {
    // Login
  },

  created() {
    // for (const i in this.nav) {
    //   if (this.$route.path.includes(this.nav[i].path) == true)
    //     this.nav[i].active = true;
    // }
    // // localStorage.clear()
    // if (localStorage.getItem("autoLogin") == 2) localStorage.clear();
  },

  methods: {
    // select(navpath, index) {
    //   //导航

    //   // this.$router.push(navpath)
    //   let routeData = this.$router.resolve(navpath);
    //   window.open(routeData.href, "_blank");
    //   for (let i in this.nav) {
    //     if (i == index) this.nav[i].active = true;
    //     else this.nav[i].active = false;
    //   }
    // },

    login() {
      //点击登录
      if (this.loginBox2 == false) {
        this.$message.success("您已登录");
        return;
      }
      this.loginBox = true;
    },

    closeLogin(content) {
      //关闭登录框
      this.loginBox = content;
    },
    enter(){ 
        this.seen = true; 
    },
     leave(){ 
        this.seen = false;
    },
  },

  computed: {
    change2() {
      return localStorage;
    }
  },

  watch: {
    change2: {
      handler(val, oldVal) {
        if (val.token && val.token != null) {
          // console.log(1)
          (this.hasLogin = "已登录"),
            (this.head_imgurl = localStorage.getItem("head_imgurl"));
          this.loginBox2 = false;
        }
        if (!val.token || val.token == null) {
          // console.log(2)
          this.hasLogin = "登录";
          this.loginBox2 = true;
        }
      },
      immediate: true
    },
    $route: {
      handler(val, olaVal) {
        console.log(val);
        for (let i in this.nav) {
          this.nav[i].active = false;
          if (this.nav[i].path == val.path) {
            this.nav[i].active = true;
          }
        }
      },
      immediate: true
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 66px;
  background-color: #0b1016;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.header .center {
  width: 1180px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav {
  width: 780px;
}

.header .nav ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav ul li {
  height: 100%;
  padding: 0 18px;
  line-height: 66px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  position: relative;
}

.nav ul li:after {
  width: 0;
  height: 3px;
  position: absolute;
  content: "";
  left: 50%;
  bottom: 0;
  transition: all 0.3s;
  background: #f61041;
}

.nav ul li:hover:after {
  width: 100%;
  left: 0;
}

.nav ul .active {
  color: #f61041;
}

.search {
  position: relative;
  margin-right: 30px;
}

.searchEnter {
  width: 22px;
  height: 22px;
  position: absolute;
  right: 10px;
  top: 1px;
  cursor: pointer;
}

.search input {
  width: 150px;
  height: 24px;
  border-radius: 14px;
  border: none;
  outline: none;
  box-shadow: none;
  text-indent: 10px;
}

.login span {
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.login span:hover {
  color: #f61041;
}

.loginBox {
  width: 90px;
  text-align: center;
}
.login img {
  border-radius: 6px;
  border: 1px solid #ffffff;
  cursor: pointer;
}
.hasLogin {
  height: auto;
  overflow: hidden;
  border: solid 1px #d1d1d1;
  background: #fff;
  overflow: hidden;
  -webkit-box-shadow: 1px 1px 5px #d1d1d1;
  -moz-box-shadow: 1px 1px 5px #d1d1d1;
  -ms-box-shadow: 1px 1px 5px #d1d1d1;
  -o-box-shadow: 1px 1px 5px #d1d1d1;
  box-shadow: 1px 1px 5px #d1d1d1;
  position: absolute;
  z-index: 1;
  top: 65px; 
}
.u_ddl_arrow {
  position: absolute;
  z-index: 2;
  top: -10px;
  left: 50%;
  margin-left: -4px;
  display: inline-block;
  width: 0;
  height: 0;
  line-height: 0;
  border: 5px dashed transparent;
  border-bottom: 5px solid #e3e3e3;
  font-size: 0;
} 
.topMySelf .headUl li {
  font-size: 14px;
  color: #000000;
  padding: 0px 10px;
  cursor: pointer;
}
.topMySelf .headUl li:hover {
  background-color: #38f;
  color: #fff;
} 
</style>
