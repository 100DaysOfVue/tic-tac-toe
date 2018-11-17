<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p> {{ squares }} </p> -->
    <h2 v-if='winner'>The winner is {{ winner }}</h2>
    <h3 v-else>Next Player: {{ this.turn ? 'X' : 'O'}}</h3>
    <div class="board">
      <Square
        v-for="(square, index) in squares"
        :key="index+1"
        :id = "index"
        :square="square"
        :winner = winner
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
      squares: Array(9).fill(''),
      turn: true,
      turnsPlayed: 0,
      winner: ''
    }
  },
  methods: {
    splicing: function (index, letter) {
      this.squares.splice(index, 1, letter)
    },
    updateArray: function (index) {
      this.turn ? this.splicing(index, 'X') : this.splicing(index, 'O')
      this.turn = !this.turn
      this.turnsPlayed++
    },

    theWinnerIs: function (arr) {
      // let arr = this.squares
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
          return arr[a]
        }
      }
      return null
    }
  },
  updated: function () {
    if (this.turnsPlayed > 4) {
      this.winner = this.theWinnerIs(this.squares)
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
