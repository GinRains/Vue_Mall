<template>
  <div>
    <h2>BABA有存款: {{money}}</h2>
    <button @click="borrowMoney('XM')">找小明借钱100</button><br>
    <button @click="borrowMoney('XH')">找小红借钱150</button><br>
    <button @click="borrowMoneyAll">找所有孩子借钱200</button><br>

    <br>
    <Son ref="XM"/>

    <br>
    <Daughter ref="XH"/>
  </div>
</template>

<script>
import Son from './Son'
import Daughter from './Daughter'

export default {
  name: 'ChildrenParentTest',
  data () {
    return {
      money: 1000
    }
  },

  methods: {
    borrowMoney(name) {
      if(name==='XM') {
        this.money += 100;
        this.$refs.XM.money -= 100
      }else if(name==="XH") {
        this.money += 150;
        this.$refs.XH.money -=150;
      }
    },
    borrowMoneyAll() {
      this.money += 200 * 2;
      this.$children.forEach(item => item.money -= 200)
    }
  },

  components: {
    Son,
    Daughter
  }
}
</script>

<style>

</style>
