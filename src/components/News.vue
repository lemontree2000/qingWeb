<template>
  <div class="news">
    <h1>This is news page</h1>
    <div>
      <ul >
        <li v-for="news in newsList">
          <span class="news-title">{{ news.title }}</span>
          <p class="news-content"> {{ news.content }}</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'News',
    data () {
      return {
        newsList: [
          {
            title: '特朗普白宫会晤安倍',
            content: '习近平祝贺特朗普正式就任美国总统，感谢特朗普2月8日来信就元宵节和中国农历鸡年向中国人民致意节日祝福，对特朗普表示愿意努力拓展中美合作、发展惠及中美两国和国际社会的建设性双边关系表示高度赞赏。'
          },
          {
            title: '特朗普白宫会晤安倍',
            content: '习近平祝贺特朗普正式就任美国总统，感谢特朗普2月8日来信就元宵节和中国农历鸡年向中国人民致意节日祝福，对特朗普表示愿意努力拓展中美合作、发展惠及中美两国和国际社会的建设性双边关系表示高度赞赏。'
          },
          {
            title: '特朗普白宫会晤安倍',
            content: '习近平祝贺特朗普正式就任美国总统，感谢特朗普2月8日来信就元宵节和中国农历鸡年向中国人民致意节日祝福，对特朗普表示愿意努力拓展中美合作、发展惠及中美两国和国际社会的建设性双边关系表示高度赞赏。'
          }
        ]
      }
    }
  }
</script>
<style>
  div {
    margin: 0 auto;

  }
  ul li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  span {
    font-size: 16px;
    font-weight: 600;
    color: brown;
  }
  p {
    line-height:25px;
  }
</style>
