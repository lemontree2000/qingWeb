<template>
  <nav>
    <ul>
      <li>
        <router-link to="/hello">首页</router-link>
      </li>
      <li>
        <router-link to="/news">新闻</router-link>
      </li>
      <li>
        <router-link to="/my">关于</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style scoped>

  ul,li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul {
    display: flex;
    height:40px;
  }
  ul li {
    flex: 1;
    border-right: 1px solid #bbccb5;
    font-size: 14px;
    font-weight: 600;
    line-height:40px;
  }
  ul li:nth-last-child(1) {
    border: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .active {
    color: red;
  }

</style>
