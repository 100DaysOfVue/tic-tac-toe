<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p> {{ squares }} </p> -->
    <div class="board">
      <Square
        v-for="(square, index) in squares"
        :key="index"
        :id = "index"
        :square="square"
        v-on:updateArray="updateArray"
      />
    </div>
  </div>
</template>

<script>
import Square from './Square.vue'

export default {
  name: 'Board',
  props: {
    msg: String
  },
  components: { Square },
  data  () {
    return {
      squares: Array(9).fill('')
    }
  },
  methods: {
    updateArray: function (index) {
      this.squares.splice(index, 1, 'X')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .board{
    width: 306px;
    height: 306px;
    border: 2px mistyrose solid;
    display: flex;
    flex-wrap: wrap;
  }
</style>
