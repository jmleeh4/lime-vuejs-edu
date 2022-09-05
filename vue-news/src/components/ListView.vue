<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            by
            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
            by {{ item.time_ago }}
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ListView",
  computed: {
    listItems() {
      const routeName = this.$route.name;
      if(routeName == 'news'){
        return this.$store.state.news;
      }else if(routeName == 'jobs'){
        return this.$store.state.jobs;
      }else{
        return this.$store.state.ask;
      }
    }
  },
  created() {
    const routeName = this.$route.name;
    console.log(this.$route);
    if(routeName == 'news'){
      this.$store.dispatch('FETCH_NEWS');
    }else if(routeName == 'jobs'){
      this.$store.dispatch('FETCH_JOBS');
    }else{
      this.$store.dispatch('FETCH_ASK');
    }
  },
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>