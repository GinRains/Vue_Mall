<template>
  <div style="background: #ccc; height: 50px;">
    <span>小明每次花100元</span>
    <!--原生vue写法-->
    <!--<button @click="$emit('spendMoney', money - 100)">花钱</button>-->

    <!--原生sync写法，与v-model相似，父子值是同步的-->
    <!--<button @click="$emit('update:money', money - 100)">花钱</button>-->
    <!--爸爸还剩 {{money}} 元-->

    <!--使用v-model方式-->
    <button @click="$emit('input', value - 100)">花钱</button>
    爸爸还剩 {{value}} 元
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Child',
    props: ['money', 'value']
  }
</script>
