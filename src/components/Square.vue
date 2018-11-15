<template>
  <div class="square" v-on:click='makeYourMove'>
    {{ square }}
  </div>
</template>

<script>
export default {
  name: 'Square',
  props: {
    square: String
  },
  methods: {
    makeYourMove: function () {
      this.$emit('updateArray', this.$el.id)
    }
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
