const cases = {
  horizontalCases: {
    0: function (grid) {
      grid.splice(2, 1, 'O')
    },
    1: function (grid) {
      grid.splice(0, 1, 'O')
    },
    2: function (grid) {
      grid.splice(1, 1, 'O')
    },
    3: function (grid) {
      grid.splice(5, 1, 'O')
    },
    4: function (grid) {
      grid.splice(3, 1, 'O')
    },
    5: function (grid) {
      grid.splice(4, 1, 'O')
    },
    6: function (grid) {
      grid.splice(8, 1, 'O')
    },
    7: function (grid) {
      grid.splice(6, 1, 'O')
    },
    8: function (grid) {
      grid.splice(7, 1, 'O')
    }
  },
  verticalCases: {
    0: function (grid) {
      grid.splice(6, 1, 'O')
    },
    1: function (grid) {
      grid.splice(0, 1, 'O')
    },
    2: function (grid) {
      grid.splice(3, 1, 'O')
    },
    3: function (grid) {
      grid.splice(7, 1, 'O')
    },
    4: function (grid) {
      grid.splice(1, 1, 'O')
    },
    5: function (grid) {
      grid.splice(4, 1, 'O')
    },
    6: function (grid) {
      grid.splice(8, 1, 'O')
    },
    7: function (grid) {
      grid.splice(2, 1, 'O')
    },
    8: function (grid) {
      grid.splice(5, 1, 'O')
    }
  },
  diagonalCases: {
    0: function (grid) {
      grid.splice(8, 1, 'O')
    },
    1: function (grid) {
      grid.splice(0, 1, 'O')
    },
    2: function (grid) {
      grid.splice(4, 1, 'O')
    },
    3: function (grid) {
      grid.splice(6, 1, 'O')
    },
    4: function (grid) {
      grid.splice(3, 1, 'O')
    },
    5: function (grid) {
      grid.splice(4, 1, 'O')
    }
  }
}

export { cases }
