<template>
  <div id="app">
    <Board msg="Tic Tac Toe Time!!"/>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    Board
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik');
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  background-color: #D1FAFF;
  background-image: radial-gradient(ellipse at center, #ffffff 1%,#f4f4f4 19%,
                                    #f2f4f4 19%,#c1e7f1 50%,#9dd8ea 80%,#a9c8e5 93%);
}
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #540c0cc4;
  height: 100%;
}
.hello{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn{
  background-color: rgb(199, 223, 226);
  border-radius: 5px;
  border: none;
  color: #540c0cc4;
  padding: 11px 5px;
  font-size: 20px;
  box-shadow: 0 1px 1px 0 rgb(136, 157, 160);
  font-weight: bold;
  transition: .2s;
  outline: 0;
}
.btn:active {
  transform: scale(.9);
}
.board{
  margin-top: 30px;
  width: 308px;
  height: 308px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  border-collapse: collapse;
}

.square{
  width: 100px;
  height: 100px;
  border: 2px #8624006e solid;
  text-align: center;
  vertical-align: middle;
  font-size: 70px;
  cursor: pointer;
}

.square:nth-child(-n+3){
  border-top: none;
}
.square:nth-child(n+7){
  border-bottom: none;
}
.square:nth-child(3n+1){
  border-left: none;
}
.square:nth-child(3n+3){
  border-right: none;
}
.endGame{
  z-index: 1;
  position: absolute;
  top: calc(40%);
  left: calc(50% - 125px);
  width: 250px;
  height: 200px;
  background: rgb(245, 208, 204);
  opacity: 0.85;
  font-size: 40px;
  border-radius: 15px;
  cursor: pointer;
}
.text{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100%;
}
</style>
