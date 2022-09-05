<template>

</template>

<script>


export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>
