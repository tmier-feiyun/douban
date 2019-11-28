<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <router-link :to="'/detail/' + item.id" href="./item.html">
        <img
          :src="'https://images.weserv.nl/?url='+ item.images.small"
        />
        <div class="info">
          <h3>{{item.title}}</h3>
        <p>豆瓣评分：{{item.rating.average}}</p>
          <p>
            <span v-for="tag in item.genres" :key = "tag" class="tag">{{tag}}</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
// import { mapActions } from 'vuex'
import {mapActions,mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['list'])
  },
  created(){
    this.getListPageData('top250')
  },
  methods:{
    ...mapActions(['getListPageData'])
  }
};
</script>

<style lang="less" scoped>
</style>
