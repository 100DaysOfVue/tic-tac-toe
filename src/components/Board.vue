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
// this cases will be used in the checks functions to call the match case
import { cases } from '../cases'

export default {
  name: 'Board',
  props: {
    msg: String
  },
  components: { Square },
  data  () {
    return {
      squares: Array(9).fill(null),
      turn: true,
      turnsPlayed: 0,
      winner: '',
      linesToCheck: [
        [0, 1],
        [1, 2],
        [0, 2],
        [3, 4],
        [4, 5],
        [3, 5],
        [6, 7],
        [7, 8],
        [6, 8],
        // verical lines
        [0, 3],
        [3, 6],
        [0, 6],
        [1, 4],
        [4, 7],
        [1, 7],
        [2, 5],
        [5, 8],
        [2, 8],
        // diagonal lines
        [0, 4],
        [4, 8],
        [0, 8],
        [2, 4],
        [4, 6],
        [2, 6]
      ],
      lines: [
        [0, 1],
        [1, 2],
        [0, 2],
        [3, 4],
        [4, 5],
        [3, 5],
        [6, 7],
        [7, 8],
        [6, 8],
        // verical lines
        [0, 3],
        [3, 6],
        [0, 6],
        [1, 4],
        [4, 7],
        [1, 7],
        [2, 5],
        [5, 8],
        [2, 8],
        // diagonal lines
        [0, 4],
        [4, 8],
        [0, 8],
        [2, 4],
        [4, 6],
        [2, 6]
      ]
    }
  },
  methods: {
    // this function will change this.turn and add 1 to turns played
    turnEnd: function () {
      this.turn = !this.turn
      this.turnsPlayed++
    },
    // for shorting splice function in updateArray
    splicing: function (index, letter) {
      this.squares.splice(index, 1, letter)
    },
    // goign to add 'X' to squares array in user turn
    // one the turn end it going to call the computer turn function
    updateArray: function (index) {
      this.turn ? this.splicing(index, 'X') : this.splicing(index, 'O')
      this.turnEnd()
      // call the computerTurn function
      this.computerTurn(this.squares)
    },

    // computerTurn function going to take the squares as parameter
    // it going to use it to iterate over and depending if the elements is not null
    // if is the first  turn of computer his move going to be random with randomPlay function
    // else going to check if the player has a win move to block him or going to move randomly
    computerTurn: function (grid) {
      if (this.turnsPlayed === 1) {
        this.randomPlay(grid)
      } else {
        this.checkLines(grid)
      }
      this.turnEnd()
    },
    // check functions going to receive the grid, then it'll be pased to match case
    checkLines: function (grid) {
      // console.log(this.lines)
      for (let i = 0; i < this.linesToCheck.length; i++) {
        const [a, b] = this.linesToCheck[i]
        let replaceCase = cases.winCases[i]
        if (grid[a] && grid[a] === grid[b] && this.lines[i]) {
          this.lines.splice(i, 1, null)
          replaceCase(grid, this)
          break
        }
      }
    },
    // random play that the computer going to use for move radomly
    // this function will receive as parameter a grid that result in the squares array
    // only if the squares in the randum index is null will replace with 'O'
    randomPlay: function (grid) {
      const randomIndex = Math.floor(Math.random() * 9)
      if (grid[randomIndex]) {
        this.randomPlay(grid)
      } else {
        grid.splice(randomIndex, 1, 'O')
      }
    },
    // this function going to calculate the winner iterating over an array (lines)
    // created on it which going to be the indexes combination to win the game
    // also going to take an array (this.squares) as parameter
    // to check the lines combination to return who won
    theWinnerIs: function (arr) {
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
