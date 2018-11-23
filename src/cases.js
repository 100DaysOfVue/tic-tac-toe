const cases = {
  winCases: {
    // horizontal cases
    0: function (grid, _this) {
      grid[2] ? _this.checkLines(grid) : grid.splice(2, 1, 'O')
    },
    1: function (grid, _this) {
      grid[0] ? _this.checkLines(grid) : grid.splice(0, 1, 'O')
    },
    2: function (grid, _this) {
      grid[1] ? _this.checkLines(grid) : grid.splice(1, 1, 'O')
    },
    3: function (grid, _this) {
      grid[5] ? _this.checkLines(grid) : grid.splice(5, 1, 'O')
    },
    4: function (grid, _this) {
      grid[3] ? _this.checkLines(grid) : grid.splice(3, 1, 'O')
    },
    5: function (grid, _this) {
      grid[4] ? _this.checkLines(grid) : grid.splice(4, 1, 'O')
    },
    6: function (grid, _this) {
      grid[8] ? _this.checkLines(grid) : grid.splice(8, 1, 'O')
    },
    7: function (grid, _this) {
      grid[6] ? _this.checkLines(grid) : grid.splice(6, 1, 'O')
    },
    8: function (grid, _this) {
      grid[7] ? _this.checkLines(grid) : grid.splice(7, 1, 'O')
    },
    // vertical cases
    9: function (grid, _this) {
      grid[6] ? _this.checkLines(grid) : grid.splice(6, 1, 'O')
    },
    10: function (grid, _this) {
      grid[0] ? _this.checkLines(grid) : grid.splice(0, 1, 'O')
    },
    11: function (grid, _this) {
      grid[3] ? _this.checkLines(grid) : grid.splice(3, 1, 'O')
    },
    12: function (grid, _this) {
      grid[7] ? _this.checkLines(grid) : grid.splice(7, 1, 'O')
    },
    13: function (grid, _this) {
      grid[1] ? _this.checkLines(grid) : grid.splice(1, 1, 'O')
    },
    14: function (grid, _this) {
      grid[4] ? _this.checkLines(grid) : grid.splice(4, 1, 'O')
    },
    15: function (grid, _this) {
      grid[8] ? _this.checkLines(grid) : grid.splice(8, 1, 'O')
    },
    16: function (grid, _this) {
      grid[2] ? _this.checkLines(grid) : grid.splice(2, 1, 'O')
    },
    17: function (grid, _this) {
      grid[5] ? _this.checkLines(grid) : grid.splice(5, 1, 'O')
    },
    // diagonal cases
    18: function (grid, _this) {
      grid[8] ? _this.checkLines(grid) : grid.splice(8, 1, 'O')
    },
    19: function (grid, _this) {
      grid[0] ? _this.checkLines(grid) : grid.splice(0, 1, 'O')
    },
    20: function (grid, _this) {
      grid[4] ? _this.checkLines(grid) : grid.splice(4, 1, 'O')
    },
    21: function (grid, _this) {
      grid[6] ? _this.checkLines(grid) : grid.splice(6, 1, 'O')
    },
    22: function (grid, _this) {
      grid[3] ? _this.checkLines(grid) : grid.splice(3, 1, 'O')
    },
    23: function (grid, _this) {
      grid[4] ? _this.checkLines(grid) : grid.splice(4, 1, 'O')
    }
  }
}

export { cases }
