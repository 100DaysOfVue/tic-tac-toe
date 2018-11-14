<template>
  <div class="square">
    {{ square }}
  </div>
</template>

<script>
export default {
  name: 'Square',
  props: {
    square: String
  }
}
</script>

<style scoped>
.square{
    width: 100px;
    height: 100px;
    border: 1px rosybrown solid;
  }
</style>
