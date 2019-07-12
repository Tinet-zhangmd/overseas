<template>
  <div class="page">
    <top></top>
    <!-- 主要内容区域 -->
    <div class="main">
      <div class="content">
        <div class="left_article">
          <article>
            <header>
              <h1>[百利机经] 2019年7月7日托福考试口语机经预测</h1>
              <p style="margin:10px 0;">
                <time pubdate="pubdate">2019-06-06</time>
              </p>
            </header>
            <footer>
              <p>
                本文是2019年7月7日托福考试口语机经测，包括范文、答题思路、背景知识、学术场景、常考词汇等，
                能够突破托福考试四个单项中的疑难问题。本文是2019年7月7日托福考试口语机经预测，真题内容较多，帮助考生逐一攻克。
              </p>
              <pre>{{article}}</pre>
            </footer>
          </article>
        </div>

        <div class="article_mulu">
          <div
            class="mulu"
            v-for="item in 15"
            @click="$router.push('/article')"
          >2019年7月7日托福考试口,2019年7月17的...</div>
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
      arrowdown: require("@/assets/img/index/arrow-down.png"),
      arrowright: require("@/assets/img/index/arrow-right.png"),
      article: "" //模板字符串
      // 对象
      // 变量
      // 数组
      //
    };
  },
  created() {},
  mounted() {
    this.article = `
        2019年7月7日托福考试口语机经预测(部分内容展示)：

        社会类答题思路：

        1、品德
        •邻居是我们生活、社交的一部分。好的邻居之间应该互相帮助。
        •邻居应该互相尊重，尤其在个人隐私和空间方面
        •邻居间要互相关爰
        
        2、老建筑
        •历史建筑保存了重要的历史信息
        •历史建筑具有很重要的经济价值
        
        3、朋友
        •朋友间要相互信任
        •朋友要忠诚，会时刻帮助你。
        
        4、文化
        •历史的学习是教育过程中不可缺少的一部分。
        •历史具有教育现在、指导未来的作用。
    `;
  },
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
@import "./scss/article.scss";
</style>
