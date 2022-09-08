<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/calculator">Calculator</router-link>
    <router-link to="/userInfo">UserInfo</router-link>
  </div>
</template>

<script>
import '../css/ToolBar.css'

export default {
  name: "ToolBar"
}
</script>
