<template>
  <div style="background: #ccc; height: 80px;">
    <h2>Event2组件</h2>
    <button @click="$emit('click', 1234)">分发自定义click事件</button><br>
    <button>分发自定义xxx事件</button><br>
  </div>
</template>
