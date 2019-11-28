<template>
  <div id="app">
    <!-- 头部 -->
    <my-header></my-header>
    <!-- 内容 -->
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "@/components/my-header";
import MyFooter from "@/components/my-footer";
export default {
  name: "app",
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style>
</style>
