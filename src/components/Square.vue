<template>
  <div class="square" v-on:click='makeYourMove'>
    <span>{{ square }}</span>
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
