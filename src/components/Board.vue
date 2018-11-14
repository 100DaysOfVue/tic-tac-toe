<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="board">
      <div v-for="(square, index) in squares" :key="index" class="square">
        {{ square }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board',
  props: {
    msg: String
  },
  data  () {
    return {
      squares: Array(9).fill(null)
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

  .square{
    width: 100px;
    height: 100px;
    border: 1px rosybrown solid;
  }
</style>
