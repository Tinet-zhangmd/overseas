<template>
  <div class="page">
    <!-- 头部 -->
    <div class="head">
      <!-- 头部选择地区 -->
      <div class="head_area">
        <div class="area_content">
          <ul class="font_area">
            <li>
              <img :src="position" alt />
              <span>热门地区</span>
            </li>
            <li>北京</li>
            <li>上海</li>
            <li>广州</li>
            <li>湖北</li>
            <li>
              <span>更多地区</span>
              <img :src="arrowdown" alt />
            </li>
          </ul>
        </div>
      </div>

      <!-- 头部中间区域 -->
      <div class="head_middle">
        <div class="middle_content">
          <img :src="logo" alt @click="$router.push('/index')" />

          <!-- 搜索 -->
          <div class="search_box">
            <div class="search">
              <input type="text" />
              <span>搜索</span>
            </div>
            <div class="keywords">
              <ul>
                <li>院校排名</li>
                <li>成功案例</li>
                <li>留学评估</li>
                <li>托福雅思</li>
              </ul>
            </div>
          </div>
          <div class="telephone">
            <img :src="tel" alt />
            <span>0571-88888888</span>
          </div>
        </div>
      </div>

      <!-- 头部导航 -->
      <div class="head_nav">
        <div class="nav_content">
          <ul>
            <li>出国留学</li>
            <li>社会实践</li>
            <li>海外服务</li>
            <li>在线课堂</li>
            <li>成功案例</li>
            <li @click="$router.push('/aboutus')">精英团队</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入模块
import ajax from "@utils/config";
import foot from "@/components/foot";
export default {
  components: {
    foot
  },
  data() {
    return {
      // 图片
      position: require("@/assets/img/index/position.png"),
      arrowdown: require("@/assets/img/index/arrow-down.png"),
      arrowright: require("@/assets/img/index/arrow-right.png"),
      logo: require("@/assets/img/index/logo.png"),
      tel: require("@/assets/img/index/1dh.png")
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    getHomePage() {
      ajax({
        url: "member-api-impl/user/getHomePageInfo",
        optionParams: {}
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            console.log(res);
          } else {
            console.log(res);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commin.scss";
.head {
  //头部地区
  .head_area {
    background: #f2f2f2;

    .area_content {
      width: 1200px;
      height: 38px;
      margin: 0 auto;
      line-height: 34px;

      ul {
        li {
          float: left;
          margin-right: 29px;
          text-align: center;

          img {
            display: inline-block;
            width: 14px;
            height: 16px;
            margin-right: 8px;
            vertical-align: middle;
          }

          span {
            display: inline-block;
            vertical-align: middle;
          }
        }

        li:last-child img {
          width: 11px;
          height: 6px;
          margin-left: 8px;
        }
      }
    }
  }

  // 头部中间区域
  .head_middle {
    .middle_content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1200px;
      height: 109px;
      margin: 0 auto;
      img {
        cursor: pointer;
      }
      .search_box {
        margin-left: 125px;

        .search {
          padding-left: 10px;
          overflow: hidden;
          border: 1px solid #8a77f6;
          border-radius: 6px;

          input {
            width: 360px;
            height: 42px;
            margin: 0;
            padding: 0;
            outline: none;
            border: none;
            vertical-align: top;
          }

          span {
            display: inline-block;
            width: 60px;
            height: 42px;
            background-color: #8a77f6;
            vertical-align: top;
            text-align: center;
            line-height: 42px;
            font-size: 16px;
            font-family: MicrosoftYaHeiLight;
            font-weight: bold;
            color: #fff;
          }
        }

        .keywords {
          ul {
            li {
              float: left;
              margin: 11px 22px 0 0;
              font-size: 12px;
              font-family: MicrosoftYaHeiLight;
              font-weight: 300;
            }
          }
        }
      }

      //   电话
      .telephone {
        display: inherit;
      }
    }
  }

  // 头部导航
  .head_nav {
    background-color: #fbd301;
    height: 60px;

    .nav_content {
      width: 1200px;
      margin: 0 auto;

      ul {
        li {
          float: left;
          margin-right: 100px;
          padding: 19px 0;
          font-size: 16px;
          font-family: MicrosoftYaHeiLight;
          font-weight: 300;
          color: #580643;
          cursor: pointer;
        }

        li:first-child {
          margin-right: 169px;
          padding: 18px 50px;
          font-size: 18px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: #fff;
          background-color: #8a77f6;
        }
      }
    }
  }
}
</style>
