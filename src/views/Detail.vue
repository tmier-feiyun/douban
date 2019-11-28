<template>
    <div class="item" v-if="item">
      <img :src="'https://images.weserv.nl/?url=' + item.images.medium" alt />
      <div>
        <p>豆瓣评分：{{item.rating.average}}</p>
        <p>产地：{{item.countries.join(' ')}}</p>
        <p>
          <span v-for="tag in item.genres" :key="tag" class="tag">{{tag}}</span>
        </p>
        <p>{{item.summary}}</p>
      </div>
    </div>
    <div v-else class="loading">
      <img src="../assets/images/loading.gif"  />
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  created() {
    this.getDetailPageData(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getDetailPageData"])
  },
  computed: {
    ...mapState(["item"])
  }
};
</script>

<style lang="less" scoped>
</style>
