<template>
  <div class="square" v-on:click='makeYourMove'>
    {{ square }}
  </div>
</template>

<script>
export default {
  name: 'Square',
  props: {
    square: String,
    winner: String
  },
  methods: {
    makeYourMove: function () {
      if (this.winner || this.square) {
        return
      }
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
