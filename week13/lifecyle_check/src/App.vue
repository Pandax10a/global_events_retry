<template>
  <div id="app">
    <life-cycle-example></life-cycle-example>
  
  </div>
</template>

<script>

import LifeCycleExample from '@/components/LifeCycleExample.vue'


export default {
 
  beforeCreate: function () {
    console.log(`this is in before create`);
    document.body.insertAdjacentHTML(`afterbegin`, `<h1>testing1</h1>`)
  },
  created: function () {
    console.log(`this is in created`);
    document.body.insertAdjacentHTML(`afterbegin`, `<h1>testing2</h1>`)
  },
  beforeMount: function () {
    console.log(`this is in before mount`);
    document.body.insertAdjacentHTML(`afterbegin`, `<h1>testing3</h1>`)
  },
  mounted: function () {
    console.log(`this is in mount`);
    document.body.insertAdjacentHTML(`afterbegin`, `<h1>testing4</h1>`)

  },
  components: LifeCycleExample

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
