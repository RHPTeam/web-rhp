<template>
  <div class="alert alert-danger">
    {{ text }}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="onClose">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
  export default {
    props: ['text'],
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script>

<style scoped>

</style>
