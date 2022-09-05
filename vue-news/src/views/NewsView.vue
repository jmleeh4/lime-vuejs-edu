<template>

</template>

<script>


export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>


