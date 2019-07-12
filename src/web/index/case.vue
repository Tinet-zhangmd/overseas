<template>
  <div class="page">
    <top></top>
    <!-- 主要内容区域 -->
    <div class="main">
      <div class="content">
        <!-- 学生介绍 -->
        <div class="introduce">
          <img :src="girl" alt />
          <!-- 学生介绍中间 -->
          <div class="introduce_middle">
            <div class="middle_title">追逐梦想 终获麦吉尔大学生物专业offer</div>

            <div class="middle_content">
              <div class="top">
                <span>A同学-个人档案</span>
                <span>留学意向：加拿大 本科 理科 生物</span>
              </div>
              <div class="bottom">
                <div>
                  <span>最高教育经历：高中</span>
                  <span>技校类型：国内高中</span>
                  <span>平均分：90-94</span>
                </div>
                <div class="centerBox">
                  <span>托福：105-109</span>
                </div>
                <div>
                  <span>活动实践：(？）</span>
                  <span>科研项目：(？)</span>
                  <span>工作经历：(？)</span>
                </div>
              </div>
            </div>
            <p>标签： 无奖学金 无套磁 无海外交换经历 无牛推</p>
          </div>

          <!-- 表单 -->
          <div class="introduce_right">
            <div class="title">免费获取留学方式</div>
            <div class="from_a">
              <!-- 使用表单组件 -->
              <ul>
                <!-- 学校 -->
                <li>
                  <img :src="school" />
                  <el-select
                    v-model="form.school"
                    placeholder="请选择意向学校"
                    size="medium"
                    style="width:238px;"
                  >
                    <el-option
                      v-for="item in university"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </li>

                <!-- 学位 -->
                <li>
                  <img :src="degreet" />
                  <el-select
                    v-model="form.degree"
                    placeholder="请选择留学学位"
                    size="medium"
                    style="width:238px;"
                  >
                    <el-option
                      v-for="item in degree"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </li>

                <!-- 意向专业 -->
                <li>
                  <img :src="book" />
                  <el-input
                    v-model="form.major"
                    placeholder="请输入意向专业"
                    size="medium"
                    style="width:238px;"
                  ></el-input>
                </li>

                <!-- 出国时间 -->
                <li>
                  <img :src="time" />
                  <el-date-picker
                    v-model="form.leftTime"
                    type="date"
                    placeholder="请选择出国时间"
                    size="medium"
                    style="width:238px;"
                  ></el-date-picker>
                </li>

                <!-- 联系方式 -->
                <li>
                  <img :src="phonet" />
                  <el-input
                    v-model="form.phone"
                    placeholder="请输入联系方式"
                    size="medium"
                    style="width:238px;"
                    maxlength="11"
                  ></el-input>
                </li>
              </ul>
            </div>
            <div class="btn" @click="open">马上获取留学方案</div>
          </div>
        </div>
        <!-- 录取通知 -->
        <div class="notice">
          <span>录取通知</span>
          <span>A同学获得了 2枚 offer</span>
        </div>

        <div class="universe">
          <div class="study" v-for="i in 2">
            <img :src="tizi" alt />
            <div class="study_content">
              <p>麦吉尔大学 McGill University</p>
              <p>本科 2017秋季入学</p>
            </div>
          </div>
        </div>

        <!-- 案例分析logo -->
        <div class="consider">
          <span class="consider_title">案例分析</span>
          <div>
            <span>在线咨询</span>
            <span>新加坡留学竞争力测试</span>
          </div>
        </div>

        <!-- 文章 -->
        <div class="left_article">
          <article>
            <footer>
              <pre>{{article}}</pre>
            </footer>
          </article>
        </div>
      </div>
    </div>
    <!-- 贴边 -->
    <div class="rwm" v-if="qqShow || wxShow">
      <div class="picture"></div>
      <span>扫描二维码</span>
    </div>
    <div class="fixBox">
      <span @click="chat(1)">
        <img :src="qq" alt v-show="!qqShow" />
        <img :src="qq1" alt v-show="qqShow" />
      </span>

      <span @click="chat(0)">
        <img :src="wx1" alt v-show="!wxShow" />
        <img :src="wx" alt v-show="wxShow" />
      </span>
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
import { Message } from "element-ui";
import { validatPhone } from "@/assets/js/validate";
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
      girl: require("@/assets/img/index/girl.png"),
      tizi: require("@/assets/img/index/tizi.png"),
      school: require("@/assets/img/index/school.png"),
      degreet: require("@/assets/img/index/degree.png"),
      book: require("@/assets/img/index/book.png"),
      time: require("@/assets/img/index/time.png"),
      phonet: require("@/assets/img/index/phone.png"),
      qq: require("@/assets/img/index/qq.png"),
      qq1: require("@/assets/img/index/qq1.png"),
      wx: require("@/assets/img/index/wx.png"),
      wx1: require("@/assets/img/index/wx1.png"),
      //学校
      university: [
        {
          value: "新加坡国立大学",
          label: "新加坡国立大学"
        },
        {
          value: "南洋理工大学",
          label: "南洋理工大学"
        },
        {
          value: "新加坡管理大学",
          label: "新加坡管理大学"
        },
        {
          value: "新加坡科技设计大学",
          label: "新加坡科技设计大学"
        },
        {
          value: "新加坡理工学院",
          label: "新加坡理工学院"
        },
        {
          value: "新加坡淡马锡理工学院",
          label: "新加坡淡马锡理工学院"
        },
        {
          value: "新加坡义安理工学院",
          label: "新加坡义安理工学院"
        },
        {
          value: "新加坡共和理工学院",
          label: "新加坡共和理工学院"
        }
      ],
      // 学位
      degree: [
        {
          value: "学士学位",
          label: "学士学位"
        },
        {
          value: "硕士学位",
          label: "硕士学位"
        },
        {
          value: "博士学位",
          label: "博士学位"
        },
        {
          value: "MBA",
          label: "MBA"
        }
      ],
      form: {
        degree: "",
        school: "",
        major: "",
        leftTime: "",
        phone: ""
      },
      article: "", //模板字符串
      qqShow: false,
      wxShow: false
    };
  },
  created() {},
  mounted() {
    this.article = `
   【整体优劣势分析】
　　优势：
　　①学生的GPA成绩高；
　　②托福成绩100+；
　　③课外活动经历丰富。

　　劣势：
　　①学生第一次接触出国留学的相关事项。

　　【专业选择】
　　在选择专业的过程中，G同学的专业很明确，他从小就很喜欢生物专业、生命科学专业或者生物、生命科学方向的内容，尤其是有一次G同学在了解多伦多大学的官网的时候，
无意间看到多伦多大学生物专业的内容里提到，生命科学运用科学探究的方法研究生命物质的规律和过程。生命科学的研究有助于学生理解和分析人体和其他生物的行为。它为
学生们准备了道德、社会和政治问题，这是因为我们越来越有能力保护脆弱而复杂的生态平衡，维持世界的平衡。看到这段文字后，G同学更加的喜欢上了生命科学与生物专业。
经过慎重考虑，G同学选择了生物、生命科学专业。

　　【学校选择】
　　选择学校的环节，G同学应该是最不需要担心，原因在于他各方面的成绩都太好了，各方面的条件都达到了最高标准，全加拿大所有的名校他都可以选择。因为在加拿大所有
大学里，生物专业的强校就那几个，东海岸的安大略省有多伦多大学、女王大学，魁北克省作为加拿大的老经济、工业强省，它给麦吉尔大学足够的资金扶持，让麦吉尔大学的生物、
医学等领域一直遥遥领先，所以，东海岸的大学基本可以确定。至于加拿大的西海岸，更是能数的出来，英属哥伦比亚大学、西蒙菲莎大学、维多利亚大学。几次沟通之后，学生
确定了申请麦吉尔大学、多伦多大学、英属哥伦比亚大学、女王大学4所学校。

　　【申请攻略】
　　第一次和申请规划师沟通的是学生家长，家长还是很有礼貌，但是家长也反馈了一个问题就是，学生学校课业比较重，所以加拿大这边不打算让学生参与进来。于是家长就把
学生之前写的一些信息反馈给申请规划师。并希望申请规划师能够通过学生之前的信息确定学生最终的加拿大文书。于是申请规划师花了两天时间去仔细研读学生之前的内容。
因为内容比较碎而且加拿大这边的文书又是全新的Essay题目。于是申请规划师花费了大量的时间，把学生提供的信息综合起来看并且找到合适的事例匹配合适的题目。但是还是
一点点的推进着。最终形成了文书的初稿并发送给家长。学生家长也十分的满意。

　　【申请结果】
　　学生成功收获了麦吉尔大学，多伦多大学，女王大学的offer。

　　【学生感言】
　　学习生物专业是我的梦想，感谢百利天下老师帮助我圆梦。
                        
    `;
  },
  computed: {},
  methods: {
    postMessage() {
      let tempType = "",
        tempMes;
      ajax({
        url: "abroad_form",
        optionParams: this.form
      })
        .post()
        .then(res => {
          if (res.code === 200) {
            console.log(res);
            tempMes = "已智能匹配留学助理，专属留学助理稍后与您联系！";
            tempType = "success";
          } else {
            console.log(res);
            tempMes = "请稍后再试！";
            tempType = "error";
          }
          Message({
            showClose: true,
            message: tempMes,
            type: tempType,
            duration: 2000
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    //提示并提交
    open() {
      //转换格式
      this.forMatTime();
      let tempType = "",
        tempMes;
      if (
        this.form.degree != "" &&
        this.form.school != "" &&
        this.form.leftTime != "" &&
        this.form.major.trim() != "" &&
        this.form.phone != ""
      ) {
        if (validatPhone(this.form.phone)) {
          this.postMessage();
          console.log(this.form);
        } else {
          this.form.phone = "";
          Message({
            showClose: true,
            message: "号码输入有误",
            type: "error",
            duration: 2000
          });
        }
      } else {
        if (!this.form.major.trim()) {
          this.form.major = "";
        }

        // 下面为没有选择时间直接提交的情况，再次选择无法选择值
        if (this.form.leftTime.trim() === "NaN-NaN-NaN NaN:NaN:NaN") {
          this.form.leftTime = "";
        }

        Message({
          showClose: true,
          message: "唔，请填完整咯",
          type: "error",
          duration: 2000
        });
      }
    },
    // 转换时时间
    forMatTime() {
      let str = "",
        resDate = "",
        d;
      str = this.form.leftTime.toString();
      d = new Date(str);
      resDate =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds();
      this.form.leftTime = resDate;
    },
    //右侧固定图标
    chat(num) {
      if (num === 1) {
        this.qqShow = !this.qqShow;
        this.wxShow = false;
      } else {
        this.wxShow = !this.wxShow;
        this.qqShow = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commin.scss";
@import "./scss/case.scss";
</style>
