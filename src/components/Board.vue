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
    turnEnd: function () {
      this.turn = !this.turn
      this.turnsPlayed++
    },
    splicing: function (index, letter) {
      this.squares.splice(index, 1, letter)
    },
    updateArray: function (index) {
      this.turn ? this.splicing(index, 'X') : this.splicing(index, 'O')
      this.turnEnd()
      // call the computerTurn function
      this.computerTurn(this.squares)
    },

    // computerTurn function will take
    computerTurn: function (grid) {
      if (this.turnsPlayed === 1) {
        this.randomPlay(grid)
      } else {
        // horizontal lines
        const horizontalLines = [
          [0, 1],
          [1, 2],
          [0, 2],
          [3, 4],
          [4, 5],
          [3, 5],
          [6, 7],
          [7, 8],
          [6, 8]
        ]
        // vertical lines
        const verticalLines = [
          [0, 3],
          [3, 6],
          [0, 6],
          [1, 4],
          [4, 7],
          [1, 7],
          [2, 5],
          [5, 8],
          [2, 8]
        ]
        // diagonal lines
        const diagonalLines = [
          [0, 4],
          [4, 8],
          [0, 8],
          [2, 4],
          [4, 6],
          [2, 6]
        ]
        // check horizontal lines first
        for (let i = 0; i < horizontalLines.length; i++) {
          const [a, b] = horizontalLines[i]
            console.log('horizontal lines checked')
          if (grid[a] && grid[a] === grid[b]) {
            if ([0, 3, 6].includes(i)) {
              grid.splice(a + 2, 1, 'O')
            } else if ([1, 4, 7].includes(i)) {
              grid.splice(a - 1, 1, 'O')
            } else if([2, 5, 8].includes(i)) {
              grid.splice(a + 1, 1, 'O')
            }
          }
        }
        // check vertical lines second
        for (let i = 0; i < verticalLines.length; i++) {
          console.log('vertical lines checked')
          const [a, b] = verticalLines[i]
          if (grid[a] && grid[a] === grid[b]) {
            if ([0, 3, 6].includes(i)) {
              grid.splice(b + 3, 1, 'O')
            } else if ([1, 4, 7].includes(i)) {
              grid.splice(a - 3, 1, 'O')
            } else {
              grid.splice(a + 3, 1, 'O')
            }
          }
        }
        // check diagonal lines
        for (let i = 0; i < diagonalLines.length; i++) {
          console.log('diagonal lines checked')
          const [a, b] = diagonalLines[i]
          if (grid[a] && grid[a] === grid[b]) {
            if (i === 0) {
              grid.splice(b + 4, 1, 'O')
            } else if (i === 1) {
              grid.splice(a - 4, 1, 'O')
            } else if (i === 2) {
              grid.splice(a + 4, 1, 'O')
            } else if (i === 3) {
              grid.splice(b + 2, 1, 'O')
            } else if (i === 4) {
              grid.splice(a - 2, 1, 'O')
            } else {
              grid.splice(a + 2, 1, 'O')
            }
          }
        }
      }
      this.turnEnd()
    },
    randomPlay: function (grid) {
      const randomIndex = Math.floor(Math.random() * 9)
      grid.splice(randomIndex, 1, 'O')
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
