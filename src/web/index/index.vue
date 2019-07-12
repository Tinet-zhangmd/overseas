<template>
  <div class="page">
    <!-- 头部 -->
    <top></top>

    <!-- 主要内容区域 -->
    <div class="main">
      <!-- 轮播图区域 -->
      <div class="swiper_Box">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <img :src="b1" alt />
          </swiper-slide>
          <swiper-slide>
            <img :src="b2" alt />
          </swiper-slide>
          <swiper-slide>
            <img :src="b3" alt />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>

      <!-- 标语区域 -->
      <div class="slogan">
        <div class="slogan_content">
          <!-- 筛选条件区域 -->
          <div class="select_box">
            <!-- 条件 -->
            <div class="select_type">
              <ul>
                <li
                  :class="[item.selected?'isSelected':'usual']"
                  v-for="item in typeList"
                  @click="selectItem(item)"
                >
                  {{item.name}}
                  <img :src="arrowright" alt/>
                </li>
              </ul>
            </div>
            <!-- 输入区域 -->
            <div class="insertArea">
              <div class="title">留学专家为您量身定制留学整体解决方案</div>
              <div class="from_a">
                <!-- 使用表单组件 -->
                <ul>
                  <!-- 学校 -->
                  <el-form ref="form" :model="form" width="300px">
                    <li>
                      <img :src="school" />
                      <el-form-item prop="school">
                        <el-select
                          v-model="form.school"
                          placeholder="请选择意向学校"
                          size="medium"
                          style="width:300px;"
                        >
                          <el-option
                            v-for="item in university"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </li>

                    <!-- 学位 -->
                    <li>
                      <img :src="degreet" />
                      <el-form-item prop="degree">
                        <el-select
                          v-model="form.degree"
                          placeholder="请选择留学学位"
                          size="medium"
                          style="width:300px;"
                        >
                          <el-option
                            v-for="item in degree"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </li>

                    <!-- 意向专业 -->
                    <li>
                      <img :src="book" />
                      <el-form-item prop="major">
                        <el-input
                          v-model="form.major"
                          placeholder="请输入意向专业"
                          type="text"
                          size="medium"
                          style="width:300px;"
                        ></el-input>
                      </el-form-item>
                    </li>

                    <!-- 出国时间 -->
                    <li>
                      <img :src="time" />
                      <el-form-item prop="leftTime">
                        <el-date-picker
                          v-model="form.leftTime"
                          type="date"
                          placeholder="请选择出国时间"
                          size="medium"
                          style="width:300px;"
                          @change="change"
                        ></el-date-picker>
                      </el-form-item>
                    </li>

                    <!-- 联系方式 -->
                    <li>
                      <img :src="phonet" />
                      <el-form-item prop="phone">
                        <el-input
                          v-model="form.phone"
                          placeholder="请输入联系方式"
                          size="medium"
                          style="width:300px;"
                          maxlength="11"
                        ></el-input>
                      </el-form-item>
                    </li>
                  </el-form>
                </ul>
              </div>

              <div class="btn" @click="open">马上获取留学方案</div>
            </div>
          </div>
          <img :src="slogan" alt />
          <!-- 横向公告 -->
          <div class="swiper_notice">
            <img :src="mes" alt />
            <swiper :options="swiperOptionTwo" ref="mySwiperTwo">
              <!-- slides -->
              <swiper-slide>
                <div class="notice">xx留学2019发放offer数品牌留学计划。</div>
              </swiper-slide>
              <swiper-slide>
                <div class="notice">我是第二条消息在往前面滚动</div>
              </swiper-slide>
              <swiper-slide>
                <div class="notice">我是第三条消息在往前面滚动</div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>

      <!-- 逆袭985 -->
      <div class="brraging">
        <div class="brraging_content">
          <div class="brrag_top">
            <!-- 上三个div -->
            <div class="brrag_topleft">
              <div class="brrag_title brt">XX留学中心2019品牌留学计划</div>
              <div class="brrag_content">
                <div class="content_left">
                  <ul class="brc" @click="$router.push('/article')">
                    <li>高标准要求，成功申请到帝国理工金融专业</li>
                    <li>非985非211 成功逆袭哈佛大学建筑学专......</li>
                    <li>高标准要求，成功申请到帝国理工金融专业</li>
                    <li>非985非211 成功逆袭哈佛大学建筑学专。</li>
                  </ul>
                </div>

                <div class="content_right">
                  <ul class="brc" @click="$router.push('/article')">
                    <li>高标准要求，成功申请到帝国理工金融专业</li>
                    <li>非985非211 成功逆袭哈佛大学建筑学专......</li>
                    <li>高标准要求，成功申请到帝国理工金融专业</li>
                    <li>非985非211 成功逆袭哈佛大学建筑学专。</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="brrag_topright">
              <div class="brrag_title brt">XX留学中心2019品牌留学计划</div>
              <div class="brrag_content">
                <div class="content_left">
                  <ul class="brc" @click="$router.push('/article')">
                    <li>麦吉尔大学 McGill University</li>
                    <li>蒙特爱立森大学 Mount Allison University</li>
                    <li>蒙特爱立森大学 Mount Allison University</li>
                    <li>蒙特爱立森大学 Mount Allison University</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 下两个div -->
          <div class="brrag_bottom">
            <!-- 上三个div -->
            <div class="brrag_topleft">
              <div class="brrag_title brt">XX留学中心2019品牌留学计划</div>
              <div class="brrag_content">
                <div class="content_left">
                  <ul class="brc" @click="$router.push('/article')">
                    <li>
                      高标准要求，成功申请到帝国理工金融专业
                      <span>立即试听</span>
                    </li>
                    <li>
                      非985非211 成功逆袭哈佛大学建筑学专非985非211 成功逆袭哈佛大学建筑学专
                      <span>立即试听</span>
                    </li>
                    <li>
                      高标准要求，成功申请到帝国理工金融专业 金融专业 3
                      <span>立即试听</span>
                    </li>
                    <li>非985非211 成功逆袭哈佛大学建筑学专。</li>
                    <li>高标准要求，成功申请到帝国理工金融专业 金融专业 3</li>
                    <li>非985非211 成功逆袭哈佛大学建筑学专。</li>
                    <li>高标准要求，成功申请到帝国理工金融专业 金融专业 3</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="brrag_topright">
              <div class="brrag_content">
                <div class="content_left">
                  <div
                    class="student"
                    v-for="item in 6"
                    @click="$router.push('/case')"
                    style="cursor:pointer;"
                  >
                    <div class="name">A同学</div>
                    <div class="major">
                      <span>蒙特爱立森大学</span>
                      <span>金融工程</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 解决方案 -->
      <div class="solution">
        <div class="solution_content">
          <img :src="solution" alt />
          <div class="information">
            <!-- 留学资讯 -->
            <div class="overseas">
              <span>留学资讯</span>
              <ul @click="$router.push('/article')">
                <li>高标准要求，成功申请到帝国理工金融专业</li>
                <li>非985非211 成功逆袭哈佛大学建筑学专非985非211 成功逆袭哈佛大学建筑学专</li>
                <li>高标准要求，成功申请到帝国理工金融高标准要求，成功申请到帝国理工金融专业专业 金融专业 3</li>
                <li>非985非211 成功逆袭哈佛大学建筑学专。</li>
                <li>非985非211 成功逆袭哈佛大学建筑学专85非211 成功逆袭哈佛大学......</li>
                <li>高标准要求，成功申请到帝国理工金融专业</li>
                <li>高标准要求，成功申请到帝国理工金融专业</li>
              </ul>
            </div>

            <!-- 中间线 -->
            <div class="line"></div>

            <!-- 考试资讯 -->
            <div class="exam">
              <span>考试资讯</span>
              <ul @click="$router.push('/article')">
                <li>高标准要求，成功申请到帝国理工金融专业</li>
                <li>非985非211 成功逆袭哈佛大学建筑学专非985非211 成功逆袭哈佛大学建筑学专</li>
                <li>高标准要求，成功申请到帝国理工金融专业 金融专业 3</li>
                <li>非985非211 成功逆袭哈佛大学建筑学专。</li>
                <li>非985非211 成功逆袭哈佛大学建筑学专85非211 成功逆袭哈佛大学......</li>
                <li>高标准要求，成功申请到帝国理工金融专业</li>
                <li>高标准要求，成功申请到帝国理工金融专业</li>
              </ul>
            </div>
          </div>
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
import top from "@/components/top";
import foot from "@/components/foot";
import { Message } from "element-ui";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import { validatPhone } from "@/assets/js/validate";

export default {
  name: "carrousel",
  components: {
    swiper,
    swiperSlide,
    top,
    foot
  },
  data() {
    return {
      // 图片
      position: require("@/assets/img/index/position.png"),
      arrowdown: require("@/assets/img/index/arrow-down.png"),
      arrowright: require("@/assets/img/index/arrow-right.png"),
      logo: require("@/assets/img/index/logo.png"),
      tel: require("@/assets/img/index/1dh.png"),
      slogan: require("@/assets/img/index/bg.png"),
      d1: require("@/assets/img/index/d1.png"),
      d2: require("@/assets/img/index/d2.png"),
      solution: require("@/assets/img/index/fan.png"),
      b1: require("@/assets/img/index/b1.png"),
      b2: require("@/assets/img/index/b2.png"),
      b3: require("@/assets/img/index/b3.png"),
      mes: require("@/assets/img/index/message.png"),
      school: require("@/assets/img/index/school.png"),
      degreet: require("@/assets/img/index/degree.png"),
      book: require("@/assets/img/index/book.png"),
      time: require("@/assets/img/index/time.png"),
      phonet: require("@/assets/img/index/phone.png"),
      qq: require("@/assets/img/index/qq.png"),
      qq1: require("@/assets/img/index/qq1.png"),
      wx: require("@/assets/img/index/wx.png"),
      wx1: require("@/assets/img/index/wx1.png"),
      // 对象
      swiperOption: {
        speed: 2000,
        autoplay: {
          delay: 3000, //1秒切换一次
          disableOnInteraction: false //用户滑动之后，可以继续自动播放
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: false
      },
      swiperOptionTwo: {
        speed: 2000,
        autoplay: {
          delay: 3000, //1秒切换一次
          disableOnInteraction: false //用户滑动之后，可以继续自动播放
        },
        slidesPerView: 3,
        loop: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: false
      },
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
      //输入框右侧方案
      typeList: [
        {
          name: "获取留学方案",
          selected: true
        },
        {
          name: "获取推荐院校",
          selected: false
        },
        {
          name: "出国考试产品",
          selected: false
        },
        {
          name: "社会实践产品",
          selected: false
        },
        {
          name: "海外服务产品",
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
      // rules: {
      //   schoolValue: {
      //     required: true,
      //     message: "请选择意向",
      //     trigger: "change"
      //   },
      //   degreeValue: {
      //     required: true,
      //     message: "请选择留学学位",
      //     trigger: "change"
      //   },
      //   major: {
      //     required: true,
      //     message: "请选择意向专业",
      //     trigger: "blur"
      //   },
      //   dateTime: {
      //     required: true,
      //     message: "请选择出国时间",
      //     trigger: "change"
      //   },
      //   phone: {
      //     required: true,
      //     message: "请输入联系方式",
      //     trigger: "blur",
      //     validator: validatPhone
      //   }
      // },
      qqShow: false,
      wxShow: false
    };
  },
  created() {},
  mounted() {},
  computed: {
    swiper() {
      this.$refs.mySwiper.swiper;
      this.$refs.mySwiperTwo.swiper;
    }
  },
  methods: {
    change() {
      console.log(this.form.leftTime);
    },
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
      if (this.form.leftTime === "Invalid Date") {
        this.form.leftTime = "";
      }
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
    // 选择
    selectItem(item) {
      this.typeList.map(it => {
        it.selected = false;
      });
      item.selected = true;
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
@import "./scss/index.scss";
.isSelected {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #580643;
  background-color: #fff;
  cursor: pointer;
}
.usual {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
}
.el-form-item {
  margin-bottom: 0 !important;
}
</style>
