<template>
  <div class="page">
    <computer-com v-if="currView"/>
    <mobile-com v-if="!currView"/>
  </div>
</template>

<script>
import ComputerCom from "../components/ComputerCom";
import MobileCom from "../components/MobileCom";
export default {
  name: 'index',
  data(){
    return {
      currView: true
    }
  },
  components: {
    ComputerCom,
    MobileCom
  },
  created(){
    this.currView = this.$native.is_pc() ? true : false;
  },
  mounted(){
    
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/
</style>
