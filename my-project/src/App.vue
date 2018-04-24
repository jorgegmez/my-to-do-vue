<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1" :route="{name:'App'}">Home</el-menu-item>
      <el-menu-item index="3" :route="{name:'AddTask'}">Add a new task</el-menu-item>
      <el-menu-item index="4" :route="{name:'Tasks'}">View your tasks</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
