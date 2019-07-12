<template>
  <div>
    <!-- 底部 -->
    <div class="footer">
      <div class="footer_content">
        <div class="left_address">
          <div class="company">杭州总公司</div>
          <div class="agree">
            全国统一咨询热线：
            <span>0571-8888888</span>
          </div>
          <div class="agree">工作时间：周一至周日（8：00 - 21：30）</div>
          <div class="agree">地址：杭州市西湖区杭州市西湖区杭州市西湖区</div>
        </div>
        <div class="left_img">
          <img :src="d1" alt />
          <img :src="d2" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      d1: require("@/assets/img/index/d1.png"),
      d2: require("@/assets/img/index/d2.png")
    };
  }
};
</script>

<style lang="scss" scoped>
// 底部
.footer {
  background-color: #59545a;

  .footer_content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    width: 1200px;
    height: 331px;
    margin: 0 auto;
    padding-top: 62px;

    .left_address {
      color: #fff;

      .company {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: bold;
      }

      .agree {
        margin: 21px 0;
        font-size: 14px;
        font-family: MicrosoftYaHeiLight;
        font-weight: 300;

        span {
          vertical-align: middle;
          font-size: 18px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
        }
      }
    }

    .left_img {
      img {
        margin-left: 59px;
      }
    }
  }
}
</style>
