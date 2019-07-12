<template>
  <div class="page">
    <top></top>
    <!-- 主要内容区域 -->
    <div class="main">
      <div class="content">
        <!-- 目录 -->
        <div class="content_left">
          <ul>
            <li
              :class="[item.selected?'isSelected':'usual']"
              v-for="item in typeList"
              @click="selectItem(item)"
            >{{item.name}}</li>
          </ul>
        </div>

        <div class="content_right">
          <!-- 案例课程 -->
          <div class="content_case" v-for="item in newsArray" @click="$router.push('/article')">
            <div class="casetitle">
              <span>{{item.title}}</span>
              <span class="date">{{item.createTime}}</span>
            </div>
            <!-- 渲染新闻内容 -->
            <div class="casecontent" v-html="item.content"></div>
          </div>

          <!-- 页码 -->
          <div class="content_btn">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="total"
              :page-size="1"
              :pager-count="5"
              @current-change="conso"
              :current-page.sync="currentPage"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <foot></foot>
  </div>
</template>

<script>
//引入模块
import ajax from "@utils/config";
import foot from "@/components/foot";
import top from "@/components/top";
export default {
  components: {
    foot,
    top
  },
  data() {
    return {
      // 图片
      position: require("@/assets/img/index/position.png"),
      arrowdown: require("@/assets/img/index/arrow-down.png"),
      arrowright: require("@/assets/img/index/arrow-right.png"),
      arr: require("@/assets/img/index/arr.png"),
      arl: require("@/assets/img/index/arl.png"),
      logo: require("@/assets/img/index/logo.png"),
      tel: require("@/assets/img/index/1dh.png"),
      //左侧栏
      typeList: [
        {
          name: "留学介绍",
          selected: true
        },
        {
          name: "公司优势",
          selected: false
        },
        {
          name: "公司荣誉",
          selected: false
        },
        {
          name: "企业风貌",
          selected: false
        },
        {
          name: "行业聚焦",
          selected: false
        },
        {
          name: "公司产品",
          selected: false
        },
        {
          name: "公司活动",
          selected: false
        },
        {
          name: "精英团队",
          selected: false
        },
        {
          name: "留学案例",
          selected: false
        },
        {
          name: "客户感谢信",
          selected: false
        },
        {
          name: "诚聘英才",
          selected: false
        },
        {
          name: "联系我们",
          selected: false
        }
      ],
      form: {
        degree: "",
        school: "",
        major: "",
        leftTime: "",
        phone: ""
      },
      newsArray: [],
      currentPage: 1,
      total: 0 //此数量为页码的个数，非数据条数
    };
  },
  created() {
    this.getArticle();
  },
  mounted() {},
  //监听到页面发生变化，立即请求接口
  watch: {
    currentPage(newval, oldval) {
      this.getArticle();
    }
  },
  methods: {
    getArticle() {
      ajax({
        url: "sys_composition/page_web",
        optionParams: {
          limit: 4,
          page: this.currentPage
        }
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            let tempTotal = 0,
              pageCount;
            this.newsArray = res.data.records ? res.data.records : [];
            tempTotal = res.data.total ? res.data.total : 0; //获取数据总数
            pageCount = Math.ceil(tempTotal / 4); //向上取整
            this.total = pageCount;
          } else {
            console.log(res);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 选择某一项
    // 弹窗
    selectItem(item) {
      this.typeList.map(it => {
        it.selected = false;
      });
      item.selected = true;
    },
    conso() {
      console.log(this.currentPage);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commin.scss";
@import "./scss/aboutus.scss";
.isSelected {
  border-right: 3px solid #580643;
  font-size: 16px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: #5b0a46;
  cursor: pointer;
}
.usual {
  border-right: none;
  cursor: pointer;
}
.active {
  background-color: #fff;
  border: 1px solid #580643;
  color: #580643 !important;
}
.el-pagination {
  margin: 0 auto !important;
}
</style>
