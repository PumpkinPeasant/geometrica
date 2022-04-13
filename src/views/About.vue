<template>
  <div class="grid">
    <div id="div1" class="divs">
      <p>1</p>
    </div>
    <div id="div2" class="divs">
      <p>2</p>
    </div>
    <div id="div3" class="divs">
      <div class="service">a</div>
      <div class="service">b</div>
      <div class="service">c</div>
      <div class="service">d</div>
      <div class="service">e</div>
      <div class="service">f</div>
      <div class="service">g</div>
      <div class="service">h</div>
      <div class="service">i</div>
      <div class="service">j</div>
      <div class="service">k</div>
      <div class="service">l</div>
      <div class="service">m</div>
      <div class="service">n</div>
      <div class="service">o</div>
    </div>
    <div id="div4" class="divs">
      <p>4</p>
    </div>
    <div id="div5" class="divs">
      <p>5</p>
    </div>
    <div id="div6" class="divs">
      <p>6</p>
    </div>
    <div id="div7" class="divs">
      <p>7</p>
    </div>
    <div id="div8" class="divs">
      <p>8</p>
    </div>
    <div id="div9" class="divs">
      <p>9</p>
    </div>
    <div id="div10" class="divs">
      <p>10</p>
    </div>
    <div id="div11" class="divs">
      <p>11</p>
    </div>
    <div id="div12" class="divs">
      <p>12</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped lang="scss">
.grid{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: minmax(361px, auto);
}
.divs{
  font-size: 100px;
}
#div1{

}
#div2{
  background-color: #C8D8F2;
  grid-column: 2 / 4;
}
#div3{
  background-color: #172D77;
  padding: 4vh 4vw;
  font-size: 60px;
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 20px;
  .service{
    background-color: white;
  }
}
#div4{

}
#div5{
  background-color: #C8D8F2;
}
#div6{

}
#div7{
  background-color: #172D77;
}
#div8{
  background-color: #172D77;
}
#div9{
  background-color: #C8D8F2;
  grid-column: 2 / 4;
}
#div10{

}
#div11{
  background-color: #C8D8F2;
}
#div12{

}
@media screen and (max-width: 1199px) and (min-width: 600px){
  #div3{
    grid-template-columns: repeat(2,1fr);
  }
}
@media screen and (max-width: 600px){
  .grid{
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(361px, auto);
  }
  #div9{
    background-color: #C8D8F2;
    grid-column: 1;
  }
  #div3{
    grid-template-columns: repeat(3,1fr);
    grid-auto-rows: 1fr;
    grid-column: 1;
  }
}
#div2{
  background-color: #C8D8F2;
  grid-column: 1;
}
</style>
